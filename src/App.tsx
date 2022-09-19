import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Jobs from "./jobs/Jobs";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Jobs/>
        </div>
    );
}

export default App;
