import React, { Component } from 'react'
import Hello from './Hello.jsx'

const App = () => {
    return (
        <div className="app">
            <nav class="nav nav--global nav--dark drop-shadow js-nav">
                <div class="nav__inner">
                    <div class="nav__header nav__header--logo-only">
                        <a class="nav__logo" href="//www.cmegroup.com" title="CME Group" target="_blank"></a>
                        <h1 class="nav__app-name">Base React App</h1>
                    </div>
                </div>
            </nav>
            App main.
            <Hello />
        </div>
    )
}

export default App
