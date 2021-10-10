import React from 'react'
import Product from './Product'
import Blog from './Blog'
import Order from './Order'
import { Route, Switch } from "react-router-dom"

function AppRoute() {


    return (



        <Switch>
            <Route exact path="/Product"><Product /></Route>
            <Route exact path="/Blog"><Blog /></Route>
            <Route exact path="/Order"><Order /></Route>
        </Switch>


    )

}

export default AppRoute;