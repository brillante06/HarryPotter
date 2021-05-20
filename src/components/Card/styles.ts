import styled from 'styled-components'

interface house{
    color:string;
}


export const Container = styled.div<house>` 
    display: flex;
    width: 10rem;
    height: 15rem;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${(props)=> props.color==='' ? '#ffffff' : props.theme[props.color]};
    padding: 2rem;
    margin: 0.5rem;
    border: 0.2rem transparent;   
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
    padding: 2rem 0 2rem 0;
    color: ${(props)=>props.color==='' ? '#1e1e1e' : '#ffffff'};
`


