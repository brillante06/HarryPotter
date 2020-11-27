import {Redirect, Route, Router, Switch,BrowserRouter} from 'react-router-dom'
import CardList from '../CardList'
import Main from '../../pages/main'
import * as React from 'react'
import {HarryPotter} from '../../image/svg'
import Character from '../Character'

const Routes:React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} /> 
            <Route path="/:index" component={Character} />
        </Switch>
    </BrowserRouter>
)
export default Routes