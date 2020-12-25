import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comic } from 'src/entities/comic.entity';
import { ComicsController } from './comics.controller';
import { ComicsService } from './comics.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comic])],
  controllers: [ComicsController],
  providers: [ComicsService]
})
export class ComicsModule { }
