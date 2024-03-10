import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { Producto } from './entities/producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamasModule } from '../gamas/gamas.module';


@Module({
  controllers: [ProductosController],
  providers: [ProductosService],
  imports:[
    TypeOrmModule.forFeature( [ Producto]),
    GamasModule,
  ],
  exports: [ ProductosService ]

})
export class ProductosModule {}
