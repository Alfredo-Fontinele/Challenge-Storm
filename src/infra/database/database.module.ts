import { PrismaChallengeRepository } from './prisma/repositories/prisma-challenge-repository'
import { PrismaStudentRepository } from './prisma/repositories/prisma-student-repository'

import { ChallengeRepository } from '@application/repositories/challenge-repository'
import { StudentRepository } from '@application/repositories/student-repository'
import { PrismaService } from './prisma/prisma.service'
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { VerifyAlreadyExistChallengeByIdMiddleware } from '@infra/http/middlewares/challenge/verify-already-exist-challenge.middleware'
import { VerifyAlreadyExistStudentByEmailMiddleware } from '@infra/http/middlewares/student/verify-already-exist-student-by-email.middleware'

@Module({
  providers: [
    PrismaService,
    {
      provide: StudentRepository,
      useClass: PrismaStudentRepository,
    },
    {
      provide: ChallengeRepository,
      useClass: PrismaChallengeRepository,
    },
  ],
  exports: [StudentRepository, ChallengeRepository],
})
export class DatabaseModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VerifyAlreadyExistChallengeByIdMiddleware)
      .forRoutes({ path: 'challenges', method: RequestMethod.POST })
    consumer
      .apply(VerifyAlreadyExistStudentByEmailMiddleware)
      .forRoutes({ path: 'students', method: RequestMethod.POST })
  }
}
