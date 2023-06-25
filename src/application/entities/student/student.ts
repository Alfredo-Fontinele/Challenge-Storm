import { Entity } from '@core/domain/entity'

export type StudentProps = {
  name: string
  email: string
}

export class Student extends Entity<StudentProps> {
  constructor(props: StudentProps, id?: string) {
    super(props, id)
  }
}
