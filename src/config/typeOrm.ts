import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Users } from '../users/user.entity'

const options: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123456',
    database: 'estudos',
    port: 5432,
    logging: false,
    entities: [Users],
    migrations: ['src/migration'],
    migrationsRun: false,
    synchronize: false,
};

export default options;
