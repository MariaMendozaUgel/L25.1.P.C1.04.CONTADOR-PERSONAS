import Cl_persona from "./Cl_persona.js";
export default class Cl_grupo {
    constructor(){
    this.acumEdad = 0;
    this.contPersona = 0;
    }
    procesarPersona(p){
        this.acumEdad += p.edad;
        this.contPersona++;
    }
    totalEdades() {
        	return this.acumEdad
    }
    totalPersonas() {
        	return this.contPersona
    }
    promedioEdad(){
        return this.acumEdad/this.contPersona;
    }
    
}