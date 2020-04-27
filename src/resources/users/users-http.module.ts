import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersModule } from './users.module';


@Module({
  imports: [UsersModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersHttpModule {}
