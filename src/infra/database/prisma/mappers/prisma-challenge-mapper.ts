import { Challenge } from '@application/entities/challenge/challenge'
import { Challenge as ChallengeModel } from '@prisma/client'

export class PrismaChallengeMapper {
  static toPrisma(student: Challenge) {
    return {
      id: student.id,
      description: student.props.description,
      studentId: student.props.studentId,
      url: student.props.url,
      createdAt: student.props.createdAt,
      sendAt: student.props.sendAt,
      cancelAt: student.props.cancelAt,
      readAt: student.props.readAt,
    }
  }

  static toDomain(raw: ChallengeModel) {
    return new Challenge(
      {
        description: raw.description,
        studentId: raw.studentId,
        url: raw.url,
        createdAt: raw.createdAt,
        sendAt: raw.sendAt,
        cancelAt: raw.cancelAt,
        readAt: raw.readAt,
      },
      raw.id,
    )
  }
}
