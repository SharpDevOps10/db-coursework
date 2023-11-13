import { Module } from '@nestjs/common';
import { MediaRequestController } from './MediaRequestController';
import { MediaRequestService } from './MediaRequestService';
import { PrismaModule } from '../prisma/PrismaModule';

@Module({
  controllers: [MediaRequestController],
  providers: [MediaRequestService],
  imports: [PrismaModule],
})
export class MediaRequestModule {}
