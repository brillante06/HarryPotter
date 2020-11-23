import React,{ useEffect } from 'react'
import useSWR from 'swr'
import Card from '../components/Card'
import CardList from '../components/CardList' 
import { fetcher } from '../utils/request'
import {characterInfo} from '../types/index'

const Main:React.FC = () => { 
    const {data,error} = useSWR<characterInfo[]>("http://hp-api.herokuapp.com/api/characters",fetcher)
    console.log(data)

    if (error) return <div>failed to load</div>

    if (!data) return <div>loading...</div>

    return (
        <CardList>
           { data.map(({name,actor,image})=> <Card name={name} actor={actor} image={image}></Card>) }
        </CardList>
    )
}

export default Main