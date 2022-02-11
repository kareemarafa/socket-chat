import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';
import { Post } from './post/post.entity';

@Module({
  imports: [
    PostModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'test',
      port: 8886,
      username: 'root',
      password: 'password',
      entities: [Post],
      synchronize: true,
    } as ConnectionOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
