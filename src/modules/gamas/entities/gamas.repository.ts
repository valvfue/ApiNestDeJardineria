import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Gama } from "./gama.entity";


@Injectable()
export class GamasRepository extends Repository<Gama>{
    constructor (private datasource: DataSource){
        super(Gama, datasource.createEntityManager())
    }

    async findByNombre(nombre: string){
        try{
            return await 
                    this.createQueryBuilder('GAMAS')
                        .where(`nombre = :value`, {value: nombre})
                        .getOne()
        }catch (error){
            throw new InternalServerErrorException('Error al buscar el nombre');
            
        }
    }

}