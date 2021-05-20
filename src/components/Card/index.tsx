import React,{FC} from 'react'
import * as S from './styles'

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