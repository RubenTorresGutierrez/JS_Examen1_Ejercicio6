//Rubén Torres

//Importaciones
import { Edificio } from './edificio.js';
import { Casa } from './casa.js';
import { Oficina } from './oficina.js';

class App{
    constructor(){
        this.casa1 = new Casa(4, 5, 172, 3, 2);
        this.casa2 = new Casa(4, 4, 93, 2, 1);
        this.oficina1 = new Oficina(7, 12, 320, 'Empresa1', 12, 6);
        this.oficina2 = new Oficina(9, 15, 648, 'Empresa2', 24, 12);
        window.onload = this.iniciar.bind(this);
    }
    iniciar(){
        console.log(this.oficina1.nombreempresa);
    }
}

new App();