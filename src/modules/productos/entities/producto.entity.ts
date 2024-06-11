import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Gama } from '../../gamas/entities/gama.entity';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Gama, gama => gama.productos)
  gama: Gama;
}


