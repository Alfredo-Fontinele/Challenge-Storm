export class StudentNotFound extends Error {
  constructor(message?: string) {
    super(message ?? 'student not found')
  }
}
