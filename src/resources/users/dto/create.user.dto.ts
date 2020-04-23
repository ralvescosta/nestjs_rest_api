import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateUserDto {
  @IsString()
  @ApiProperty()
  public first_name: string;

  @IsString()
  @ApiProperty()
  public last_name: string;

  @IsEmail()
  @ApiProperty()
  public email: string;

  @IsString()
  @ApiProperty()
  public password: string;
}
