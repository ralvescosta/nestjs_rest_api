/* eslint-disable @typescript-eslint/camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

import * as bcrypt from 'bcryptjs'
import * as JWT from 'jsonwebtoken';

import {Post} from '../posts/posts.entity'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  readonly first_name: string;

  @Column()
  readonly last_name: string;

  @Column()
  readonly email: string;

  @Column()
  public password: string;

  @CreateDateColumn()
  readonly created_at: Date;

  @UpdateDateColumn()
  readonly updated_at: Date;

  @DeleteDateColumn()
  readonly deleted_at: Date;

  /**
  * PK CONFIGURATION
  * First Parameter: Access Model where FK are;
  * Second Parameter: When access the User Model, receive the FK configuration in the User Model;
  */
  @OneToMany(() => Post, (post) => post.user)
  readonly post: Post;

  @BeforeInsert()
  @BeforeUpdate()
  async before(): Promise<void>{
    if(this.password){
      this.password = await bcrypt.hash(this.password, 9)
    }
  }

  public async comparePassHash(password: string): Promise<boolean>{
    return bcrypt.compare(password, this.password)
  }

  public generateToken(): string {
    return JWT.sign({id: this.id}, 'TOKEN_KEY_2020', {
      expiresIn: '120days',
    })
  }

  public verifyToken(token: string): string | object {
    return JWT.verify(token, 'TOKEN_KEY_2020')
  }
}
