import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamasService } from './gamas.service';
import { GamasController } from './gamas.controller';
import { Gama } from './entities/gama.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gama])],
  controllers: [GamasController],
  providers: [GamasService],
  exports: [GamasService]  
})
export class GamasModule {}
