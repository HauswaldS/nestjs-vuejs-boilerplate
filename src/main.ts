import {NestFactory} from '@nestjs/core';
import {ApplicationModule} from './app.module';

declare const module: any;

// TODO: pull out of this file
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
    const app = await NestFactory.create(ApplicationModule);
    const port = normalizePort(process.env.PORT || '3000');
    app.setViewEngine('hbs');
    app.set('port', port);
    app.useStaticAssets('src/public');
    app.setBaseViewsDir('src/views');
    await app.listen(port);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}

bootstrap();
