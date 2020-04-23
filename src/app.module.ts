import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './resources/auth/auth.module';

import { UsersHttpModule } from './resources/users/users-http.module';
import { PostsHttpModule } from './resources/posts/posts-http.module';
import { SessionsHttpModule } from './resources/sessions/sessions-http.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    // AuthModule,
    UsersHttpModule,
    PostsHttpModule,
    SessionsHttpModule,
  ],

})
export class AppModule {}
