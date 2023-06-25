import { PrismaStudentMapper } from '../mappers/prisma-student-mapper'
import { Student } from '@application/entities/student/student'
import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaStudentRepository {
  constructor(private prismaService: PrismaService) {}

  async create(student: Student): Promise<Student> {
    const raw = PrismaStudentMapper.toPrisma(student)
    const newStudent = await this.prismaService.student.create({
      data: raw,
    })
    return PrismaStudentMapper.toDomain(newStudent)
  }

  async findById(studentId: string): Promise<Student> {
    const student = await this.prismaService.student.findFirst({
      where: {
        id: studentId,
      },
    })
    if (!student) {
      throw new NotFoundException()
    }
    return PrismaStudentMapper.toDomain(student)
  }

  async findByEmail(email: string): Promise<Student | null> {
    const student = await this.prismaService.student.findFirst({
      where: {
        email,
      },
    })
    if (!student) {
      throw new NotFoundException()
    }
    return PrismaStudentMapper.toDomain(student)
  }

  async update(student: Student, id: string): Promise<Student> {
    const raw = PrismaStudentMapper.toPrisma(student)
    const studentUpdated = await this.prismaService.student.update({
      where: {
        id: raw.id,
      },
      data: raw,
    })
    return PrismaStudentMapper.toDomain(studentUpdated)
  }

  async delete(studentId: string): Promise<void> {
    await this.prismaService.student.delete({
      where: {
        id: studentId,
      },
    })
  }
}
