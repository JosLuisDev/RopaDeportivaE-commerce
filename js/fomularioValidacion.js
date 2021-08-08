function enviarFormulario(){

    var nombre = document.getElementById("name");
    var email = document.getElementById("email");
    var asunto = document.getElementById("subject");
    var mensaje = document.getElementById("message");
    var error = document.getElementById("error");
    error.style.color = "red";
    error.style.marginTop = "1rem";

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Please enter the name value');
    }
    if(email.value === null || email.value === ''){
        mensajesError.push('Please enter the email value');
    }
    if(asunto.value === null || asunto.value === ''){
        mensajesError.push('Please enter the subject value');
    }
    if(mensaje.value === null || mensaje.value === ''){
        mensajesError.push('Please enter the message value');
    }

    error.innerHTML = mensajesError.join(', ');
    return false;
}
