import React,{FC, MouseEvent} from 'react'
import * as Type from '../../types'
import * as S from './styles'
import useSWR from 'swr'

interface simpleInfo{
    name: string;
    image: string;
    house: string;
    onClick?: () => void;
}

const Card:FC<simpleInfo> = ({name,image,house,onClick}) => {
    return(
        <S.Container onClick={onClick} color={house}>
            <S.Img src={image}></S.Img>
            <S.Name color={house}>{name}</S.Name>
        </S.Container>
    )
}

export default Card