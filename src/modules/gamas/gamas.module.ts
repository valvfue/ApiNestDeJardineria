import { Module } from '@nestjs/common';
import { GamasService } from './gamas.service';
import { GamasController } from './gamas.controller';
import { Gama } from './entities/gama.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from '../productos/productos.module';

@Module({
  controllers: [GamasController],
  providers: [GamasService],
  imports:[
    TypeOrmModule.forFeature( [ Gama])
  ],
  exports: [ GamasService ]
})
export class GamasModule {}
