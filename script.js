let textarea = document.getElementById("texto");
let btnEncriptar = document.getElementById("btnEncriptar");
let btnDesencriptar = document.getElementById("btnDesencriptar");
let resultado = document.getElementById("resultado");
let copiar = document.getElementById("bcopiar");
let frase_encriptada = "";


function encriptar(e) {
    let valorArea = textarea.value.toLowerCase();

    for (let i = 0; i < valorArea.length; i++) {
        let copia = valorArea[i];
        if (copia == "a") {

            frase_encriptada += "ai";
            console.log(frase_encriptada)
        } else if (copia == "e") {
            frase_encriptada += "enter";
            console.log(frase_encriptada);
        } else if (copia == "i") {
            frase_encriptada += "imes";
            console.log(frase_encriptada);
        } else if (copia == "o") {
            frase_encriptada += "ober";
            console.log(frase_encriptada)
        } else if (copia == "u") {
            frase_encriptada += "ufat";
            console.log(frase_encriptada);
        } else {
            frase_encriptada += copia;
            console.log(frase_encriptada + "*");
        }
        document.getElementById("bcopiar").style.display = "show"

    }

    document.getElementById("bcopiar").style.display = "inherit";
    document.getElementById('bcopiar').style.display = "show";
    resultado.innerHTML = frase_encriptada;
    frase_encriptada = "";
    console.log(frase_encriptada);

}

function desencriptar() {
    let valorArea = textarea.value.toLowerCase();
    resultado.innerHTML = valorArea;

}

function ocultar_Imagen() {
    document.getElementById('muneco').style.display = 'none'

}

function copiar_res() {
    let contenido = document.querySelector('#resultado');
    contenido.select();
    document.execCommand("copy")

}

btnEncriptar.addEventListener("click", encriptar);
btnEncriptar.addEventListener("click", ocultar_Imagen);
btnDesencriptar.addEventListener("click", desencriptar);
bcopiar.addEventListener("click", copiar_res);



