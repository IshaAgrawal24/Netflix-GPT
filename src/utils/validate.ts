type ErrorMessage = {
    [key: string]: string;
}

export const validate = (email: string, password: string, name: string = "") => {
    let errorMessage: ErrorMessage = {};

    const isName = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name)
    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPassord = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{4,60}$/.test(password);

    if (!isName) errorMessage["name"] = "Please enter a valid name.";
    if (!isEmail) errorMessage["email"] = "Please enter a valid email address."
    if (!isPassord) errorMessage["password"] = "Your password is not valid."

    console.log(errorMessage)

    return errorMessage;
}