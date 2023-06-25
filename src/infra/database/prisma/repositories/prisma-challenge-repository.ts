import { ChallengeRepository } from '@application/repositories/challenge-repository'
import { PrismaChallengeMapper } from '../mappers/prisma-challenge-mapper'
import { Challenge } from '@application/entities/challenge/challenge'
import { PrismaService } from '../prisma.service'

export class PrismaChallengeRepository implements ChallengeRepository {
  constructor(private prismaService: PrismaService) {}

  async create(challenge: Challenge): Promise<void> {
    const raw = PrismaChallengeMapper.toPrisma(challenge)
    await this.prismaService.challenge.create({
      data: raw,
    })
  }

  async findById(challengeId: string): Promise<Challenge> {
    const challenge = await this.prismaService.challenge.findFirst({
      where: {
        id: challengeId,
      },
    })
    if (!challenge) {
      throw new Error('challenge not found')
    }
    return PrismaChallengeMapper.toDomain(challenge)
  }

  async update(challenge: Challenge): Promise<Challenge> {
    const raw = PrismaChallengeMapper.toPrisma(challenge)
    const challengeUpdated = await this.prismaService.challenge.update({
      where: {
        id: raw.id,
      },
      data: raw,
    })
    return PrismaChallengeMapper.toDomain(challengeUpdated)
  }

  async delete(challengeId: string): Promise<void> {
    await this.prismaService.challenge.delete({
      where: {
        id: challengeId,
      },
    })
  }
}
