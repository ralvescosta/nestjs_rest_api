import { Module } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { UsersService } from './provider/users.service';
import { UsersModule } from './users.module';


@Module({
  imports: [UsersModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersHttpModule {}
