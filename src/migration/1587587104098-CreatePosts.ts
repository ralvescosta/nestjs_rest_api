import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePosts1587587104098 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'posts',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          isNullable: false,
        },
        {
          name: 'user_id',
          isNullable: false,
          type: 'int',
        },
        {
          name: 'description',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'content',
          type: 'varchar',
          isNullable: false,
          isUnique: true,
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
      foreignKeys: [
        {
          columnNames: ['user_id'],
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
          onDelete: 'cascade',
          onUpdate: 'cascade',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('posts');
  }

}
