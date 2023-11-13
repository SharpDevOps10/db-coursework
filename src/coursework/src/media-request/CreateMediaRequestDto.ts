import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
import { validationOptionsMsg } from '../utils/ValidationOptionsMsg';


export class CreateMediaRequestDto {
  @ApiProperty({
    description: 'Name of the media request',
  })
  @MinLength(2, validationOptionsMsg('Name is too short (min: 2)'))
  @MaxLength(150, validationOptionsMsg('Name is too long (max: 150)'))
  @IsNotEmpty(validationOptionsMsg('Name cannot be empty'))
    name: string;

  @ApiPropertyOptional({
    description: 'The description of the media request',
  })
  @IsOptional()
  @MaxLength(2000, validationOptionsMsg('Description is too long (max: 2000)'))
  @IsString(validationOptionsMsg('Description must be a string'))
    description?: string;

  @ApiPropertyOptional({
    description: 'The keywords of the media request',
  })
  @IsOptional()
  @IsString(validationOptionsMsg('Keywords must be a string'))
    keywords?: string;

  @ApiProperty({
    description: 'Type of the media request',
  })
  @IsString(validationOptionsMsg('Type must be a string'))
  @IsNotEmpty(validationOptionsMsg('Type cannot be empty'))
    type: string;

  @ApiProperty({
    description: 'Id of the user',
  })
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @IsNotEmpty(validationOptionsMsg('Id of the user cannot be empty'))
    userId: number;
}