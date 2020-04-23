import {IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @IsString()
  @ApiProperty()
  public description: string;

  @IsString()
  @ApiProperty()
  public content: string;
}
