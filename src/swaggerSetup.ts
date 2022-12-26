import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class swaggerSetup {
  private app;
  constructor(app) {
    this.app = app;
  }

  setUp() {
    const config = new DocumentBuilder()
      .setTitle('Möbel')
      .setDescription('The Möbel API description')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(this.app, config);
    SwaggerModule.setup('api', this.app, document);
  }
}
