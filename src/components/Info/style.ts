import styled from 'styled-components'


interface house{
    color:string;
}

export const Container = styled.article<house>`
    width: 100%;
    height: 40rem;
    overflow: hidden;
    padding: 0 0 4rem;
    margin: 3rem auto 3rem;
    display: block;
    font-family: Quicksand,arial,sans-serif;
    box-shadow: 0 0 2rem rgba(0,0,0,.05), 0 0rem 5rem rgba(0,0,0,.08);
    border-radius: 1rem;
    background-color: ${(props)=> props.color==='' ? '#ffffff' : props.theme[props.color]};
`

export const CharacterInfoContainer = styled.div`
    width: 100%;
    margin: 1rem auto 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const CharacterName = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
`
export const InfoContainer = styled.div`
    margin: 1.2rem auto 1.2rem;
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const CharacterImage = styled.img`
    width: 16%;
    height: 20rem;
`
export const CharacterInfo = styled.div`
    font-size: 2.2rem;
    height: auto;
    margin: 0;
    
`