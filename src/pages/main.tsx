import React,{ Fragment, useEffect } from 'react'
import useSWR from 'swr'
import Card from '../components/Card'
import CardList from '../components/CardList'
import Header from '../components/Header' 
import { fetcher } from '../utils/request'
import {Character} from '../types/index'
import { HarryPotter } from '../image/svg'
import { useHistory,withRouter } from "react-router-dom";


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
            <HarryPotter width="20rem" height="10rem" display="flex" />
        <CardList>
           { data.map(({name,actor,image},index)=> <Card name={name} actor={actor} image={image} key={index} onClick={()=>{click(index)}}></Card>) }
        </CardList>
        </Fragment>
    )
}

export default withRouter(Main)