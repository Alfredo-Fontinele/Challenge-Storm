import { PrismaService } from '@infra/database/prisma/prisma.service'
import { ConflictException, Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

@Injectable()
export class VerifyAlreadyExistStudentByEmailMiddleware
  implements NestMiddleware
{
  constructor(private prismaService: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const existStudent = await this.prismaService.student.findFirst({
      where: {
        email: req.body.email,
      },
    })
    if (existStudent) {
      throw new ConflictException('student already exist')
    }
    next()
  }
}
