export default values => {
    const { email, password } = values;
    const error = {};
    console.log(values)

    if(!email) {
        error.email = "Required"
    }

    if(!password) {
        error.password = "Required"
    }

    return error;
};