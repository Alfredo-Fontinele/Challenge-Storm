import { InMemoryChallengeRepository } from '../../../../../test/repositories/in-memory-challenge-repository'
import { makeChallenge } from '../../../../../test/factories/make-challenge'
import { SendChallenge } from './send-challenge'

describe('Use Case | Send Challenge', () => {
  it('should be able to send a challenge', async () => {
    const challengeRepository = new InMemoryChallengeRepository()
    const sendChallenge = new SendChallenge(challengeRepository)

    const newChallenge = makeChallenge()

    await challengeRepository.create(newChallenge)

    const { challenge } = await sendChallenge.execute({
      description: 'Challenge TypeScript | Clean Architecture',
      studentId: 'fake-student-id',
      url: 'http://fake-url-challenge',
    })

    expect(challenge).toBeTruthy()
  })
})
