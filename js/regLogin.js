import { validateInputsSignUp, validateSignIn } from "./hellpers.js";

//Elements
let formSignUp= document.getElementById('formSignUp');

//Sava data on LS
let userReg = JSON.parse(localStorage.getItem('userReg')) || [];
let usersAdmin = JSON.parse(localStorage.getItem('usersAdmin')) || [];

//Elements SignUp
let nameInp=document.getElementById('nameInput');
let emailInp=document.getElementById('emailInput');
let passwordInp=document.getElementById('passInput');
let repPassInp=document.getElementById('repPassInput')
//

//Elements SignIn
let emailSignIn = document.getElementById('emailSignIn');
let passSignIn = document.getElementById('passSignIng');




//Buttons
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const btnSignUp = document.getElementById('btn_signUp');

// Función para verificar si el usuario administrador ya existe
function adminExists(usersAdmin) {
    return usersAdmin.some(user => user.nameUser === 'admin');
}

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


// Create User
window.createUser = function(){
    const newUser = {
        nameUser : nameInp.value,
        emailUser : emailInp.value,
        passUser : passwordInp.value,
        admin : false

    }
    if (validateInputsSignUp(nameInp,emailInp,passwordInp)){
        if (userReg.some((v)=>{
            return v.emailUser === emailInp.value;
        })) {
            Swal.fire({
                icon: "info",
                title: "Revisar...",
                text: "Usuario ya registrado"
              });
        }
        else if(passwordInp.value !== repPassInp.value){
            Swal.fire({
                icon: "info",
                title: "Revisar...",
                text: "La contraseñas no coinciden"
              });
        }
        else{
            userReg.push(newUser)
            localStorage.setItem('userReg',JSON.stringify(userReg));
            Swal.fire({
                icon: "success",
                title: "Listo!",
                text: "Usuario registrado"
              });
            LimpiaFormulario()
        }
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Revisar los datos ingresados"
          });
    }

}

//SignIn User
window.signIn = function(){
    const userSesion = {
        emailUser : emailSignIn.value,
        passUser : passSignIn.value 
    }
    if(validateSignIn(emailSignIn, passSignIn))
    {
            JSON.parse(sessionStorage.getItem('userSesion'))
                if (userReg.some((v)=>{
                    return v.emailUser === emailSignIn.value && v.passUser === passSignIn.value;
                })) {
                sessionStorage.setItem('userSesion',JSON.stringify(userSesion))
                Swal.fire({
                    icon: "success",
                    text: "Inicio de sesion exitoso!",
                  });
                  setTimeout(()=>{
                    window.location = "/admin.html"
                    },1500);
                }
                else if(usersAdmin.some((v)=>{
                    return v.emailUser === emailSignIn.value && v.passUser === passSignIn.value
                })){
                    sessionStorage.setItem('userSesion',JSON.stringify(userSesion))
                    Swal.fire({
                        icon: "success",
                        text: "Inicio de sesion exitoso!",
                      });
                    setTimeout(()=>{
                        window.location = "/admin.html"
                    },1500);
                    
                }
                else{
                    Swal.fire({
                        icon: "error",
                        text: "Revisa usuario o contraseña",
                      });
                }
    }
    else{
        Swal.fire({
            icon: "info",
            text: "Todos los campos son obligatorios",
          });
    }
}
// Función para crear el usuario administrador
function createAdmin() {

    // Verifica si el usuario administrador ya existe
    if (!adminExists(usersAdmin)) {
        let usersAdmin = JSON.parse(localStorage.getItem('usersAdmin')) || [];
        // Crea el usuario administrador
        const admin = {
            nameUser: 'admin',
            emailUser: 'admin@example.com',
            passUser: 'Admin2023',
            admin: true
        };

        // Agrega el usuario administrador a usersAdmin
        usersAdmin.push(admin);

        // Guarda usersAdmin en el localStorage
        localStorage.setItem('usersAdmin', JSON.stringify(usersAdmin));
    }
}

// Llama a createAdmin cuando la página se carga
window.onload = createAdmin;


function LimpiaFormulario(){
    formSignUp.reset()
    nameInp.className='form-control'
    emailInp.className='form-control'
    passwordInp.className='form-control'
    repPassInp.className='form-control'
}

let showPass = false;
let showRepPass = false;
let showPassSignIn = false;
window.pass = function(){

    if (showPass == true) {
        document.getElementById('passInput').type='password';
        document.getElementById('passIcon').src='/src/eye.svg';
        showPass = false;
    }
    else{
        document.getElementById('passInput').type='text';
        document.getElementById('passIcon').src='/src/eye-slash.svg';
        showPass = true;
        ;
    }
}
window.repPass = function(){

    if (showRepPass == true) {
        document.getElementById('repPassInput').type='password';
        document.getElementById('repPassIcon').src='/src/eye.svg';
        showRepPass = false;
    }
    else{
        document.getElementById('repPassInput').type='text';
        document.getElementById('repPassIcon').src='/src/eye-slash.svg';
        showRepPass = true;
        ;
    }
}
window.passSg = function(){
    if (showPassSignIn == true) {
        document.getElementById('passSignIng').type='password';
        document.getElementById('repPassIcon').src='/src/eye.svg';
        showPassSignIn = false;
    }
    else{
        document.getElementById('passSignIng').type='text';
        document.getElementById('repPassIcon').src='/src/eye-slash.svg';
        showPassSignIn = true;
    }
}