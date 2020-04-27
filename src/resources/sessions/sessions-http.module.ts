import { Module } from '@nestjs/common';
import { SessionsController } from './sessions.controller';
import { SessionsService } from './sessions.service';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';



@Module({
  imports: [UsersModule, AuthModule],
  controllers: [SessionsController],
  providers: [SessionsService]
})
export class SessionsHttpModule {}
