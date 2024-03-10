import { PartialType } from '@nestjs/mapped-types';
import { CreateGamaDto } from './create-gama.dto';

export class UpdateGamaDto extends PartialType(CreateGamaDto) {}
