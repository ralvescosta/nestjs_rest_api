import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersHttpModule } from './users/users-http.module';
import { PostsHttpModule } from './posts/posts-http.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersHttpModule,
    PostsHttpModule
  ],
})
export class AppModule {}
