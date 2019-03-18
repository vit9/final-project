import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import { Carousel } from 'antd';

class SearchFullInfoStaff extends Component {
    render() {
        
        const { fullInfoSearchData, isFetching } = this.props
        let arr = [];
        

        fullInfoSearchData.map(el => {
            if (el.state) {
                let str1 = el.img.substr(29)

                for (var i = 0, b = 24; i < str1.length; i = i + 25) {
                    arr.push({ newStr: str1.substr(i, b), state: el.state, defaultStr: el.img })
                }
            } else {
                arr.push({ state: el.state, defaultStr: el.img })
            }

        })
        let data1
        let data;
        if (isFetching === true) {
            data = <div className="loader">
                <Loader type="Triangle"
                    color="#FD7F71"
                    height="100"
                    width="100"
                />
            </div>
        } else {
            data = fullInfoSearchData.map((el, key) => <div className="divCenter">
                <div className="flex-around">
                    <p><b>Название: </b>{el.title} </p>
                    <p><b>Цена: </b>{el.price}</p>
                    <p><b>Описание: </b>{el.description}</p>
                    <p><b>Контактное лицо: </b>{el.user.name}</p> 
                    <p><b>Номер телефона: </b>{el.user.phone}</p>
                </div>
            </div>
            )
            data1 = <div className="carusel">
                <Carousel effect="fade">
                    {arr.map(el => <div>
                        {el.state ? <img src={`http://127.0.0.1:2000/static/${el.newStr}`} className="fullImgStaff" alt="lorem" /> :
                            <img src={`${el.defaultStr}`} width="325" height="190" className="imgStaff" alt="lorem" />}
                    </div>)}
                </Carousel>
            </div>
        }


        return (

            <div className="staffinfo" >
                {data1}
                {data}
            </div>
        );
    }
}

export default SearchFullInfoStaff;