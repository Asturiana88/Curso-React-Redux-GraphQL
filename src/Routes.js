import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/home/HomePage'
import FavPage from './components/favs/FavPage'
import LoginPage from './components/login/LoginPage'
import {connect} from 'react-redux'
import GraphHome from './components/home/GraphHome'

function PrivateRoute({path, component, loggedIn, ...rest}){
    if (loggedIn){
        return <Route path={path} component={component}{...rest}/>
    }
    return <Redirect to="/login" {...rest} />
}

function mapState(state){
    return {
            loggedIn : state.user.loggedIn
    }
}

const RouteState = connect(mapState)(PrivateRoute)

export default function Routes() {
    return (
        <Switch>
            <RouteState exact path="/" component={Home} />
            <RouteState path="/favs" component={FavPage} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    )
}

