import styled from 'styled-components'


interface house{
    color:string;
}

// export const Container = styled.article`
//     min-height: 90%; min-width: 1024px; /* Set up proportionate scaling */ 
//     width: 100%; height: auto; /* Set up positioning */
//     position: absolute;
//     top: 0;
//     left: 0;
// `

export const Container = styled.article<house>`
    width: 20rem;
    height: 20rem;
    overflow: hidden;
    padding: 0 0 4rem;
    margin: 3rem auto 3rem;
    display: block;
    font-family: Quicksand,arial,sans-serif;
    box-shadow: 0 0 2rem rgba(0,0,0,.05), 0 0rem 5rem rgba(0,0,0,.08);
    border-radius: 1rem;
    background-color: #700d1f;
`

export const CharacterInfoContainer = styled.div`
    width: auto;
    margin: 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const CharacterName = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`
export const InfoContainer = styled.div`
    margin: 1.2rem 0 1.2rem 0;
`
export const CharacterImage = styled.img`
    width: 8.8rem;
    height: 8.8rem;
`
export const CharacterInfo = styled.div`
    font-size: 1.2rem;
    height: auto;
    margin: 0;
    
`