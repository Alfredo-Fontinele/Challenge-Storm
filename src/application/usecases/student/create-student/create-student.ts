import { StudentRepository } from '@application/repositories/student-repository'
import { Student } from '@application/entities/student/student'
import { ConflictException, Injectable } from '@nestjs/common'

interface CreateStudentRequest {
  email: string
  name: string
}

@Injectable()
export class CreateStudent {
  constructor(private studentRepository: StudentRepository) {}

  async execute(request: CreateStudentRequest) {
    const { email, name } = request
    const student = new Student({
      email,
      name,
    })
    await this.studentRepository.create(student)
    return {
      student,
    }
  }
}
