import { Injectable, PipeTransform } from '@nestjs/common';
import { PrismaService } from '../prisma/PrismaService';
import { InvalidEntityIdException } from './InvalidEntityIdException';
import { CreateMediaRequestDto } from '../media-request/CreateMediaRequestDto';

@Injectable()
export class UserValidationPipe implements PipeTransform {
  constructor (private prismaService: PrismaService) {}

  async transform (data: CreateMediaRequestDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: data.userId,
      },
    });
    if (!user) throw new InvalidEntityIdException('User');
    return data;
  }
}