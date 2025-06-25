import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class SeedService {
  private readonly prisma = new PrismaClient();
  private readonly logger = new Logger(SeedService.name);

  async runSeedIfNeeded() {
    const count = await this.prisma.product.count();

    if (count > 0) {
      this.logger.log('Seed no necesario: ya existen productos.');
      return;
    }

    this.logger.log('Ejecutando seed de productos');
    await this.prisma.product.createMany({
      data: [
        {
          name: 'Plan Satelital Básico',
          description:
            'Internet satelital de alta velocidad para zonas rurales. Ideal para hogares con navegación básica y video llamadas.',
          price: 79.99,
          category: 'INTERNET',
        },
        {
          name: 'Plan Satelital Empresarial',
          description:
            'Conexión satelital estable y robusta para empresas que operan en zonas remotas. Soporte 24/7 incluido.',
          price: 149.99,
          category: 'INTERNET',
        },
        {
          name: 'Sistema de Automatización para Hogares',
          description:
            'Control de iluminación, temperatura y seguridad desde tu móvil. Compatible con Alexa y Google Home.',
          price: 349.99,
          category: 'AUTOMATIZACIÓN',
        },
        {
          name: 'Kit de Domótica Inteligente',
          description:
            'Sensores de movimiento, cerraduras electrónicas y cámaras conectadas. Gestión remota desde app móvil.',
          price: 499.99,
          category: 'DOMÓTICA',
        },
        {
          name: 'Solución de Automatización Empresarial',
          description:
            'Optimiza procesos productivos en tiempo real con sensores IoT, paneles de control y alertas automatizadas.',
          price: 1299.99,
          category: 'AUTOMATIZACIÓN',
        },
      ],
    });

    this.logger.log('Productos insertados con éxito.');
  }
}
