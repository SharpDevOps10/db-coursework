import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateMediaRequestDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
    name?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
    description?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
    keywords?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
    type?: string;
}