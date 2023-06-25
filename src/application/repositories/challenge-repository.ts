import { Challenge } from '@application/entities/challenge/challenge'

export abstract class ChallengeRepository {
  abstract create(challenge: Challenge): Promise<void>
  abstract findById(challengeId: string): Promise<Challenge | null>
  abstract update(challenge: Challenge): Promise<Challenge | null>
  abstract delete(challengeId: string): Promise<void | null>
}
