import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.title}>Anton Brel</h3>
                <div className={style.box}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <div className={style.text}>© 2022 All Rights Reserved.</div>
            </div>
        </div>

    );
}

export default Footer;