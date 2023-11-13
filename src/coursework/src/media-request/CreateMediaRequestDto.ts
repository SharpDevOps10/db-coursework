import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';


export class CreateMediaRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
    name: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
    description?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
    keywords?: string;

  @IsString()
  @ApiProperty()
    type: string;

  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @ApiProperty()
    userId: number;
}