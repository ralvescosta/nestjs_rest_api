import {CreatePostDto} from './create.post.dto'
import { IsOptional } from 'class-validator';

export class UpdatePostDto extends CreatePostDto{

  @IsOptional()
  public description: string;

  @IsOptional()
  public content: string;
}
