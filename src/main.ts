import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const PORT = process.env.PORT

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))

  await app.listen(PORT, () => {
    console.log(`\nServer is running on http://localhost:${PORT}\n`)
  })
}
bootstrap()
