import styled from 'styled-components'

export const Container = styled.div`
    width: 50%;
    height: 10%;
    overflow: hidden;
    padding: 0 0 5rem;
    margin: 3rem auto 0;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 2rem rgba(0, 0, 0, .05), 0 0rem 5rem rgba(0, 0, 0, .08);
    border-radius: 2rem;
`

export const CharacterInfoContainer = styled.div`
    width: 50%;
    height: 26%;
    padding: 0 3rem 0; 
    justify-content: space-between;
    flex-direction: row;
    display:flex;
    margin: 0 0 0 2rem;
`
export const CharacterName = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
`
export const InfoContainer = styled.div`
    width:20%;
    height:26rem;
    display:flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 1rem 0 5rem 0;
    justify-content:space-around;
`
export const CharacterNameCase  = styled.div`
    padding-top: 32px;
    padding-bottom: 32px;
`

export const CharacterImage = styled.img`
    padding: 3rem 0 5rem 0;
    width: 100%;
    height: 100%;
    margin : 0 5rem 0 0;
`
export const CharacterInfo = styled.div`
    font-size: 1.4rem;
    
`