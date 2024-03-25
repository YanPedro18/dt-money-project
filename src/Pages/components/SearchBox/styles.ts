import styled from "styled-components";



export const SearchBoxContainer = styled.form`
display: flex;
align-items: center;
gap: 1rem;
width: 100%;
justify-content: center;
margin: 0 auto;

& input {
    background-color: ${props => props.theme['gray-900']};
    border-radius: 0.375rem;
    width: 58.6rem;
    padding: 1rem;
    border: none;
    color:  ${props => props.theme['gray-500']};
}

& button {
    padding: 0.875rem 1.4rem;
    border-radius: 0.375rem;
    border: 1px solid ${props => props.theme['green-300']};
    background-color: transparent ;
    transition: background-color 0.2s;
    display: flex;
    gap: 0.4rem;
    align-items: center;
    color:  ${props => props.theme['green-300']};
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }
    &:not(:disabled):hover {
        background-color: ${props => props.theme['green-300']};
        color: white;
    }
}
`