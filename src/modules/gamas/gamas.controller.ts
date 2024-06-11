import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { GamasService } from './gamas.service';
import { CreateGamaDto } from './dto/create-gama.dto';

@Controller('gamas')
export class GamasController {
  constructor(private readonly gamasService: GamasService) {}

  @Post('seed')
  create(@Body() createGamaDto: CreateGamaDto) {
    return this.gamasService.create(createGamaDto);
  }

  @Get()
  findAll() {
    return this.gamasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.gamasService.findOne(id);
  }
}

