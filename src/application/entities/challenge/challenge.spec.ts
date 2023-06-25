import { Student } from '../student/student'
import { Challenge } from './challenge'

describe('Entity Case | Challenge', () => {
  it('should be able to create a challenge', () => {
    const student = new Student({
      email: 'alfredo@gmail.com',
      name: 'Alfredo',
    })

    const challenge = new Challenge({
      studentId: student.id,
      url: 'challenge-fake-url',
      description: 'challenge-fake-description',
    })

    expect(challenge).toBeTruthy()
  })
})
