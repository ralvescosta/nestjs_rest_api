import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  JoinColumn
} from 'typeorm';

import {User} from '../users/users.entity'

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  readonly id: number;

  /** */
  @Column()
  readonly user_id: string;

  /**
  * FK CONFIGURATION
  * First Parameter: Access the Model With as a PK;
  * Second Parameter: Receive the model instance and return the FK Configuration
  */
  @OneToMany(() => User, (user) => user.post) // FK
  @JoinColumn({ name: 'user_id' })
  readonly user: User;
  /** * */

  @Column()
  readonly description: string;

  @Column()
  readonly content: string;

  @CreateDateColumn()
  readonly created_at: Date;

  @UpdateDateColumn()
  readonly updated_at: Date;

  @DeleteDateColumn()
  readonly deleted_at: Date;
}
