import React, { Component } from "react"
import { Link } from "react-router-dom"

class Authbuttons extends Component {
    render() {
        return (
            <div className="auth__button">
                <Link to="/auth" >
                    <button className="buttonAuth">
                        Вход
                    </button>
                </Link>
                <Link to="/registration" >
                    <button className="buttonAuth">
                        Регистрация
                    </button>
                </Link>
            </div>
        )
    }
}

export default Authbuttons;