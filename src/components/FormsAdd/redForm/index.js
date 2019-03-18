import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import FormData from 'form-data'
import LinkHome from "../../Btn/linkHome"

class FormRedactorStaff extends  Component  {

    constructor(props){
        super(props)
       this.state = { trig:false }
    }
    onChange = e =>{
        const { pushPhoto } = this.props
        this.setState({trig:true})
        let data = new FormData();
        data.append('image',e.target.files[0], e.target.files[0].name);
          
          pushPhoto(data)
    }
    onChange0 = e => {
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
    changeHandler = (e) =>{
          const { inputchangeHandler } = this.props
          inputchangeHandler(e.target.value)
    }
    changeHandler1 = (e) =>{
        const { inputchangeHandler1 } = this.props
        inputchangeHandler1(e.target.value)
    }
    changeHandler2 = (e) =>{
         const { inputchangeHandler2 } = this.props
        inputchangeHandler2(e.target.value)
        
    }
    changeHandler3 = (e) =>{
         const { inputchangeHandler3 } = this.props
        inputchangeHandler3(e.target.value)
        
    }
    send = () =>{
        const { inputData, inputData1, inputData2, inputData3, photo, EditStaffAction, InfoStaff, getUser,  } = this.props  
        let values = {}
        if(!this.state.trig){
            //http://rs.img.com.ua/crop?v2=1&w=600&h=0&url=%2F%2Fbm.img.com.ua%2Fberlin%2Fstorage%2Forig%2Fd224d3bd9bfe8bcb6b561da523d87364.jpg
            values.img = "https://icoconvert.com/images/noimage2.png";
            values.state = 0
        }
        else{
            values.img = `http://127.0.0.1:2000/static/${photo.map(el => el.data.fileName)}`; 
            values.state = 1 
         }
            values.title = inputData
            values.description = inputData1
            values.price = inputData2
            values.categoryId = inputData3  
        values.staff = "Машина"       
        values.userId = getUser.id
        values.id = InfoStaff[0].id
        if(values.title === ""){
            InfoStaff.map(el => values.title = el.title)
        }
        if(values.description === ""){
            InfoStaff.map(el => values.description = el.description)
        }
        if(values.price === null){
            InfoStaff.map(el => values.price = el.price)
        }
        if(values.categoryId === null){
            InfoStaff.map(el => values.categoryId = el.categoryId)
        }
          EditStaffAction(values)
        
         
    }
    render(){
        
        
         const { pristine, reset, submitting, InfoStaff, allCategory, base64Photo, addOrnot, base64Photo1, base64Photo2, base64Photo3, addOrnot1, addOrnot2, addOrnot3 } = this.props
         
         const category = allCategory.data.filter(el => el.parentId !== 0)
         let data;
         
         
            data = InfoStaff.map((el,key) => <form  className="form" key={key}>
            <input type="text"  name="title" defaultValue ={el.title} className="input" onChange={this.changeHandler}/>
            <textarea type="text"  name="description" defaultValue ={el.description} className="textarea" onChange={this.changeHandler1}/>
            <input type="number"  name="price" defaultValue ={el.price} className="input" onChange={this.changeHandler2}/>
            <select type="number"  name="categoryId"  className="input" defaultValue ={el.categoryId} onChange={this.changeHandler3}>

              <option >Выберите рубрику</option>
                    {category.map((el,key) => <option value={el.id} key={key} > {el.title}</option>)}
                </select>         
                <div className="file">
                        <label className='upload-zone zone1'>
                            {addOrnot ? <img src={base64Photo} style={{ "width": "80px", "height": "80px" }} alt=""></img> : <i>&nbsp;</i>}
                            <input type='file' className='files' onChange={this.onChange0} />

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
                <button type="button" className="button" onClick={this.send}>
                Добавить
                    </button>
                   <button type="button" disabled={pristine || submitting} onClick={reset} className="button" >
                        Очистить
                    </button>
                   
                </div>
                
                
            </form>
          )
         
    return (
        
            <div className="formdiv">
            <LinkHome />
              {data}  
            </div>
        
    )
  }
}

export default reduxForm({
    form: 'RedactorForm'
})(FormRedactorStaff)

// {!this.state.trig ?   <button type="button" className="button" onClick={this.send}>
//                         Submit
//                     </button>: <Redirect to='/' /> }