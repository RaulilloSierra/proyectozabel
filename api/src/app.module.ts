import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ContactUsModule } from './contact-us/contact-us.module';

@Module({
  imports: [ProductsModule, ContactUsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
