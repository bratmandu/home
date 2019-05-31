import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Second from './Second'
import '../../styles/styleMain.scss'

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Nav />
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/Second" component={Second} />
      </div>
    </BrowserRouter>
  </div>
)
export default App
