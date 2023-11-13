import { Body, Controller, Get, Param, Post, ParseIntPipe, Patch, Delete } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { MediaRequestService } from './MediaRequestService';
import { MediaRequestResponse } from './MediaRequestResponse';
import { CreateMediaRequestDto } from './CreateMediaRequestDto';
import { UpdateMediaRequestDto } from './UpdateMediaRequest';

@ApiTags('MediaRequest')
@Controller('/mediarequest')
export class MediaRequestController {
  constructor (private mediaRequestService: MediaRequestService) {}

  @ApiOkResponse({
    type: MediaRequestResponse,
  })
  @ApiOperation({
    summary: 'Create a new media request',
  })
  @Post()
  async create (@Body() data: CreateMediaRequestDto) {
    return this.mediaRequestService.createMediaRequest(data);
  }

  @ApiOkResponse({
    type: MediaRequestResponse,
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
  async getMediaResponse (@Param('id', ParseIntPipe) id: number) {
    return this.mediaRequestService.getMediaRequest(id);
  }

  @ApiOkResponse({
    type: MediaRequestResponse,
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
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateMediaRequestDto,
  ) {
    return this.mediaRequestService.updateMediaRequest(id, data);
  }

  @ApiOkResponse({
    type: MediaRequestResponse,
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'Id of media request that you want to delete',
  })
  @ApiOperation({
    summary: 'Update media request by its id',
  })
  @Delete('/:id')
  async deleteMediaRequest (@Param('id', ParseIntPipe) id: number) {
    return this.mediaRequestService.deleteMediaRequest(id);
  }


}
