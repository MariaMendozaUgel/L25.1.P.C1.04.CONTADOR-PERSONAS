import Cl_grupo from "./Cl_grupo.js";
import Cl_persona from "./Cl_persona.js";

let persona1 = new Cl_persona (15),
    persona2 = new Cl_persona (14),
    persona3 = new Cl_persona (19),
    persona4 = new Cl_persona (20),
    persona5 = new Cl_persona (16),
    persona6 = new Cl_persona (18),
    grupo = new Cl_grupo

    grupo.procesarPersona(persona1)
    grupo.procesarPersona(persona2)
    grupo.procesarPersona(persona3)
    grupo.procesarPersona(persona4)
    grupo.procesarPersona(persona5)
    grupo.procesarPersona(persona6)

    alert(`La edad promedio es de: ${grupo.promedioEdad()}`)