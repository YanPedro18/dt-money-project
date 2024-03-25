import styled from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';


export const HeaderContainer = styled.header`
display: flex;
align-items: center;
width: 95%;
max-width: 1220px;
flex-shrink: 0;
margin: 1.2rem auto;
justify-content: space-between;
`
interface ButtonPropsTransaction {
    variant: 'income' | 'outcome'
}

export const TransactionButton = styled.a`
border: none;
background-color: ${props => props.theme['green-300']};
color: white;
border-radius: 0.5rem;
padding: 0.75rem 1.25rem;
cursor: pointer;
transition: background-color 0.2s;

&:hover{
    background-color: ${props => props.theme['green-700']};
}
`
export const TextModal = styled.h2`
margin-left: 1.6rem;
color: white;

`
export const FormModal = styled.form`
width: 30rem;

display: flex;
flex-direction: column;
align-items: center;
margin-top: 1.7rem;
gap: 12px;
& input {
    width: 27rem;
    height: 3rem;
    border-radius: 6px;
    padding: 0.8rem;
    background-color: #121214;
    border: none;
    color: #7C7C8A;
;

}
`
export const OptionTransaction = styled(RadioGroup.Root)`
margin-top: 1rem;

width: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 16px;
`


export const ButtonTransaction = styled(RadioGroup.Item) <ButtonPropsTransaction>`
width: 12.982rem;
display: flex;
align-items: center;
justify-content: center;
gap: 0.3rem;
padding: 1rem 2rem;
background: #29292E;
border-radius: 6px;
text-align: center;
cursor: pointer;
color: white;
border: none;

svg {
    color:  ${props => props.variant === 'income' ? props.theme['green-500'] : props.theme["red-500"]};

    }
&[data-State='unchecked']:hover {
    transition: background-color 0.2s;
    background-color: ${props => props.theme['gray-600']} 
}
&[data-State='checked'] {
    color: ${props => props.theme.white}; 
    background-color: ${props => props.variant == 'income' ? props.theme["green-500"] : props.theme["red-500"]}; 

    svg {
    color: white !important;

    }
}




`
export const CloseModal = styled.button`
transform: translateX(28.4rem);
border: none;
color: #7C7C8A;
font-size: 0;
background-color: transparent;

`
export const ButtonCadastrar = styled.button`
position: relative;
color: white;
background-color:#00875F;
width: 27rem;
height: 55px;
border-radius: 5px;
padding: 20px, 32px, 20px, 32px;
gap: 8px;
margin-top: 1.5rem;
margin-bottom: 0.5rem;
border: none;

&:disabled {
    background-color:#005b40; 
}
`