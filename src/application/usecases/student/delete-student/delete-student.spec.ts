import { InMemoryStudentRepository } from '@test/repositories/in-memory-student-repository'
import { makeStudent } from '@test/factories/make-student'
import { DeleteStudent } from './delete-student'

describe('Use Case | Delete Student', () => {
  it('should be able to delete a student', async () => {
    const studentRepository = new InMemoryStudentRepository()
    const deleteStudent = new DeleteStudent(studentRepository)

    const student = makeStudent()

    await studentRepository.create(student)

    await deleteStudent.execute({
      studentId: student.id,
    })
    expect(studentRepository.students).toHaveLength(0)
  })
})
