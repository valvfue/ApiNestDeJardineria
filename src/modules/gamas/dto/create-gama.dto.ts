import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateGamaDto {
    
    @IsString()
    nombre: string;

    @IsString()
    descripcion: string;

    @IsString()
    imagen: string;

}
