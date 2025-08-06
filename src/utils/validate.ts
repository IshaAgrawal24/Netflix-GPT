type ErrorMessage = {
    [key: string]: string;
}

export const validate = (email: string, password: string) => {
    let errorMessage: ErrorMessage = {};
    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPassord = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{4,60}$/.test(password);

    if (!isEmail) errorMessage["email"] = "Please enter a valid email address."
    if (!isPassord) errorMessage["password"] = "Your password is not valid."

    return errorMessage;
}