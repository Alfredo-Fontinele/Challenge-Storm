import { ChallengeRepository } from '@application/repositories/challenge-repository'
import { ChallengeNotFound } from '../../errors/challenge-not-found'
import { Injectable } from '@nestjs/common'

interface CancelSendChallengeRequest {
  challengeId: string
}

type CancelSendChallengeResponse = void

@Injectable()
export class CancelSendChallenge {
  constructor(private challengeRepository: ChallengeRepository) {}

  async execute(
    request: CancelSendChallengeRequest,
  ): Promise<CancelSendChallengeResponse> {
    const { challengeId } = request
    const existChallenge = await this.challengeRepository.findById(challengeId)
    if (!existChallenge) {
      throw new ChallengeNotFound()
    }
    existChallenge.cancel()
  }
}
