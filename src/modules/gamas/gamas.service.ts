import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGamaDto } from './dto/create-gama.dto';
import { UpdateGamaDto } from './dto/update-gama.dto';
import { Gama } from './entities/gama.entity';
import { GamasRepository } from './entities/gamas.repository';

@Injectable()
export class GamasService {

  constructor(
    @InjectRepository(Gama)
    private readonly gamasRepo: GamasRepository
  ){
  }
  
  async create(createGamaDto: CreateGamaDto) {
    try{
      const { nombre } = createGamaDto;
      const gamaDB = this.gamasRepo.create(createGamaDto);

     // if (this.gamasRepo.findByNombre(nombre) == null){
        const gamasNew = await this.gamasRepo.save(gamaDB);
        return{
          msg: 'Gama creada',
          status: 200,
          data: gamasNew
        }
      // }

    }catch(error){
      return new InternalServerErrorException('Error em gamas')
    }
  }

  findAll() {
    return `This action returns all gamas`;
  }

  findOne(nombre: string) {
    return this.gamasRepo.findOne({
      where: { 
        nombre 
      },
      relations: {
          // productos: false,
      }
    });
  }

  update(id: number, updateGamaDto: UpdateGamaDto) {
    return `This action updates a #${id} gama`;
  }

  remove(id: number) {
    return `This action removes a #${id} gama`;
  }

  async deleteAllGamas(){
    const query = this.gamasRepo.createQueryBuilder('GAMAS');
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
