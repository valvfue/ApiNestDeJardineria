import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { Producto } from './entities/producto.entity';
import { Gama } from '../gamas/entities/gama.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producto, Gama])],
  controllers: [ProductosController],
  providers: [ProductosService],
  exports: [ProductosService]  
})
export class ProductosModule {}


