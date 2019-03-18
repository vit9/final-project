import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SendingForm = props => {
    const { handleSubmit, pristine, reset, submitting, AddNewCategory, podcategory } = props

    const submit = values => {
        AddNewCategory(values)
    };

    return (
        <div className="formdiv">
            <form onSubmit={handleSubmit(submit)} className="form">
                <Field name="title"
                    className="input"
                    component="input"
                    type="text"
                    placeholder="Наименование Заголовка"
                />
                <Field name="description"
                    className="input"
                    component="input"
                    type="text"
                    placeholder="Icon"
                />
                <Field name="parentId"
                    className="input"
                    component="select"  
                >
                    <option >Выберите рубрику</option>
                    <option value={0}> Новая рубрика</option>
                    {podcategory.map(el => <option value={el.id}> {el.title}</option>)}
                </Field>
                <div className="buttonConteiner">
                    <button type="submit"
                        className="button"
                        disabled={pristine || submitting}
                    >
                        Добавить
                    </button>
                    <button type="button"
                        className="button"
                        disabled={pristine || submitting}
                        onClick={reset}
                    >
                        Очистить
                    </button>
                </div>
            </form>
        </div >
    )
}

export default reduxForm({
    form: 'SendingForm'
})(SendingForm)