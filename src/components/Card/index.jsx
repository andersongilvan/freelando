import styled from '@emotion/styled'

const DivEstilizada = styled.div`

background: ${props => props.theme.cores.secundarias.a};

padding: ${props => props.theme.espacamentos.s};
border-radius: ${props => props.theme.espacamentos.l};
border: 1px solid;
border-color:${props => props.theme.cores.primarias.a}

`

export function Card({ children }) {
    return (
        <DivEstilizada>
            {children}
        </DivEstilizada>


    )
}