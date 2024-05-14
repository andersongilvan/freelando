import { ThemeProvider } from "@emotion/react";

const tema = {
    cores: {
        branco: '',
        atencao: '',
        focus: '',
        primarias: {
            a : '',
            b: '',
            c: ''
        },
        secundarias: {
            a : '#EBEAF9',
            b: '',
            c: ''
        },
        primarias: {
            a : '#5754ED',
            b: '',
            c: ''
        },
        neutras: {
            a : '',
            b: '',
            c: '',
            d: ''
        },
        dark: {
            a: '',
            b: ''
        }
    },
    espacamentos: {
        s: '16px',
        l: '32px'
    },
    fontFamily: "'Montserrat', sans-serif"
}

export function ProvedorTema({ children }) {
    return (<ThemeProvider theme={tema}>
        {children}
    </ThemeProvider>)
}