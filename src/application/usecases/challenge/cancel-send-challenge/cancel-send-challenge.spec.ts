import { InMemoryChallengeRepository } from '../../../../../test/repositories/in-memory-challenge-repository'
import { makeChallenge } from '../../../../../test/factories/make-challenge'
import { CancelSendChallenge } from './cancel-send-challenge'

describe('Use Case | Case Send Challenge', () => {
  it('should be able to cancel send challenge', async () => {
    const challengeRepository = new InMemoryChallengeRepository()
    const cancelSendChallenge = new CancelSendChallenge(challengeRepository)

    const challenge = makeChallenge()

    await challengeRepository.create(challenge)

    await cancelSendChallenge.execute({
      challengeId: challenge.id,
    })

    expect(challenge.props).toHaveProperty('cancelAt')
    expect(challengeRepository.challenges[0].props.cancelAt).toEqual(
      expect.any(Date),
    )
  })
})
