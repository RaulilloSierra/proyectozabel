import { Controller, Post, Body } from '@nestjs/common';
import { ContactUsService } from '../service/contact-us.service';
import { ContactUsDto } from '../dto/contact-us.dto';

@Controller('contact-us')
export class ContactUsController {
  constructor(private readonly contactUsService: ContactUsService) {}

  @Post()
  async sendMessage(@Body() dto: ContactUsDto) {
    return this.contactUsService.handleContactForm(dto);
  }
}
