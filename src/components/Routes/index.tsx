import {Redirect, Route, Router, Switch,BrowserRouter} from 'react-router-dom'
import Main from '../../pages/main'
import * as React from 'react'
import {HarryPotter} from '../../image/svg'
import Info from '../Info'

const Routes:React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} /> 
            <Route path="/info/:id" component={Info} />
        </Switch>
    </BrowserRouter>
)
export default Routes