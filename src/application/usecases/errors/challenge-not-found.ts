export class ChallengeNotFound extends Error {
  constructor(message?: string) {
    super(message ?? 'challenge not found')
  }
}
