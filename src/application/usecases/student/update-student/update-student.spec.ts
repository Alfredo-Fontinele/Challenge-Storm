import { InMemoryStudentRepository } from '@test/repositories/in-memory-student-repository'
import { UpdateStudent } from './update-student'
import { makeStudent } from '@test/factories/make-student'

describe('Use Case | Update Student', () => {
  it('should be able to update student', async () => {
    const studentRepository = new InMemoryStudentRepository()
    const updateStudent = new UpdateStudent(studentRepository)

    const newStudent = makeStudent()

    await studentRepository.create(newStudent)

    const { student } = await updateStudent.execute({
      data: newStudent.props,
      studentId: newStudent.id,
    })

    expect(student).toHaveProperty('id')
    expect(student).toHaveProperty('props')
  })
})
