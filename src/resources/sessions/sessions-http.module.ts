import { Module } from '@nestjs/common';
import { SessionsController } from './controller/sessions.controller';
import { SessionsService } from './provider/sessions.service';
import { UsersModule } from '../users/users.module';


@Module({
  imports: [UsersModule],
  controllers: [SessionsController],
  providers: [SessionsService]
})
export class SessionsHttpModule {}
