import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import BasicRouting from './components/BasicRouting'
import RenderingElements from './components/RenderingElements'
import StateManagement from './components/StateManagement'
import HandlingEvents from './components/HandlingEvents'
import Es6Javascript from './components/Es6Javascript'
import FormValidation from './components/FormValidation'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home |
              </Link>
              <Link to="/basic_routing">
                {` Basic Routing |`}
              </Link>
              <Link to="/rendering_elements">
                {` Rendering Elements |`}
              </Link>
              <Link to="/state_management">
                {` State Management |`}
              </Link>
              <Link to="/handling_events">
                {` Handling Events |`}
              </Link>
              <Link to="/es6_javascript">
                {` ES6 Javascript |`}
              </Link>
              <Link to="/form_validation">
                {` Form Validation`}
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/basic_routing">
            <BasicRouting/>
          </Route>
          <Route exact path="/rendering_elements">
            <RenderingElements date={new Date()}/>
          </Route>
          <Route exact path="/state_management">
            <StateManagement/>
          </Route>
          <Route exact path="/handling_events">
            <HandlingEvents/>
          </Route>
          <Route exact path="/es6_javascript">
            <Es6Javascript/>
          </Route>
          <Route exact path="/form_validation">
            <FormValidation/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}