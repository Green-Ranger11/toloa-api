import { Module } from '@nestjs/common';
import { CollaborationService } from './collaboration.service';
import { CollaborationController } from './collaboration.controller';

@Module({
  providers: [CollaborationService],
  controllers: [CollaborationController]
})
export class CollaborationModule {}
