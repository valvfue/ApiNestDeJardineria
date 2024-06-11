import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { Gama } from '../gamas/entities/gama.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productosRepository: Repository<Producto>,
    @InjectRepository(Gama)
    private readonly gamasRepository: Repository<Gama>,
  ) {}

  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const gama = await this.gamasRepository.findOne({ where: { id: createProductoDto.gamaId } });
    const producto = this.productosRepository.create({ 
      nombre: createProductoDto.nombre, 
      gama 
    });
    return this.productosRepository.save(producto);
  }

  findAll(): Promise<Producto[]> {
    return this.productosRepository.find({ relations: ['gama'] });
  }

  findOne(id: number): Promise<Producto> {
    return this.productosRepository.findOne({ where: { id }, relations: ['gama'] });
  }

  async deleteAllProductos(): Promise<void> {
    await this.productosRepository.delete({});
  }
  
}

