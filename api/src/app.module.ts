import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [ProductsModule, ContactUsModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
