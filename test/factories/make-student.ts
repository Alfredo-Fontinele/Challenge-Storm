import { Student } from '@application/entities/student/student'

export const makeStudent = (student?: Student) => {
  return new Student({
    email: 'student@gmail.com',
    name: 'Student Name',
    ...student,
  })
}
