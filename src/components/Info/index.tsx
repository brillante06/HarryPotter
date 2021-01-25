import React from 'react'
import { Character,wandInfo } from '../../types/index'
import {useLocation, useParams,withRouter} from 'react-router-dom'
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
                    <S.CharacterName color={info.house}>{info.name}</S.CharacterName>
                <S.CharacterInfoContainer>
                    <S.CharacterImage src={info.image}></S.CharacterImage>
                        <S.InfoContainer>
                            <S.CharacterInfo color={info.house}>Actor:{info.actor}</S.CharacterInfo>
                            <S.CharacterInfo color={info.house}>species:{info.species}</S.CharacterInfo>
                            <S.CharacterInfo color={info.house}>patronus:{info.patronus ? info.patronus : "None"} </S.CharacterInfo>
                            <S.CharacterInfo color={info.house}>dateOfBirth:{info.dateOfBirth}</S.CharacterInfo>
                    </S.InfoContainer> 
                </S.CharacterInfoContainer>
            </S.Container>
        
    )
}

export default Info