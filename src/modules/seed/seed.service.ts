import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import  dataGamas  from '../seed/data/gamas.json'
import  dataProductos  from '../seed/data/productos.json'

import { GamasService } from '../gamas/gamas.service';
import { ProductosService } from '../productos/productos.service';


@Injectable()
export class SeedService {
  
  constructor (
    private readonly pro: AuthService,
    private readonly gamasService: GamasService,
    private readonly productosService: ProductosService
  ){}

  async runData(){
    console.log('data')
    await this.insertNewGamas();
    await this.insertNewProductos();

    // return dataGamas;
  }
  private async insertNewGamas(){
    await this.gamasService.deleteAllGamas()
    const insertPromises = [];
    dataGamas.forEach( gama => {
      insertPromises.push(this.gamasService.create(gama))
    })
    await Promise.all(insertPromises);
    return true;
  }

  private async insertNewProductos(){

    await this.productosService.deleteAllProductos();
    console.log('productos borrados')
    const insertPromises = [];
    dataProductos.forEach( producto => {
      insertPromises.push(this.productosService.create(producto))
    })
    await Promise.all(insertPromises);
    return true;
  }
  
}
