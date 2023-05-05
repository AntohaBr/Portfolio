import React from 'react'
import 'App.scss'
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

