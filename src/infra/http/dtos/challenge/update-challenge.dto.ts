import { CreateChallengeDTO } from './create-challenge.dto'
import { PartialType } from '@nestjs/mapped-types'

export class UpdateChallengeDTO extends PartialType(CreateChallengeDTO) {}
