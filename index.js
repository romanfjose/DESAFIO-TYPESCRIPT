var Cotizador = /** @class */ (function () {
    function Cotizador(inicial, cantidad, objetivo) {
        this.dolar = 200;
        this.chileno = 8;
        this.euro = 211;
        this.real = 18;
        this.pesos = 1;
        this.inicial = inicial;
        this.cantidad = cantidad;
        this.objetivo = objetivo;
    }
    Cotizador.prototype.conversion = function () {
        console.log("Paso " + this.cantidad + " de " + this.inicial + " a " + (this.dolar / this.pesos) * this.cantidad + " " + this.objetivo);
    };
    return Cotizador;
}());
//const divisaInicial = prompt('Que divisa tenes? ej:("Dolar, Euro, Peso, Real, Chileno')!;  
//const divisaObjetivo = prompt('Divisa a convertir ej:("Dolar, Euro, Peso, Real, Chileno')!;
//const cantidad = prompt('Cantidad a convertir?')!;
var divisaInicial = "Dolar";
var divisaObjetivo = "Pesos";
var cantidad = 100;
var cotizador = new Cotizador(divisaInicial, cantidad, divisaObjetivo);
cotizador.conversion();
