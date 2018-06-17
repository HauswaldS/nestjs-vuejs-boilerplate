import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {DeleteResult, Repository} from 'typeorm';
import {Articles} from './articles.entity';

@Injectable()
export class ArticlesService {
    constructor(@InjectRepository(Articles)
                private readonly articlesRepository: Repository<Articles>) {
    }

    async findAll(): Promise<Articles[]> {
        return await this.articlesRepository.find();
    }

    async create(article: Articles): Promise<Articles> {
        return await this.articlesRepository.save(article);
    }

    async delete(articleId: number): Promise<DeleteResult> {
        return await this.articlesRepository.delete(articleId);
    }
}