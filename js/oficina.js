//Rubén Torres

//Importaciones
import { Edificio } from './edificio.js';

export class Oficina extends Edificio{
    constructor(numplantas, numhabitaciones, superficie, nombreempresa, numextintores, numtelfs){
        super(numplantas, numhabitaciones, superficie);
        this.nombreempresa = nombreempresa;
        this.numextintores = numextintores;
        this.numtelfs = numtelfs;
    }
}