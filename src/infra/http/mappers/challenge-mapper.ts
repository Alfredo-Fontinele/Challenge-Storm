import { Challenge } from '@application/entities/challenge/challenge'

export interface ChallengeHTTPResponse {
  id: string
  description: string
  studentId: string
  url: string
}

export class ChallengeMapper {
  static toHTTP(challenge: Challenge): ChallengeHTTPResponse {
    return {
      id: challenge.id,
      description: challenge.props.description,
      studentId: challenge.props.studentId,
      url: challenge.props.url,
    }
  }
}
