import {Get, Render, Controller} from '@nestjs/common';

@Controller()
export class AppController {
    @Get('/')
    @Render('index.hbs')
    root() {
        return {title: 'Fuck yeah !'};
    }
}
