import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersHttpModule } from './resources/users/users-http.module';
import { PostsHttpModule } from './resources/posts/posts-http.module';
import { SessionsHttpModule } from './resources/sessions/sessions-http.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersHttpModule,
    PostsHttpModule,
    SessionsHttpModule,
  ],
})
export class AppModule {}
