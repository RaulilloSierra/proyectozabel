import { Injectable, Logger } from '@nestjs/common';
import { Resend } from 'resend';

@Injectable()
export class MailService {
  private readonly resend: Resend;
  private readonly logger = new Logger(MailService.name);

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY);
  }

  async sendMail(subject: string, html: string) {
    try {
      await this.resend.emails.send({
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject,
        html,
      });
      this.logger.log('Correo enviado con Resend');
    } catch (error) {
      this.logger.error('Error al enviar con Resend', error);
      throw new Error('No se pudo enviar el correo');
    }
  }
}
