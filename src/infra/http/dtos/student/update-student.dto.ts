import { CreateStudentDTO } from './create-student.dto'
import { PartialType } from '@nestjs/mapped-types'

export class UpdatedStudentDTO extends PartialType(CreateStudentDTO) {}
