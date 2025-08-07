type ErrorMessage = {
    [key: string]: string;
}

const nameRegEx = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegEx = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{4,60}$/;

export const validate = (email: string, password: string, name?: string) => {
    let errorMessage: ErrorMessage = {};

    if (name != undefined && !nameRegEx.test(name)) errorMessage["name"] = "Please enter a valid name.";
    if (!emailRegEx.test(email)) errorMessage["email"] = "Please enter a valid email address."
    if (!passwordRegEx.test(password)) errorMessage["password"] = "Your password is not valid."

    return errorMessage;
}