import { StudentRepository } from '@application/repositories/student-repository'
import { StudentNotFound } from '@application/usecases/errors/student-not-found'
import { Injectable } from '@nestjs/common'

interface DeleteStudentRequest {
  studentId: string
}

type DeleteStudentResponse = void

@Injectable()
export class DeleteStudent {
  constructor(private studentRepository: StudentRepository) {}

  async execute(request: DeleteStudentRequest): Promise<DeleteStudentResponse> {
    const { studentId } = request
    const student = await this.studentRepository.findById(studentId)
    if (!student) {
      throw new StudentNotFound()
    }
    await this.studentRepository.delete(student.id)
  }
}
