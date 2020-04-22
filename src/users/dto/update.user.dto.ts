import {CreateUserDto} from './create.user.dto'
import { IsOptional } from 'class-validator';

export class UpdateUserDto extends CreateUserDto{
  @IsOptional()
  public name: string;

  @IsOptional()
  public email: string;

  @IsOptional()
  public password: string;
}
