import React from 'react'
import { Field, reduxForm } from 'redux-form'

import Authbuttons from './authButtons'

import { regValidate } from '../../utils/regValidate'
import { regRenderField } from '../../common/regRenderField'

const RegistrForm = props => {

    const { handleSubmit, pristine, reset, postUsersData } = props

    const submit = (values) => {
        values.avatar = "https://site.com"
        values.isAdmin = 0
        values.description = "bad_boy"
        postUsersData(values)
    }

    return (
        <div >
            <Authbuttons />
            <form onSubmit={handleSubmit(submit)} className="formRegistr">
                <div>
                    <div className="divName">
                        <div style={{ "width": "270px" }} >
                            <Field
                                name="name"
                                component={regRenderField}
                                type="text"
                                placeholder="Имя"
                                className="inputName"
                            />
                        </div>
                        <div style={{ "width": "270px" }} >
                            <Field
                                name="login"
                                component={regRenderField}
                                type="text"
                                placeholder="Логин"
                                className="inputName"
                            />
                        </div>
                    </div>
                    <div className="divName">
                        <div style={{ "width": "270px" }} >
                            <Field
                                name="email"
                                component={regRenderField}
                                type="email"
                                placeholder="email@example.com"
                                className="inputName"
                            />
                        </div>
                        <div style={{ "width": "270px" }} >
                            <Field
                                name="phone"
                                component={regRenderField}
                                type="text"
                                placeholder="+380XXXXXXXX"
                                className="inputName"
                            />
                        </div>
                    </div>
                    <Field
                        name="password"
                        component={regRenderField}
                        type="password"
                        placeholder="Пароль"
                        className="input"
                    />
                </div>
                <div className="center">
                    <button type="submit"
                        className="buttonInRegistration"
                        disabled={pristine}
                    >
                        Зарегистрироваться
                    </button>
                    <button type="button"
                        className="buttonInRegistration"
                        disabled={pristine}
                        onClick={reset}
                    >
                        Очистить поля
                    </button>
                </div>
            </form>
        </div>

    )
}

export default reduxForm({ form: 'registrForm', validate: regValidate })(RegistrForm)

