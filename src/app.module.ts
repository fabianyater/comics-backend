import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComicsModule } from './modules/comic/comics.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'comics',
    entities: ['dist/entities/*.entity.js'],
    synchronize: true,
  }),
    ComicsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }