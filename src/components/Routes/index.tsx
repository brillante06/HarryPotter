import {Redirect, Route, Router, Switch,BrowserRouter} from 'react-router-dom'
import Card from '../Card'
import * as React from 'react'
import {HarryPotter} from '../../image/svg'

const Routes:React.FC = () => (
    <BrowserRouter>
    <HarryPotter />
        <Switch>
            <Route exact path="/" component={Card} /> 
        </Switch>
    </BrowserRouter>
)
export default Routes