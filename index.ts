class Cotizador {
    objetivo: string;
    inicial: string;
    cantidad: number;
    dolar = 200;
    chileno = 8;
    euro = 211;
    real = 18;
    pesos = 1;
   
    constructor(inicial: string, cantidad: number, objetivo: string) {
      this.inicial = inicial;
      this.cantidad = cantidad;
      this.objetivo = objetivo;
    }

    conversion() {
        console.log("Paso " + this.cantidad + " de " + this.inicial + " a " + (this.dolar/this.pesos)*this.cantidad + " "  + this.objetivo ) ;
       
    }
  } 
  
//const divisaInicial = prompt('Que divisa tenes? ej:("Dolar, Euro, Peso, Real, Chileno')!;  
//const divisaObjetivo = prompt('Divisa a convertir ej:("Dolar, Euro, Peso, Real, Chileno')!;
//const cantidad = prompt('Cantidad a convertir?')!;

let divisaInicial = "Dolar";
let divisaObjetivo = "Pesos";
let cantidad = 100;

const cotizador: Cotizador = new Cotizador(divisaInicial, cantidad , divisaObjetivo);

cotizador.conversion();