import React from 'react'
import s from 'components/contacts/Contacts.module.scss'
import {Title} from 'common/title'
import {Button} from 'common/button'

export const Contact = () => {
    return (
        <div className={s.contactsBlock} id={'contacts'}>
            <div className={s.container}>
                <Title text={'Contact'}/>
                <form className={s.form}>
                    <div className={s.inputItem}>
                        <input className={s.input} placeholder={'Name'}/>
                    </div>
                    <div className={s.inputItem}>
                        <input className={s.input} placeholder={'Email'}/>
                    </div>
                    <div className={s.inputItem}>
                        <textarea className={s.textarea} placeholder={'Your message'}></textarea>
                    </div>
                    <Button type='submit' buttonTitle={'Send Message'}/>
                </form>
            </div>
        </div>
    )
}


