import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryModule } from './country/country.module';
import { TopicModule } from './topic/topic.module';
import { DiscussionModule } from './discussion/discussion.module';
import { ContributionModule } from './contribution/contribution.module';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CountryModule, 
    TopicModule, 
    DiscussionModule, 
    ContributionModule, 
    CommentModule, 
    UserModule, 
    OrganizationModule 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
