import React from 'react';
import s from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";


function Contact() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contact'}/>
                <form className={s.contact}>
                    <div className={s.inputWrapperBlock}>
                        <div className={s.inputItem}>
                            <div className={s.inputWrapper}>
                                <input className={s.input}/>
                                <label htmlFor='name'>Name</label>
                            </div>
                        </div>
                        <div className={s.inputItem}>
                            <div className={s.inputWrapper}>
                                <input className={s.input} placeholder={'Email'}/>
                            </div>
                        </div>
                        <div className={s.inputItem}>
                            <div className={s.inputWrapper}>
                                <textarea className={s.textarea} placeholder={'Your message'}></textarea>
                            </div>
                        </div>
                    </div>
                    <button type={'submit'} className={s.button}>Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
