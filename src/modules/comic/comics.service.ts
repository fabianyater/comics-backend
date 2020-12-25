import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comic } from '../../entities/comic.entity';

@Injectable()
export class ComicsService {

  constructor(
    @InjectRepository(Comic) private readonly comicRepository: Repository<Comic>
  ) { }

  async getAll() {
    return await this.comicRepository.find()
  }

  async getComicById(id: Number) {
    return await this.comicRepository.findOne(Number(id))
  }

  async createComic(body) {
    return await this.comicRepository.save(body)
  }

  async updateComic(id: Number, body) {
    return await this.comicRepository.update(Number(id), body)
  }

  async deleteComic(id: Number) {
    return await this.comicRepository.delete(Number(id))
  }

}
