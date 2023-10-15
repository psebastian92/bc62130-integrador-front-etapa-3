import { createContext } from "react";

/* Creando CONTEXTO */
/* 1er -> Creación del contexto */
const CarritoContext = createContext();


/* 2do -> El armado del Provider */

const CarritoProvider = ( {children} ) => {

    const agregarCarritoContext = (producto) => {

    }

    const eliminarCarritoContext = (id) => {

    }

    const data = {agregarCarritoContext, eliminarCarritoContext}

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

/* 3er -> Exportaciones */
export {CarritoProvider}

export default CarritoContext