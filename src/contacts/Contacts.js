import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";



function Contact() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contact</h2>
                <div className={style.inputBlock}>
                    <form>
                        <div className={style.inputBoxOne}><input className={style.inputOne}/></div>
                        <div className={style.inputBoxToo}><input className={style.inputToo}/></div>
                        <div className={style.textareaBox}><textarea className={style.textarea}/></div>
                    </form>
                </div>
                <button className={style.button}>Send Message</button>
            </div>
        </div>
    );
}

export default Contact;
