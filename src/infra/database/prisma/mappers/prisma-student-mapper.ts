import { Student } from '@application/entities/student/student'
import { Student as StudentModel } from '@prisma/client'

export class PrismaStudentMapper {
  static toPrisma(student: Student) {
    return {
      id: student.id,
      name: student.props.name,
      email: student.props.email,
    }
  }

  static toDomain(raw: StudentModel) {
    return new Student(
      {
        email: raw.email,
        name: raw.name,
      },
      raw.id,
    )
  }
}
