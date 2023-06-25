import { ChallengeRepository } from '@application/repositories/challenge-repository'
import { Challenge } from '@application/entities/challenge/challenge'
import { Injectable } from '@nestjs/common'

interface SendChallengeRequest {
  description: string
  studentId: string
  url: string
}

interface SendChallengeResponse {
  challenge: Challenge
}

@Injectable()
export class SendChallenge {
  constructor(private challengeRepository: ChallengeRepository) {}

  async execute(request: SendChallengeRequest): Promise<SendChallengeResponse> {
    const { description, studentId, url } = request
    const challenge = new Challenge({
      description,
      studentId,
      url,
    })
    await this.challengeRepository.create(challenge)
    return {
      challenge,
    }
  }
}
