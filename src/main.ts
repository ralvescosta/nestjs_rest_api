import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { RolesGuard }from './resources/auth/acl.strategy/roles.guard'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  app.use(
  rateLimit({
      windowMs: 60 * 1000, // 1 minutes
      max: 50, // limit each IP to 15 requests per windowMs
    }),
  );
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }))
  // app.useGlobalGuards(new RolesGuard(new Reflector()));

  if(process.env.NODE_ENV === 'development') {
    const options = new DocumentBuilder()
    .setTitle('Api Documentation')
    .setDescription('The REST API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(3333);
}
bootstrap();
