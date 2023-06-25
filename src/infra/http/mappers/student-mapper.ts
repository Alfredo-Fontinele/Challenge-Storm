import { Student } from '@application/entities/student/student'

export interface StudentHTTPResponse {
  id: string
  name: string
  email: string
}

export class StudentMapper {
  static toHTTP(student: Student): StudentHTTPResponse {
    return {
      id: student.id,
      name: student.props.name,
      email: student.props.email,
    }
  }
}
