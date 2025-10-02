function corregirExamen() {
    let correctas = {
        p1: "París",
        p2: "25",
        p3: "JavaScript",
        p4: "Júpiter"
    };

    let aciertos = 0;
    let errores = 0;

    for (let i = 1; i <= 4; i++) {
        let seleccion = document.getElementById("p" + i).value;
        if (seleccion === "") continue; // si no responde, no cuenta
        if (seleccion === correctas["p" + i]) {
            aciertos++;
        } else {
            errores++;
        }
    }

    document.getElementById("resultado").value =
        "Correctas: " + aciertos + " | Incorrectas: " + errores;
}
