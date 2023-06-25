import { Student } from './student'

describe('Entity Case | Student', () => {
  it('should be able to create a student', () => {
    const student = new Student({
      email: 'alfredo@gmail.com',
      name: 'Alfredo',
    })
    expect(student).toBeTruthy()
  })
})
