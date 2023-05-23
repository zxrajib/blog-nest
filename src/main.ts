import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT;
  const host = process.env.SYSTEM_HOST;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Blog API')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('Blog')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document)

  await app.listen(port);
 
}
bootstrap();
