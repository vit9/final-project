export const regValidate = values => {
    const { login, password, name, phone, email } = values;
    const error = {};

    if (!login) {
        error.login = "*" // - true если ничего не надо возвращать
    } else if (login.length > 15) {
        error.login = 'Must be 15 characters or less'
    } else if (!/^[a-zA-Z0-9]+$/.test(login)) {
        error.login = "invalid login"
    }

    if (!password) {
        error.password = "*"
    }else if(!/^[a-zA-Z0-9]+$/.test(password)) {
        error.password = "Invalid password"
    }

    if (!name) {
        error.name = "*"
    }else if (!/^[a-zA-Z0-9]+$/.test(name)) {
        error.name = "Invalid login"
    }

    if (!phone) {
        error.phone = "*"
    }else if(!/^[0-9-+()]+$/.test(phone)) {
        error.phone = "Invalid phone number"
    }

    if (!email) {
        error.email = "*"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.]+\.[A-Z]{2,4}$/i.test(email)) {
        error.email = 'Invalid email address'
    }

    return error;
};