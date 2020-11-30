import styled from 'styled-components'

interface house{
    color:string;
}


export const Container = styled.div<house>`
    display: flex;
    width: 10rem;
    height: 20rem;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props)=> props.theme[props.color]};
    padding: 2rem;
    margin: 0.5rem;
    border: 0.2rem solid;   
    border-radius: 10%
`
export const Img = styled.img`
    width: 10rem;
    height: 10rem; 
    
`
export const Name = styled.div<house>`
    font-size: 1.5rem;
    font-family: cursive;
    text-align: center;
    padding: 5rem 0 5rem 0;
    color: ${(props)=>props.color=='' ? '#1e1e1e' : '#ffffff'};
`


