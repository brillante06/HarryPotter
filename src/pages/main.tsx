import React,{ Fragment, useEffect } from 'react'
import useSWR from 'swr'
import Card from '../components/Card'
import List from '../components/List'
import Header from '../components/Header' 
import { fetcher } from '../utils/request'
import {Character} from '../types/index'
import { HarryPotter } from '../image/svg'
import { useHistory,withRouter } from "react-router-dom";
import styled from 'styled-components'
const S = {
    Img :styled.img`
    height:10%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
    `
}
const Main:React.FC = () => { 
    const {data,error} = useSWR<Character[]>("http://hp-api.herokuapp.com/api/characters",fetcher)
    const History = useHistory();

    if (error) return <div>failed to load</div>

    if (!data) return <div>loading...</div>
    const click = (value:number) => { 
       History.push({pathname:`/info/${value}`,state:{obj:data}})
    }

    return (
        <Fragment>
            <S.Img src="https://i.pinimg.com/originals/8b/b3/99/8bb3991dca3078f26bab8d07770f8d33.png"></S.Img>
        <List>
           { data.map(({name,actor,image,house},index)=> <Card name={name} image={image} house={house} key={index} onClick={()=>{click(index)}}></Card>) }
        </List>
        </Fragment>
    )
}

export default withRouter(Main)