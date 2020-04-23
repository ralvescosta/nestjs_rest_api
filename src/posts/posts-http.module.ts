import { Module } from '@nestjs/common';
import { PostsController } from './controller/posts.controller';
import { PostsService } from './provider/posts.service';
import { PostsModule } from './posts.module';


@Module({
  imports: [PostsModule],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsHttpModule {}
