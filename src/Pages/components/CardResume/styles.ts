import styled from "styled-components";



export const CardContainer = styled.section`
width: 100%;
height: 40vh;

`

export const CardContent = styled.div`
display: flex;
gap: 3rem;
justify-content: center;
align-items: center;

`

export const ContentEntryExit = styled.div`
background-color: ${props => props.theme['gray-600']};
padding: 1.5rem 1.5rem 1.5rem 2rem;
border-radius: 0.375rem;
width: 19rem;
transform: translateY(-3rem);
& header{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;



    & span{
      
        color: ${props => props.theme['gray-300']};
    }
}
`

export const ContentTotal = styled.div`
background-color: ${props => props.theme['green-700']};
padding: 1.5rem 1.5rem 1.5rem 2rem;
border-radius: 0.375rem;
width: 19rem;
transform: translateY(-3rem);
& header{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;



    & span{
      
        color: ${props => props.theme['gray-300']};
    }
}
`

