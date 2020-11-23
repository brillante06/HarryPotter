import {Redirect, Route, Router, Switch,BrowserRouter} from 'react-router-dom'
import CardList from '../CardList'
import * as React from 'react'
import {HarryPotter} from '../../image/svg'

const Routes:React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={CardList} /> 
        </Switch>
    </BrowserRouter>
)
export default Routes