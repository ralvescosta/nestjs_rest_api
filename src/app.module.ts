import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersHttpModule } from './resources/users/users-http.module';
import { PostsHttpModule } from './resources/posts/posts-http.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersHttpModule,
    PostsHttpModule
  ],
})
export class AppModule {}
