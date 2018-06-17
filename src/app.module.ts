import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection, EntityManager} from 'typeorm';

import {ArticlesModule} from './modules/articles/articles.module';
import {Articles} from './modules/articles/articles.entity';

@Module({
    imports: [
        ArticlesModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: null,
            database: 'titoune_blog',
            entities: [Articles],
            synchronize: true,
        })],
    controllers: [AppController],
    providers: [],
})
export class ApplicationModule {
    constructor(private readonly connection: Connection, private readonly em: EntityManager) {
    }
}