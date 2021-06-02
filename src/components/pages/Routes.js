import React from 'react'
import { Switch, Route, Link } from "react-router-dom"
import MainPage from './main'
import Buttons from './styles/buttons'
import PaperCustom from './styles/paper'
import SwalPage from './styles/swal';

const Routes = () => {
    return (
        <Switch>
            <Route path="/button">
                <Buttons/>
            </Route>
            <Route path="/paper">
                <PaperCustom />
            </Route>
            <Route path="/swal">
                <SwalPage/>
            </Route>
            <Route path="/">
                <MainPage/>
            </Route>
        </Switch>
    )
}

export default Routes
