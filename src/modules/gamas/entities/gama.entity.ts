import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from '../../productos/entities/producto.entity';

@Entity({
    name:'GAMAS'
})
export class Gama {


    @PrimaryColumn('text', {unique: true})
    nombre: string;

    @Column('text', {unique: true})
    descripcion: string;

    @Column('text')
    imagen: string

    @OneToMany(
        () => Producto,
        (producto) => producto.gama,
        {cascade: false}
    )
    productos?: Producto[];
 
}


