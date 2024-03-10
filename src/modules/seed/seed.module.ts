import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { AuthModule } from '../auth/auth.module';

import { GamasModule } from '../gamas/gamas.module';
import { ProductosModule } from '../productos/productos.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ AuthModule, GamasModule, ProductosModule ]
})
export class SeedModule {}
