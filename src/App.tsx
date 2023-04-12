import React from 'react';
import './App.css';
import Jobs from "./jobs/Jobs";
import Contact from "./contacts/Contacts";
import Footer from "./footer/Footer";
import {Header} from './header/Header'
import {Main} from './main/Main'
import {Skills} from './skills/Skills'
import {Hire} from './hire/Hire'


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Jobs/>
            <Hire/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
