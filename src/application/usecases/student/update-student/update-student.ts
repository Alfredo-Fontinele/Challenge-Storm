import { UpdatedStudentDTO } from '@infra/http/dtos/student/update-student.dto'
import { StudentRepository } from '@application/repositories/student-repository'
import { StudentNotFound } from '@application/usecases/errors/student-not-found'
import { Student } from '@application/entities/student/student'
import { Injectable } from '@nestjs/common'

interface StudentRepositoryRequest {
  data: UpdatedStudentDTO
  studentId: string
}

interface StudentRepositoryResponse {
  student: Student
}

@Injectable()
export class UpdateStudent {
  constructor(private studentRepository: StudentRepository) {}

  async execute(
    request: StudentRepositoryRequest,
  ): Promise<StudentRepositoryResponse> {
    const { data, studentId } = request
    const newStudent = await this.studentRepository.findById(studentId)
    if (!newStudent) {
      throw new StudentNotFound()
    }
    return {
      student: await this.studentRepository.update(newStudent, studentId),
    }
  }
}
