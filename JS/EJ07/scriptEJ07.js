function calcularPresupuesto() {
    let proc = parseInt(document.getElementById("procesador").value) || 0;
    let mon = parseInt(document.getElementById("monitor").value) || 0;
    let disco = parseInt(document.getElementById("disco").value) || 0;
    let total = proc + mon + disco;
    document.getElementById("total").value = "$ " + total;
}
