import styled from "styled-components";



export const HomeContainer = styled.section`
background-color: ${props => props.theme['gray-800']};
width: 100%;
margin-top: 8rem;
`

export const TransactionsContainer = styled.main`
margin: 4rem auto 0;
padding:  0 1.5rem;
max-width: 1130px;
justify-content: space-around;

& table {
width: 100%;
border-collapse: separate;
border-spacing: 0 0.5rem;
margin: 0 auto;

}
& table > tbody > tr > td{
    background-color: ${props => props.theme['gray-700']};
    padding: 1.25rem 2rem;
  

    &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    } 
    &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }
}

`
//criei uma interface com uma props. variant,que varia entre 1 ou outro
interface PriceHighprops {
    variant: 'income' | 'outcome'
}
//passei a interface <> para o componente, e fiz uma condição ternaria.
export const PriceHighLight = styled.span<PriceHighprops>`
color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme['red-300']};
`