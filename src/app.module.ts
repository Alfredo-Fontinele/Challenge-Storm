import { DatabaseModule } from '@infra/database/database.module'
import { HTTPModule } from '@infra/http/http.module'
import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, HTTPModule],
})
export class AppModule {}
