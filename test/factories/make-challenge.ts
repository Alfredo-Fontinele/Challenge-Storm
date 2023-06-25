import {
  Challenge,
  ChallengeProps,
} from '@application/entities/challenge/challenge'
import { randomUUID } from 'node:crypto'

type MakeChallengeProps = Partial<ChallengeProps>

export const makeChallenge = (challenge: MakeChallengeProps = {}) => {
  return new Challenge({
    studentId: randomUUID(),
    url: 'http://challenge-example.com',
    description: 'example-description-challenge',
    ...challenge,
  })
}
