import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { validationOptionsMsg } from '../utils/ValidationOptionsMsg';

export class UpdateMediaRequestDto {
  @ApiPropertyOptional({
    description: 'Name of the updated media request',
  })
  @IsString()
  @MinLength(2, validationOptionsMsg('Name is too short (min: 2)'))
  @MaxLength(150, validationOptionsMsg('Name is too long (max: 150)'))
  @IsOptional()
    name?: string;

  @ApiPropertyOptional({
    description: 'Description of the updated media request',
  })
  @IsString(validationOptionsMsg('Description must be a string'))
  @MaxLength(2000, validationOptionsMsg('Description is too long (max: 2000)'))
  @IsOptional()
    description?: string;

  @ApiPropertyOptional({
    description: 'Keywords of the updated media request',
  })
  @IsOptional()
  @IsString(validationOptionsMsg('Keywords must be a string'))
    keywords?: string;

  @ApiPropertyOptional({
    description: 'Type of the updated media request',
  })
  @IsOptional()
  @IsString(validationOptionsMsg('Type must be a string'))
    type?: string;
}