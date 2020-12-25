import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ComicsService } from './comics.service';

@Controller('comics')
export class ComicsController {

  constructor(private readonly comicsServie: ComicsService) { }

  @Get('/all')
  async getAll() {
    return await this.comicsServie.getAll()
  }

  @Get('/id/:id')
  async getComicById(@Param('id') id) {
    return await this.comicsServie.getComicById(id)
  }

  @Post()
  async createComic(@Body() body) {
    return await this.comicsServie.createComic(body)
  }

  @Put('/:id')
  async updateComic(@Param('id') id: Number, @Body() body) {
    return await this.comicsServie.updateComic(id, body)
  }

  @Delete('/:id')
  async deleteComic(@Param('id') id: Number) {
    return await this.comicsServie.deleteComic(id)
  }

}