import { Injectable, PipeTransform } from '@nestjs/common';
import { PrismaService } from '../prisma/PrismaService';
import { InvalidEntityIdException } from './InvalidEntityIdException';

@Injectable()
export class MediaRequestValidationPipe implements PipeTransform {
  constructor (private prismaService: PrismaService) {}

  async transform (id: number) {
    const mediaRequest = await this.prismaService.mediaRequest.findUnique({
      where: {
        id,
      },
    });
    if (!mediaRequest) throw new InvalidEntityIdException('MediaRequest');
    return id;
  }
}