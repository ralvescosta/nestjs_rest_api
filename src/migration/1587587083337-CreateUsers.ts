/* eslint-disable class-methods-use-this */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1587587083337 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          isNullable: false,
        },
        {
          name: 'first_name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'last_name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'email',
          type: 'varchar',
          isNullable: false,
          isUnique: true,
        },
        {
          name: 'password_hash',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'created_at',
          isNullable: false,
          type: 'timestamptz',
          default: 'CURRENT_TIMESTAMP',
        },
        {
          name: 'updated_at',
          isNullable: false,
          type: 'timestamptz',
          default: 'CURRENT_TIMESTAMP',
        },
        {
          name: 'deleted_at',
          isNullable: true,
          type: 'timestamptz',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
