import React, {useState} from 'react'
import s from 'components/contacts/Contacts.module.scss'
import {Title} from 'common/title'
import {Button} from 'common/button'
import {Fade} from 'components/main/Main'
import {Zoom} from 'components/skills/skill/Skill'
import {useFormik} from 'formik'
import axios from 'axios'
import {FeedBack} from 'components/contacts/feedBack'


type FormType = {
    name?: string
    email?: string
    message?: string
}

export const Contact = () => {

    const [messageSent, setMessageSent] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: (values: FormType) => {
            const errors: FormType = {}

            if (!values.name) {
                errors.name = 'Enter your name'
            }

            if (!values.email) {
                errors.email = 'Enter your email'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            if (!values.message) {
                errors.message = 'Enter your message'
            }
            return errors
        },
        onSubmit: (values: FormType) => {
            setLoading(true)
            axios.post('https://gmail-smtp-server.vercel.app/sendMessage', values)
                .then(res => {
                    setMessageSent(true)
                    formik.resetForm()
                })
                .catch(error => {
                    setError(true)
                })
                .finally(() => {
                        setLoading(false)
                    }
                )
        },
    })

    return (
        <div className={s.contactsBlock} id='contacts'>
            <div className={s.container}>
                <Fade top delay={300}>
                    <Title text='Contact'/>
                </Fade>
                <Zoom>
                    {messageSent
                        ? <FeedBack messageSent={messageSent}/>
                        : <form className={s.form} onSubmit={formik.handleSubmit}>
                            <div className={s.inputItem}>
                                <input
                                    type='text'
                                    className={s.input}
                                    placeholder='Name'
                                    id='name'
                                    {...formik.getFieldProps('name')}
                                />
                                <span className={s.error}>{formik.touched.name && formik.errors.name}</span>
                            </div>
                            <div className={s.inputItem}>
                                <input
                                    type='text'
                                    className={s.input}
                                    placeholder='Email'
                                    id='email'
                                    {...formik.getFieldProps('email')}
                                />
                                <span className={s.error}>{formik.touched.email && formik.errors.email}</span>
                            </div>
                            <div className={s.inputItem}>
                            <textarea
                                className={s.textarea}
                                placeholder='Your message'
                                id='message'
                                {...formik.getFieldProps('message')}
                            />
                                <span
                                    className={s.error}>{formik.touched.message && formik.errors.message}</span>
                            </div>
                            {!loading
                                ? <Button type='submit' buttonTitle='Send Message'/>
                                : <div className={s.spinner}/>
                            }
                            <>
                                {!loading && error && <FeedBack error={error}/>}
                            </>
                        </form>
                    }
                </Zoom>
            </div>
        </div>
    )
}


