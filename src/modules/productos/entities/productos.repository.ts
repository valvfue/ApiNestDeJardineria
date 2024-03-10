import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Producto } from "./producto.entity";


@Injectable()
export class ProductosRepository extends Repository<Producto>{
    constructor (private datasource: DataSource){
        super(Producto, datasource.createEntityManager())
    }
}