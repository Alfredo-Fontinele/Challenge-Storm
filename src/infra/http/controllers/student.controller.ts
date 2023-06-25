import { DeleteStudent } from '@application/usecases/student/delete-student/delete-student'
import { UpdateStudent } from '@application/usecases/student/update-student/update-student'
import { CreateStudent } from '@application/usecases/student/create-student/create-student'
import { StudentHTTPResponse, StudentMapper } from '../mappers/student-mapper'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { UpdatedStudentDTO } from '../dtos/student/update-student.dto'
import { CreateStudentDTO } from '../dtos/student/create-student.dto'

@Controller('students')
export class StudentController {
  constructor(
    private createStudent: CreateStudent,
    private updateStudent: UpdateStudent,
    private deleteStudent: DeleteStudent,
  ) {}

  @Post()
  async create(
    @Body() payload: CreateStudentDTO,
  ): Promise<StudentHTTPResponse> {
    const { email, name } = payload
    const { student } = await this.createStudent.execute({
      email,
      name,
    })
    return StudentMapper.toHTTP(student)
  }

  @Patch(':id')
  async update(
    @Body() payload: UpdatedStudentDTO,
    @Param('id') id: string,
  ): Promise<StudentHTTPResponse> {
    const { email, name } = payload
    const { student } = await this.updateStudent.execute({
      data: payload,
      studentId: id,
    })
    return StudentMapper.toHTTP(student)
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.deleteStudent.execute({
      studentId: id,
    })
  }
}
