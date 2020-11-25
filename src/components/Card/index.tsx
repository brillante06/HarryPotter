import React,{FC, MouseEvent} from 'react'
import * as Type from '../../types'
import * as S from './styles'
import useSWR from 'swr'

interface simpleInfo{
    name: string | undefined;
    actor: string | undefined;
    image: string | undefined;
    onClick?: () => void;
}

const Card:FC<simpleInfo> = ({name,actor,image,onClick}) => {
    return(
        <S.Container onClick={onClick}>
            <S.Img src={image}></S.Img>
            <S.Name>name: {name}</S.Name>
            <S.Actor>Actor: {actor}</S.Actor>
        </S.Container>
    )
}

export default Card