import { IsOptional } from 'class-validator';

export class UpdateUserDto{
  @IsOptional()
  public first_name: string;

  @IsOptional()
  public last_name: string;

  @IsOptional()
  public email: string;

  @IsOptional()
  public password: string;
}
