import { IsString } from 'class-validator'

export class CreateChallengeDTO {
  @IsString()
  studentId: string

  @IsString()
  url: string

  @IsString()
  description: string
}
