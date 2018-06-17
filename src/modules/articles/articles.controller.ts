import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ArticlesService} from './articles.service';
import {Delete} from '@nestjs/common/utils/decorators/request-mapping.decorator';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articleService: ArticlesService) {
    }

    @Get()
    findAll() {
        return this.articleService.findAll();
    }

    @Post()
    create(@Body() articleToCreate) {
        return this.articleService.create(articleToCreate);
    }

    @Delete()
    delete(@Param('id') articleId) {
        return this.articleService.create(articleId);
    }
}