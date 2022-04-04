import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './country/country.module';
import { TopicModule } from './topic/topic.module';
import { DiscussionModule } from './discussion/discussion.module';
import { CollaborationModule } from './collaboration/collaboration.module';

@Module({
  imports: [CountryModule, TopicModule, DiscussionModule, CollaborationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
