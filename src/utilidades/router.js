import React, {Fragment} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import App from './../App'
import Panel from './../componets/Panel/Panel'
import Posts from './../containers/Posts/Posts'
import Albums from './../containers/Albums/Albums'
import NotFound from './../componets/NotFound/NotFound'
 
 const Router = () => {
     return(
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={App}/>
                    <Route path='/post' component={Posts}></Route>
                    <Route path='/albums' component={Albums}></Route>
                    <Route path='/panel' component={Panel}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
     )
 }

 export default Router;