function login() {
    var userName = document.getElementById('uname').value;
    var userPass = document.getElementById('pass').value;
    if(!localStorage.hasOwnProperty(userName)) {
        alert("No existe la cuenta");
    } else if(localStorage.getItem(userName) == userPass) {
        alert("Bienvenido, " + userName);
        location.href = 'indes.html';
    } else {
        alert("La contraseña es erronea.");
    }     
}