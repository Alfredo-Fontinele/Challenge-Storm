import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common'
import { PrismaService } from '@infra/database/prisma/prisma.service'
import { NextFunction, Request, Response } from 'express'

@Injectable()
export class VerifyExistStudentByIdMiddleware implements NestMiddleware {
  constructor(private prismaService: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const existStudent = await this.prismaService.student.findFirst({
      where: {
        id: req.params.id,
      },
    })
    if (!existStudent) {
      throw new NotFoundException('student not found')
    }
    next()
  }
}
