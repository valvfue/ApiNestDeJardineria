import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GamasService } from './gamas.service';
import { CreateGamaDto } from './dto/create-gama.dto';
import { UpdateGamaDto } from './dto/update-gama.dto';

@Controller('gamas')
export class GamasController {
  constructor(private readonly gamasService: GamasService) {}

  @Post()
  create(@Body() createGamaDto: CreateGamaDto) {
    return this.gamasService.create(createGamaDto);
  }

  @Get()
  findAll() {
    return this.gamasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gamasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGamaDto: UpdateGamaDto) {
    return this.gamasService.update(+id, updateGamaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gamasService.remove(+id);
  }
}
