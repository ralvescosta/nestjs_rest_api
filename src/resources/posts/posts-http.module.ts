import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostsModule } from './posts.module';


@Module({
  imports: [PostsModule],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsHttpModule {}
