export const authValidate =  values => {
    const { email, password } = values;
    const error = {};

    if(!email) {
        
        error.email = "*"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.]+\.[A-Z]{2,4}$/i.test(email)) {
        error.email = "Неверный адрес"
    }

    if(!password) {
        error.password = "*"
    }else if(!/^[a-zA-Z0-9]+$/.test(password)) {
        error.password = "Неверный пароль"
    }

    return error;
};