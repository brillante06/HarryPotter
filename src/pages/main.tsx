import React,{ Fragment, useEffect } from 'react'
import useSWR from 'swr'
import Card from '../components/Card'
import CardList from '../components/CardList'
import Header from '../components/Header' 
import { fetcher } from '../utils/request'
import {characterInfo} from '../types/index'
import { HarryPotter } from '../image/svg'


const Main:React.FC = () => { 
    const {data,error} = useSWR<characterInfo[]>("http://hp-api.herokuapp.com/api/characters",fetcher)

    if (error) return <div>failed to load</div>

    if (!data) return <div>loading...</div>
    

    return (
        <Fragment>

            <HarryPotter width="20rem" height="10rem" display="flex" />
        <CardList>
           { data.map(({name,actor,image},index)=> <Card name={name} actor={actor} image={image} key={index}></Card>) }
        </CardList>
        </Fragment>
    )
}

export default Main