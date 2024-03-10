import { IsDecimal, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductoDto {

    @IsString()
    codigo: string;

    @IsString()
    nombre: string;

    @IsString()
    codgama: string;

    @IsString()
    proveedor: string;

    @IsString()
    descripcion: string;

    @IsNumber()
    @IsOptional()
    stock: number;

    @IsNumber()
    @IsOptional()
    pvp: number;

    @IsNumber()
    @IsOptional()
    pcoste: number;

    @IsString()
    imagen: string;

}


