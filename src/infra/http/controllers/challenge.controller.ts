import { CancelSendChallenge } from '@application/usecases/challenge/cancel-send-challenge/cancel-send-challenge'
import { SendChallenge } from '@application/usecases/challenge/send-challenge/send-challenge'
import { CreateChallengeDTO } from '../dtos/challenge/create-challenge.dto'
import {
  ChallengeHTTPResponse,
  ChallengeMapper,
} from '../mappers/challenge-mapper'
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'

interface CreateRouteResponse {
  challenge: ChallengeHTTPResponse
}

@Controller('challenges')
export class ChallengeController {
  constructor(
    private sendChallenge: SendChallenge,
    private cancelSendChallenge: CancelSendChallenge,
  ) {}

  @Post()
  async create(
    @Body() payload: CreateChallengeDTO,
  ): Promise<CreateRouteResponse> {
    const { description, studentId, url } = payload
    const { challenge } = await this.sendChallenge.execute({
      description,
      studentId,
      url,
    })
    return {
      challenge: ChallengeMapper.toHTTP(challenge),
    }
  }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string): Promise<void> {
    await this.cancelSendChallenge.execute({
      challengeId: id,
    })
  }
}
