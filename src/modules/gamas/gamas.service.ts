import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gama } from './entities/gama.entity';
import { CreateGamaDto } from './dto/create-gama.dto';

@Injectable()
export class GamasService {
  constructor(
    @InjectRepository(Gama)
    private readonly gamasRepository: Repository<Gama>,
  ) {}

  create(createGamaDto: CreateGamaDto): Promise<Gama> {
    const gama = this.gamasRepository.create(createGamaDto);
    return this.gamasRepository.save(gama);
  }

  findAll(): Promise<Gama[]> {
    return this.gamasRepository.find({ relations: ['productos'] });
  }

  findOne(id: number): Promise<Gama> {
    return this.gamasRepository.findOne({ where: { id }, relations: ['productos'] });
  }

  async deleteAllGamas(): Promise<void> {
    await this.gamasRepository.delete({});
  }
  
}
