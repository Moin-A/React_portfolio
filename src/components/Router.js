import React from "react"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import App from "../App"
import Header from "./Header"
import { route } from "next-server/dist/server/router";

const Router =()=> (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" c   omponent={App}/>
      </Switch>
    </BrowserRouter>
)

export default Router
