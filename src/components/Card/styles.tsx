import React from 'react'
import styled from 'styled-components'

interface jpg{
    image:string;
}
export const Container = styled.div`
    displey: flex;
    width: 5rem;
    height: 10rem;
    background: #6f121c;
    flex-direction: column;
    justify-content: space-around;
    background-color: rgba( 255, 255, 255, 0.5 );
    padding: 1rem;
    margin: 0.5rem;
    
`
export const Img = styled.img<jpg>`
    src:url(${(props)=> (props.image)});
    width: 5rem;
    height: 3rem;
`
export const Name = styled.div`
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
`
export const Actor = styled.div`
    font-size: 2rem;
    width: 1rem;
    height: 1rem;
`
