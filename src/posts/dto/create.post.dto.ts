import {PostDto} from './post.dto';
import {IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreatePostDto extends PostDto {
  @IsString()
  @ApiProperty()
  public description: string;

  @IsString()
  @ApiProperty()
  public content: string;
}
