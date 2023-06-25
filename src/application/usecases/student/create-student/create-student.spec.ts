import { InMemoryStudentRepository } from '@test/repositories/in-memory-student-repository'
import { CreateStudent } from './create-student'

describe('Use Case | Create Student', () => {
  it('should be able to create a student', async () => {
    const studentRepository = new InMemoryStudentRepository()
    const createStudent = new CreateStudent(studentRepository)

    const { student } = await createStudent.execute({
      email: 'teste@gmail.com',
      name: 'teste',
    })

    expect(studentRepository.students).toHaveLength(1)
    expect(studentRepository.students[0]).toHaveProperty('id')
    expect(studentRepository.students[0]).toHaveProperty('props')
  })
})
