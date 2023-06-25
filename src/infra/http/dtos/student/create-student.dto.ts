import { IsEmail, IsString } from 'class-validator'

export class CreateStudentDTO {
  @IsString()
  name: string

  @IsEmail()
  email: string
}
