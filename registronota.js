"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroNota = void 0;
const boletim_1 = require("./boletim");
class RegistroNota {
    constructor() {
        this.Notas = [];
    }
    //Métodos
    inserirnoBoletim(b1, b2, b3, b4) {
        const boletim = new boletim_1.Boletim(b1, b2, b3, b4);
        this.Notas.push(boletim);
        return boletim;
    }
}
exports.RegistroNota = RegistroNota;
