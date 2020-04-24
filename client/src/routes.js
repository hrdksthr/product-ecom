import React from 'react'
import asyncComponent from './HOC/asyncRender'
import { Route, Switch } from 'react-router-dom'
import Private from './HOC/private'

const AppLayout = asyncComponent(() =>
  import('./Modules/module.routes').then(module => module.default)
)
const Login = asyncComponent(() =>
  import('./Modules/Login/Login').then(module => module.default)
)

const Register = asyncComponent(() =>
  import('./Modules/Register/Register').then(module => module.default)
)

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Private component={AppLayout} />
    </Switch>
  )
}

export default Routes
