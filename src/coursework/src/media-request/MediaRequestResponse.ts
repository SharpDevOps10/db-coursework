import { ApiProperty } from '@nestjs/swagger';

export class MediaRequestResponse {
  @ApiProperty({
    description: 'The id of the media request',
  })
    id: number;

  @ApiProperty({
    description: 'The name of the media request',
  })
    name: string;

  @ApiProperty({
    description: 'Additional information about the media request',
  })
    description: string;

  @ApiProperty({
    description: 'Keywords about the media request',
  })
    keywords: string;

  @ApiProperty({
    description: 'The type of the media request',
  })
    type: string;

  @ApiProperty({
    description: 'The id of the user',
  })
    userId: number;

  @ApiProperty({
    description: 'The date, when the media request was create',
  })
    createdAt: Date;

  @ApiProperty({
    description: 'The date, when the media request was updated',
  })
    updatedAt: Date;
}