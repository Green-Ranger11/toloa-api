import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './country/country.module';
import { TopicModule } from './topic/topic.module';

@Module({
  imports: [CountryModule, TopicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
