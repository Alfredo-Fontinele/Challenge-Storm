import { Entity } from '@core/domain/entity'

export type ChallengeProps = {
  studentId: string
  url: string
  description: string
  createdAt?: Date
  sendAt?: Date
  cancelAt?: Date
  readAt?: Date
}

export class Challenge extends Entity<ChallengeProps> {
  constructor(props: ChallengeProps, id?: string) {
    super(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )
  }

  send() {
    this.props.sendAt = new Date()
  }

  read() {
    this.props.readAt = new Date()
  }

  cancel() {
    this.props.cancelAt = new Date()
  }
}
