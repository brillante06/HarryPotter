import React from 'react'
import { characterInfo } from '../../types/index'
import * as S from './style'

const Character:React.FC<characterInfo> = ({
    actor,
    alive,
    ancestry,
    dateOfBirth,
    eyeColour,
    gender,
    hairColour,
    hogwartsStaff,
    hogwartsStudent,
    house,
    image,
    name,
    patronus,
    species,
    wand,
    yearOfBirth,
}) => {
    return( 
        <S.Container>
            <S.CharacterNameCase>
                <S.CharacterName>{name}</S.CharacterName>
            </S.CharacterNameCase>
        </S.Container>
    )
}

export default Character