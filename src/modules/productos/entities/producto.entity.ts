import { Gama } from "../../gamas/entities/gama.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";



@Entity({
    name:'PRODUCTOS'
})
export class Producto {

    @PrimaryColumn()
    codigo:string;

    @Column('text', {unique: true})
    nombre: string;

    @Column('varchar')
    codgama: string;

    @Column('text')
    descripcion: string;

    @Column('text')
    proveedor: string;

    @Column('integer')
    stock: number;

    @Column('integer')
    pvp: number;

    @Column('integer')
    pcoste: number;

    @Column('text')
    imagen: string;

    @ManyToOne(
        () => Gama,
        (gama) => gama.productos,
        { cascade: false }
    )
    gama?: Gama; 
 
}


