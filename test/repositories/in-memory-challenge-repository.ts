import { ChallengeRepository } from '@application/repositories/challenge-repository'
import { Challenge } from '@application/entities/challenge/challenge'

export class InMemoryChallengeRepository implements ChallengeRepository {
  challenges: Challenge[] = []

  async create(challenge: Challenge): Promise<void> {
    this.challenges.push(challenge)
  }

  async findById(challengeId: string): Promise<Challenge | null> {
    const existChallengeById = this.challenges.find(
      (challenge) => challenge.id === challengeId,
    )
    if (!existChallengeById) {
      return null
    }
    return existChallengeById
  }

  async update(challenge: Challenge): Promise<Challenge | null> {
    const challengeIndex = this.challenges.findIndex(
      (item) => item.id === challenge.id,
    )
    if (challengeIndex <= 0) {
      return null
    }
    this.challenges[challengeIndex] = challenge
    const challengeFound = this.challenges[challengeIndex]
    return challengeFound
  }

  async delete(challengeId: string): Promise<void | null> {
    this.challenges = this.challenges.filter(
      (challenge) => challenge.id !== challengeId,
    )
  }
}
