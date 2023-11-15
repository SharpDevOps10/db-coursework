import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/PrismaService';
import { MediaRequestResponse } from './MediaRequestResponse';
import { CreateMediaRequestDto } from './CreateMediaRequestDto';
import { UpdateMediaRequestDto } from './UpdateMediaRequestDto';

@Injectable()
export class MediaRequestService {
  constructor (private prismaService: PrismaService) {}

  async createMediaRequest (data: CreateMediaRequestDto): Promise<MediaRequestResponse> {
    return this.prismaService.mediaRequest.create({
      data,
    });
  }

  async getMediaRequest (id: number): Promise<MediaRequestResponse> {
    return this.prismaService.mediaRequest.findUnique({
      where: {
        id,
      },
    });
  }

  async getAllMediaRequests (): Promise<MediaRequestResponse[]> {
    return this.prismaService.mediaRequest.findMany();
  }

  async updateMediaRequest (id: number, data: UpdateMediaRequestDto): Promise<MediaRequestResponse> {
    return this.prismaService.mediaRequest.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteMediaRequest (id: number): Promise<MediaRequestResponse> {
    return this.prismaService.mediaRequest.delete({
      where: {
        id,
      },
    });
  }
}
