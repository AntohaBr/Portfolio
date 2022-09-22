import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";


function Contact() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contact</h2>
                    <form className={style.contact}>
                        <input className={style.input}/>
                        <input className={style.input}/>
                        <textarea></textarea>
                    </form>
                <button className={style.button}>Send Message</button>
            </div>
        </div>
    );
}

export default Contact;
