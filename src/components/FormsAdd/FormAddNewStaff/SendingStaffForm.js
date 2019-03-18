import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormData from 'form-data'


class SendingForm extends Component {
    constructor(props) {
        super(props)

        this.state = { trig: false }
    }

    onChange = e => {
        const { pushPhoto, base64 } = this.props
        this.setState({ trig: true })
        let data = new FormData();
        data.append('image', e.target.files[0], e.target.files[0].name);
        pushPhoto(data)
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            base64(reader.result)
        }
        reader.readAsDataURL(file);
    }
    onChange1 = e => {
        const { pushPhoto, base641 } = this.props
        this.setState({ trig: true })
        let data = new FormData();
        data.append('image', e.target.files[0], e.target.files[0].name);
        pushPhoto(data)
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            base641(reader.result)
        }
        reader.readAsDataURL(file);
    }
    onChange2 = e => {
        const { pushPhoto, base642 } = this.props
        this.setState({ trig: true })
        let data = new FormData();
        data.append('image', e.target.files[0], e.target.files[0].name);
        pushPhoto(data)
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            base642(reader.result)
        }
        reader.readAsDataURL(file);
    }
    onChange3 = e => {
        const { pushPhoto, base643 } = this.props
        this.setState({ trig: true })
        let data = new FormData();
        if (e.target.files[0] === undefined) {
            return
        }
        data.append('image', e.target.files[0], e.target.files[0].name);
        pushPhoto(data)
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            base643(reader.result)
        }
        reader.readAsDataURL(file);

    }

    submit = values => {

        const { AddNewStaffAction, getUser, photo } = this.props      
        if(!this.state.trig){
            // http://rs.img.com.ua/crop?v2=1&w=600&h=0&url=%2F%2Fbm.img.com.ua%2Fberlin%2Fstorage%2Forig%2Fd224d3bd9bfe8bcb6b561da523d87364.jpg
            values.img = "https://icoconvert.com/images/noimage2.png";
            values.state = 0
        } else {
            values.img = `http://127.0.0.1:2000/static/${photo.map(el => el.data.fileName)}`;
            values.state = 1
        }
        values.staff = "Машина"

        values.userId = getUser.id
        AddNewStaffAction(values)

    };
    render() {

        const { handleSubmit, pristine, reset, submitting, allCategory, base64Photo, addOrnot, base64Photo1, base64Photo2, base64Photo3, addOrnot1, addOrnot2, addOrnot3 } = this.props

        return (


            <div className="formdiv">
                <form onSubmit={handleSubmit(this.submit)} className="form">
                    <Field name="title"
                        component="input"
                        type="text"
                        placeholder="Название"
                        className="input"
                    />

                    <Field name="description"
                        component="textarea"
                        type="text"
                        placeholder="Описание"
                        className="textarea"
                    />

                    <Field name="price"
                        component="input"
                        type="number"
                        placeholder="Цена"
                        className="input"
                    />

                    <Field name="categoryId"
                        component="select"
                        className="input"
                    >
                        <option >Выберите рубрику</option>
                        {allCategory.map((el,key) => <option value={el.id} key={key}> {el.title}</option>)}
                    </Field>


                    <div className="file">
                        <label className='upload-zone zone1'>
                            {addOrnot ? <img src={base64Photo} style={{ "width": "80px", "height": "80px" }} alt=""></img> : <i>&nbsp;</i>}
                            <input type='file' className='files' onChange={this.onChange} />

                        </label>
                        <label className='upload-zone zone2'>
                            {addOrnot1 ? <img src={base64Photo1} style={{ "width": "80px", "height": "80px" }} alt=""></img> : <i>&nbsp;</i>}
                            <input type='file' className='files' onChange={this.onChange1} />

                        </label>
                        <label className='upload-zone zone3'>
                            {addOrnot2 ? <img src={base64Photo2} style={{ "width": "80px", "height": "80px" }} alt=""></img> : <i>&nbsp;</i>}
                            <input type='file' className='files' onChange={this.onChange2} />

                        </label>
                        <label className='upload-zone zone4'>
                            {addOrnot3 ? <img src={base64Photo3} style={{ "width": "80px", "height": "80px" }} alt=""></img> : <i>&nbsp;</i>}
                            <input type='file' className='files' onChange={this.onChange3} />

                        </label>
                    </div>


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
            </div>

        )
    }
}

export default reduxForm({
    form: 'SendingForm'
})(SendingForm)
