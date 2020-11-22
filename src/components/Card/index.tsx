import React,{FC} from 'react'
import * as Type from '../../types'
import * as S from './styles'
import useSWR from 'swr'
import {fetcher,url} from '../../utils/request'
interface simpleInfo{
    name: string;
    actor: string;
    image: string;
}

const Card:FC<simpleInfo> = ({name,actor,image}) => {
    return(
        <S.Container>
            <img src={image} />
            <S.Name>{name}</S.Name>
            <S.Actor>{actor}</S.Actor>
        </S.Container>
    )
}

export default Card