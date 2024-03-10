import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ProductosRepository } from './entities/productos.repository';
import { Producto } from './entities/producto.entity';
import { GamasService } from '../gamas/gamas.service';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productosRepo: ProductosRepository,
    private readonly gamasService: GamasService 
  )
  {}
  async create(createProductoDto: CreateProductoDto) {
   try{
      const { codgama, ...campos } = createProductoDto;
      const gamaObj = await this.gamasService.findOne(codgama);
      const productoDB = this.productosRepo.create(createProductoDto);
      productoDB.gama = gamaObj;
      
      console.log(productoDB)
      const productosNew = await this.productosRepo.save(productoDB);
      return{
        msg: 'Producto creada',
        status: 200,
        data: productosNew
      }

   }catch(error){
    console.log(error)
    return new InternalServerErrorException('Error em productos')
   }
  }

  findAll() {
    return `This action returns all productos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }

  async deleteAllProductos(){
    const query = this.productosRepo.createQueryBuilder('PRODUCTOS');
    try{
      return await query  
        .delete()
        .where({})
        .execute()
    }catch(error){
      throw new InternalServerErrorException('sysadmin ...')
    }
  }
}
