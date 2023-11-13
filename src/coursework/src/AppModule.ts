import { Module } from '@nestjs/common';
import { MediaRequestModule } from './media-request/MediaRequestModule';
@Module({
  imports: [MediaRequestModule],
})
export class AppModule {}
