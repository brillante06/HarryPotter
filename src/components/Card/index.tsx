import React,{FC} from 'react'
import * as Type from '../../types'
import * as S from './styles'
import useSWR from 'swr'

interface simpleInfo{
    name: string;
    actor: string;
    image: string;
}

const Card:FC<simpleInfo> = ({name,actor,image}) => {
    return(
        <S.Container>
            <S.Img src={image}></S.Img>
            <S.Name>{name}</S.Name>
            <S.Name>{actor}</S.Name>
        </S.Container>
    )
}

export default Card