import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Producto } from '../../productos/entities/producto.entity';

@Entity()
export class Gama {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Producto, producto => producto.gama)
  productos: Producto[];
}



