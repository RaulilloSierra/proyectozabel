import { Injectable } from '@nestjs/common';
import { ContactUsDto } from '../dto/contact-us.dto';
import { MailService } from '../../mail/mail.service';

@Injectable()
export class ContactUsService {
  constructor(private readonly mailService: MailService) {}

  async handleContactForm(dto: ContactUsDto) {
    const { name, email, message } = dto;

    const html = `
      <h3>Nuevo mensaje desde el formulario de contacto</h3>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong><br>${message}</p>
    `;

    await this.mailService.sendMail(`Mensaje de ${name}`, html);

    return {
      message: 'Gracias por contactarnos. Te responderemos pronto.',
    };
  }
}
