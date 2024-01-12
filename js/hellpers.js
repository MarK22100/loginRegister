export function validateInputReq(input){
    if (input.value.trim().length>3  && input.value.trim().length <= 30) {
        input.className ="form-control is-valid"
        return true;
    }
    else{
        input.className ="form-control is-invalid"
        return false;
    }
}
export function validateEmail(input){
    const regExEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (regExEmail.test(input.value)) {
        input.className = "form-control is-valid";
        return true;  
    }
    else{
        input.className = "form-control is-invalid";
        return false;
    }
}
export function validatePassword(input){
    const regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    if (regExPass.test(input.value)) {
        input.className = "form-control is-valid";
        return true;  
    }
    else{
        input.className = "form-control is-invalid";
        return false;
    }
}

export function validateInputsSignUp(nameInp, emailInp, passwordInp){
    if (validateInputReq(nameInp)&&validateEmail(emailInp)&&validatePassword(passwordInp)) {
        return true;
    }else{
        return false;
    }
}
export function validateSignIn(emailSignIn, passSignIn){
    if (validateEmail(emailSignIn)&&validatePassword(passSignIn)) {
        return true;
    }else{
        return false;
    }
}


/*
///Validation
//  SignIn
emailSignIn.addEventListener('blur',()=>{validateinputRequerido(emailSignIn)});
passSignIn.addEventListener('blur',()=>{validateinputRequerido(passSignIn)});
//  SignUp
nameInp.addEventListener('blur',()=>{validateinputRequerido(nameInp)});
emailInp.addEventListener('blur',()=>{validateinputRequerido(emailInp)});
passwordInp.addEventListener('blur',()=>{validateinputRequerido(passwordInp)});
repPassInp.addEventListener('blur',()=>{validateinputRequerido(repPassInp)});
*/