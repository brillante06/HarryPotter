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
    console.log(value.id)
    const info = obj[value.id]
    
    return( 
        <S.Container>
            <S.CharacterNameCase>
                <S.CharacterName>{info.name}</S.CharacterName>
            </S.CharacterNameCase>
        </S.Container>
    )
}

export default Info