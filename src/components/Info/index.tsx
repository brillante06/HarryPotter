import React from 'react'
import { Character,wandInfo } from '../../types/index'
import {useLocation, useParams,withRouter} from 'react-router-dom'
import * as S from './style'
// interface info{
//     actor: string
//     alive: string
//     ancestry: string
//     dateOfBirth: string
//     eyeColour: string
//     gender: "male" | "female"
//     hairColour: string
//     hogwartsStaff: string
//     hogwartsStudent: string
//     house: string
//     image: string
//     name: string
//     patronus: string
//     species: string
//     // wand: wandInfo
//     yearOfBirth: string

// }
interface id{
    id:string
}

const Info = ()  => {
    const location = useLocation<any>()
    const value:id = useParams()
    const obj = location.state.obj
    const info = obj[value.id]
    
    return( 
        <S.back>
            <S.Container color={info.house}>
                <S.CharacterNameCase>
                    <S.CharacterName>{info.name}</S.CharacterName>
                </S.CharacterNameCase>
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
        </S.back>
    )
}

export default Info