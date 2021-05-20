import React from 'react'
import {useLocation, useParams} from 'react-router-dom'
import * as S from './style'
interface id{
    id:string
}

const Info = ()  => {
    const location = useLocation<any>()
    const value:id = useParams()
    const obj = location.state.obj
    const info = obj[value.id]
    
    return( 
        
            <S.Container color={info.house}>
                    <S.CharacterName >{info.name}</S.CharacterName>
                <S.CharacterInfoContainer>
                    <S.CharacterImage src={info.image}></S.CharacterImage>
                        <S.InfoContainer>
                            <S.CharacterInfo>Actor:{info.actor}</S.CharacterInfo>
                            <S.CharacterInfo>species:{info.species}</S.CharacterInfo>
                            <S.CharacterInfo>patronus:{info.patronus ? info.patronus : "None"} </S.CharacterInfo>
                            <S.CharacterInfo>dateOfBirth:{info.dateOfBirth}</S.CharacterInfo>
                    </S.InfoContainer> 
                </S.CharacterInfoContainer>
            </S.Container>
        
    )
}

export default Info