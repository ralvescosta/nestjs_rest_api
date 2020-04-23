export class PostDto {
  public id?: number;
  public user_id?: number;
  public description: string;
  public content: string;
  public created_at?: Date;
  public updated_at?: Date;
  public deleted_at?: Date;
}
