import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

declare const module: any;

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const port = normalizePort(process.env.PORT || '3000');
    app.setViewEngine('hbs');
    app.set('port', port);
    await app.listen(port);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}

bootstrap();
