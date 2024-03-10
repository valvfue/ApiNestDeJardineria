
export interface IGama {
    id: string;
    nombre: string;
    descripcion: string;
    imagen: string;
}
export interface IRespApiNewGama{
    msg: 'Gama creada',
    status: 200,
    data: IGama

}