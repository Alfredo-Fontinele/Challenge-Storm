import { StudentRepository } from '@application/repositories/student-repository'
import { Student } from '@application/entities/student/student'

export class InMemoryStudentRepository implements StudentRepository {
  students: Student[] = []

  async create(student: Student): Promise<Student> {
    this.students.push(student)
    return student
  }

  async findById(studentId: string): Promise<Student | null> {
    const existStudentById = this.students.find(
      (student) => student.id === studentId,
    )
    if (!existStudentById) {
      return null
    }
    return existStudentById
  }

  async findByEmail(email: string): Promise<Student | null> {
    const existStudentByEmail = this.students.find(
      (student) => student.props.email === email,
    )
    if (!existStudentByEmail) {
      return null
    }
    return existStudentByEmail
  }

  async update(student: Student, id: string): Promise<Student> {
    const studentIndex = this.students.findIndex((item) => item.id === id)
    this.students[studentIndex] = student
    const studentFound = this.students[studentIndex]
    return studentFound
  }

  async delete(studentId: string): Promise<void | null> {
    this.students = this.students.filter((student) => student.id !== studentId)
  }
}
