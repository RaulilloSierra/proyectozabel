import { Module } from '@nestjs/common';
import { ContactUsController } from './controller/contact-us.controller';
import { ContactUsService } from './service/contact-us.service';
import { MailService } from 'src/mail/mail.service';

@Module({
  controllers: [ContactUsController],
  providers: [ContactUsService, MailService],
})
export class ContactUsModule {}
