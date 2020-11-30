import styled from 'styled-components'


interface house{
    color:string;
}

export const back = styled.div`
    background-color: #ecbb6c;
    min-height: 100%; min-width: 1024px; /* Set up proportionate scaling */ 
    width: 100%; height: auto; /* Set up positioning */
    position: absolute;
    top: 0;
    left: 0;
`

export const Container = styled.div<house>`
    width: 70%;
    height: 10%;
    overflow: hidden;
    padding: 0 0 5rem;
    margin: 3rem auto 0;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 2rem rgba(0, 0, 0, .05), 0 0rem 5rem rgba(0, 0, 0, .08);
    border-radius: 2rem;
    background-color: ${(props)=> props.theme[props.color]};
`

export const CharacterInfoContainer = styled.div`
    width: 60%;
    height: 40%;
    padding: 0 3rem 0; 
    justify-content: space-between;
    flex-direction: row;
    display:flex;
    margin: 0 0 0 5rem;
`
export const CharacterName = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
`
export const InfoContainer = styled.div`
    width:30%;
    height:26rem;
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 1rem 0 5rem 0;
`
export const CharacterNameCase  = styled.div`
    padding-top: 32px;
    padding-bottom: 32px;
`

export const CharacterImage = styled.img`
    padding: 1rem 0 5rem 0;
    width: 100%;
    height: 100%;
    margin : 0 5rem 0 0;
`
export const CharacterInfo = styled.div`
    font-size: 1.4rem;
    height: auto;
    width: 15rem;
    display:flex;
    
`