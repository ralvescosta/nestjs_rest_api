import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateSessionDto {
  @IsEmail()
  @ApiProperty()
  public email: string;

  @IsString()
  @ApiProperty()
  public password: string;
}
