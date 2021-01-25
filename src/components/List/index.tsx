import React,{FC} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    align-content: flex-start;
`
const CardList:FC = ({children}) => (
    <Container>
    {children}
    </Container>
)
export default CardList