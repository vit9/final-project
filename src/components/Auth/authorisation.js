import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom"

import Authbuttons from './authButtons'

import { authValidate } from "../../utils/authValidate";
import { authRenderField } from "../../common/authRenderField"


const Form = props => {

    const { handleSubmit, getUsersData } = props

    const submit = (values) => {

        getUsersData(values);

    }
    return (
        <div className="formdiv">
            <div>
                <Authbuttons />
                <form className="formAuth" >
                    <Field
                        name="email"
                        component={authRenderField}
                        type="Емейл"
                        placeholder="email@example.com"
                        className="input"
                    />
                    <Field
                        name="password"
                        component={authRenderField}
                        type="password"
                        placeholder="Пароль"
                        className="input"
                    />

                    <div className="center">
                        <button className="buttonInAuth" onClick={handleSubmit(submit)}>
                            Войти
                        </button>
                    </div>
                </form>
            </div>

        </div>



    );
}

export default reduxForm({ form: "authForm", validate: authValidate })(Form);