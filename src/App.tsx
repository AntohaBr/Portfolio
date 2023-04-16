import React from 'react'
import './App.css'
import {Jobs, Footer, Contact, Skills, Main, Header} from 'components'

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Jobs/>
            <Contact/>
            <Footer/>
        </div>
    )
}

