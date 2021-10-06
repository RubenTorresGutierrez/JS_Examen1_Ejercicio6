//Rubén Torres

//Importaciones
import { Edificio } from './edificio.js';

export class Casa extends Edificio{
    constructor(numplantas, numhabitaciones, superficie, numdormitorios, numbanos){
        this.numdormitorios = numdormitorios;
        this.numbanos = numbanos;
    }
}