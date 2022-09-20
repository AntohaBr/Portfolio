import React from 'react';
import style from './Hire.module.css';
import styleContainer from "../common/styles/Container.module.css";


function Hire() {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <h2 className={style.title}>I am available for freelancer</h2>
                <button className={style.button}>Hire me</button>
            </div>
        </div>
    );
}

export default Hire;
