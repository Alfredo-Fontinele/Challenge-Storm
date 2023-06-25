import { PrismaService } from '@infra/database/prisma/prisma.service'
import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

@Injectable()
export class VerifyExistChallengeMiddleware implements NestMiddleware {
  constructor(private prismaService: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const existChallenge = await this.prismaService.challenge.findFirst({
      where: {
        id: req.params.id,
      },
    })
    if (!existChallenge) {
      throw new NotFoundException('Challenge not found')
    }
    next()
  }
}
