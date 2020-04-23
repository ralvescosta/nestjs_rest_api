export class UserDto {
  public id?: number;
  public first_name: string;
  public last_name: string;
  public email: string;
  public password_hash: string;
  public created_at?: Date;
  public updated_at?: Date;
  public deleted_at?: Date;
}
