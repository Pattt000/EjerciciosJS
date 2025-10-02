function verificarClaves() {
    let clave1 = document.getElementById("clave1").value;
    let clave2 = document.getElementById("clave2").value;
    
    if (clave1 == clave2) {
        alert("Las contraseñas coinciden ");
    } else {
        alert("Las contraseñas no coinciden ");
    }
}
