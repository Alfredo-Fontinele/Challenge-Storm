import { CancelSendChallenge } from '@application/usecases/challenge/cancel-send-challenge/cancel-send-challenge'
import { SendChallenge } from '@application/usecases/challenge/send-challenge/send-challenge'
import { DeleteStudent } from '@application/usecases/student/delete-student/delete-student'
import { UpdateStudent } from '@application/usecases/student/update-student/update-student'
import { CreateStudent } from '@application/usecases/student/create-student/create-student'
import { ChallengeController } from './controllers/challenge.controller'
import { StudentController } from './controllers/student.controller'
import { DatabaseModule } from '@infra/database/database.module'
import { Module } from '@nestjs/common'

@Module({
  imports: [DatabaseModule],
  controllers: [ChallengeController, StudentController],
  providers: [
    SendChallenge,
    CancelSendChallenge,
    CreateStudent,
    DeleteStudent,
    UpdateStudent,
  ],
})
export class HTTPModule {}
