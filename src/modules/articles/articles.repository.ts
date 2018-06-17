// import {Connection, EntityRepository, Repository} from 'typeorm';
// import {Articles} from './articles.entity';
//
// @EntityRepository(Articles)
// export class ArticlesRepository extends Repository<Articles> {
//     async findAllArticles(): Promise<Articles[]> {
//         return await this.find();
//     }
// }
//
// export const ArticlesRepositoryProvider = {
//     provide: 'ArticlesRepository',
//     useFactory: (connection: Connection) => connection.getCustomRepository(ArticlesRepository),
//     inject: [Connection],
// };