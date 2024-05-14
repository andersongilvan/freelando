import { Global, css } from "@emotion/react";

const estilos = tema => {
    return{
        html: {
            fontFamily: tema.fontFamily
        },
        body: {
            margin: 0
            
        }
    }
    
}

export function Estilos() {
    return(<Global styles={estilos} />)
}