"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boletim = void 0;
const situacao_1 = require("./situacao");
//Atributos
class Boletim {
    constructor(b1, b2, b3, b4) {
        this.b1 = b1;
        this.b2 = b2;
        this.b3 = b3;
        this.b4 = b4;
        this.mp = this.calcularMediaParcial();
        this.md = this.calcularMediaFinal();
        this.situação = this.calcularSituação();
    }
    //Métodos
    calcularMediaParcial() {
        return (this.b1 * 2 + this.b2 * 2 + this.b3 * 3 + this.b4 * 3) / 10;
    }
    calcularMediaFinal() {
        return this.mp;
    }
    calcularSituação() {
        if (this.mp >= 60) {
            return situacao_1.Situação.APROVADO;
        }
        if (this.mp < 10) {
            return situacao_1.Situação.REPROVADO;
        }
        else
            return situacao_1.Situação.PROVAFINAL;
    }
}
exports.Boletim = Boletim;
