import React from 'react'
import { Switch, Route } from "react-router-dom"
import MainPage from './main'
import Buttons from './styles/buttons'
import PaperCustom from './styles/paper'
import Progress from './styles/progress'
import SwalPage from './styles/swal';
import TypographyPage from './styles/typography'

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
            <Route path="/progress">
                <Progress/>
            </Route>
            <Route path="/typography">
                <TypographyPage/>
            </Route>
            <Route path="/">
                <MainPage/>
            </Route>
        </Switch>
    )
}

export default Routes
