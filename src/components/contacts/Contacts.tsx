import React from 'react'
import s from 'components/contacts/Contacts.module.scss'
import {Title} from 'common/title'
import {Button} from 'common/button'
import {Fade} from 'components/main/Main'
import {Zoom} from "components/skills/skill/Skill";

export const Contact = () => {
    return (
        <div className={s.contactsBlock} id={'contacts'}>
            <div className={s.container}>
                <Fade top delay={300}>
                    <Title text={'Contact'}/>
                </Fade>
                <Zoom>
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
                </Zoom>
            </div>
        </div>
    )
}


