import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { User } from '../users/users.entity'

const options: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123456',
    database: 'estudos',
    port: 5432,
    logging: false,
    entities: [User],
    migrations: ['src/migration'],
    migrationsRun: true,
    synchronize: true,
};

export default options;
