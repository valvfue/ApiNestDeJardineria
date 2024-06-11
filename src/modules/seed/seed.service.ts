import { Injectable } from '@nestjs/common';
import { GamasService } from '../gamas/gamas.service';
import { ProductosService } from '../productos/productos.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly gamasService: GamasService,
    private readonly productosService: ProductosService,
  ) {}

  async runSeed() {
    await this.gamasService.deleteAllGamas();
    await this.productosService.deleteAllProductos();

    const gamas = [
      { nombre: 'Herramientas' },
      { nombre: 'Plantas' },
    ];

    const productos = [
      { nombre: 'Martillo', gamaId: 1 },
      { nombre: 'Taladro', gamaId: 1 },
      { nombre: 'Rosa', gamaId: 2 },
    ];

    for (const gama of gamas) {
      await this.gamasService.create(gama);
    }

    for (const producto of productos) {
      await this.productosService.create(producto);
    }
  }
}

