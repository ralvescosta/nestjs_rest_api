import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersHttpModule } from './users/users-http.module';
import typeOrmConfig from './config/typeOrm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'estudos',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + 'migration'],
      synchronize: false,
    }),
    UsersHttpModule
  ],
})
export class AppModule {}
