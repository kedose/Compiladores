var hojas = "";
[10, 2].forEach(j => {
    new Array(j).fill('').forEach((v, i) => {
        hojas += (
            [
                ...new Array(9 - i).fill("<span> </span>"),
                ...new Array(1 + i * 2).fill('<span class = "rojo">~*~</span>'),
                ...new Array(9 - i).fill("<span> </span>")
            ].join('')
        );
        hojas += "<br>"
    });
});

document.getElementById("arbol").innerHTML = hojas;

let animacion = document.querySelectorAll(".rojo")
animacion.innerHTML = hojas;

function animar() {
    for (var i = 0; i < animacion.length; i++) {
        let tiempo = i / 20 + 1;
        animacion[i].style.animation = "colores " + tiempo + "s infinite";
    }
}

window.addEventListener("load", animar);