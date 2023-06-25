import { Student } from '@application/entities/student/student'

export abstract class StudentRepository {
  abstract create(student: Student): Promise<Student>
  abstract findById(studentId: string): Promise<Student | null>
  abstract findByEmail(email: string): Promise<Student | null>
  abstract update(student: Student, id: string): Promise<Student>
  abstract delete(studentId: string): Promise<void | null>
}
