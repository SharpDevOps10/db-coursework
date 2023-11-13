import { Body, Controller, Get, Param, Post, ParseIntPipe, Patch, Delete } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { MediaRequestService } from './MediaRequestService';
import { MediaRequestResponse } from './MediaRequestResponse';
import { CreateMediaRequestDto } from './CreateMediaRequestDto';
import { UpdateMediaRequestDto } from './UpdateMediaRequestDto';
import { UserValidationPipe } from '../utils/UserValidationPipe';
import { MediaRequestValidationPipe } from '../utils/MediaRequestValidationPipe';

@ApiTags('MediaRequest')
@Controller('/mediarequest')
export class MediaRequestController {
  constructor (private mediaRequestService: MediaRequestService) {}

  @ApiOkResponse({
    type: MediaRequestResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidBodyException:
      User id cannot be empty
      Name is too short (min: 2)
      Name is too long (max: 150)
      Name cannot be empty
      Type cannot be empty
      Type must be a string
      Keywords must be a string
      Description must be a string
      Description is too long (max: 2000)
    
    InvalidEntityIdException:
      User with such id was not found`,
  })
  @ApiOperation({
    summary: 'Create a new media request',
  })
  @Post()
  async create (@Body(UserValidationPipe) data: CreateMediaRequestDto) {
    return this.mediaRequestService.createMediaRequest(data);
  }

  @ApiOkResponse({
    type: MediaRequestResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      Media request with such id was not found`,
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'Id of media request that you want to get',
  })
  @ApiOperation({
    summary: 'Get media request by its id',
  })
  @Get('/:id')
  async getMediaResponse (@Param('id', ParseIntPipe, MediaRequestValidationPipe) id: number) {
    return this.mediaRequestService.getMediaRequest(id);
  }

  @ApiOkResponse({
    type: MediaRequestResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidBodyException:
      Name is too short (min: 2)
      Name is too long (max: 150)
      Type must be a string
      Keywords must be a string
      Description must be a string
      Description is too long (max: 2000)
    
    InvalidEntityIdException:
      Media request with such id was not found`,
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'Id of media request that you want to update',
  })
  @ApiOperation({
    summary: 'Update media request by its id',
  })
  @Patch('/:id')
  async update (
    @Param('id', ParseIntPipe, MediaRequestValidationPipe) id: number,
    @Body() data: UpdateMediaRequestDto,
  ) {
    return this.mediaRequestService.updateMediaRequest(id, data);
  }

  @ApiOkResponse({
    type: MediaRequestResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      Media request with such id was not found`,
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'Id of media request that you want to delete',
  })
  @ApiOperation({
    summary: 'Delete media request by its id',
  })
  @Delete('/:id')
  async deleteMediaRequest (
    @Param('id', ParseIntPipe, MediaRequestValidationPipe) id: number
  ) {
    return this.mediaRequestService.deleteMediaRequest(id);
  }
}
