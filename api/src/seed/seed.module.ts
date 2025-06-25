import { Module, OnModuleInit } from '@nestjs/common';
import { SeedService } from './seed.service';

@Module({
  providers: [SeedService],
})
export class SeedModule implements OnModuleInit {
  constructor(private readonly seedService: SeedService) {}

  async onModuleInit() {
    await this.seedService.runSeedIfNeeded();
  }
}
