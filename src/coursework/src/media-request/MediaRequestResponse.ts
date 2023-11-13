import { ApiProperty } from '@nestjs/swagger';

export class MediaRequestResponse {
  @ApiProperty()
    id: number;

  @ApiProperty()
    name: string;

  @ApiProperty()
    description: string;

  @ApiProperty()
    keywords: string;

  @ApiProperty()
    type: string;

  @ApiProperty()
    userId: number;

  @ApiProperty()
    createdAt: Date;

  @ApiProperty()
    updatedAt: Date;
}