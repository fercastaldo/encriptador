// Campos del ASIDE

const camposConTexto = document.querySelector(".camposConTexto"); 
const muneco = document.querySelector(".muneco"); 
const mensajesSinTexto = document.querySelector(".mensajesSinTexto"); 


// Textarea 
const inputTexto = document.querySelector(".texto"); 
const traduccion = document.getElementById("traduccion");

// Botones 

const botonEncriptar = document.querySelector(".btnEncriptar"); 
const botonDesencriptar = document.querySelector(".btnDesencriptar"); 
const botonCopiar = document.querySelector(".copiar"); 

// Funciones 
function encriptar(textoEncriptado) {
    
    let cambiosTraduccion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    textoEncriptado = textoEncriptado.toLowerCase(); 
    
    for (let i = 0; i < cambiosTraduccion.length; i++) {
        if (textoEncriptado.includes(cambiosTraduccion[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(cambiosTraduccion[i][0], cambiosTraduccion[i][1])
        }
    }
    return textoEncriptado; 
}

function desencriptar(textoDesencriptado) {
    let cambiosTraduccion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    textoDesencriptado = textoDesencriptado.toLowerCase(); 
    
    for (let i = 0; i < cambiosTraduccion.length; i++) {
        if (textoDesencriptado.includes(cambiosTraduccion[i][1])) {
            textoDesencriptado = textoDesencriptado.replaceAll(cambiosTraduccion[i][1], cambiosTraduccion[i][0])
        }
    }
    return textoDesencriptado; 
}

function agregarCamposTraduccion() {
    camposConTexto.style.display = "block"; 
    muneco.style.display = "none"; 
    mensajesSinTexto.style.display = "none";
}

function eliminarCamposTraduccion() {
    camposConTexto.style.display = "none"; 
    muneco.style.display = "block"; 
    mensajesSinTexto.style.display = "block";
}
eliminarCamposTraduccion();  

function btnEncriptar() {
    agregarCamposTraduccion(); 
    const textoEncriptado = encriptar(inputTexto.value); 
    traduccion.value = textoEncriptado; 
    inputTexto.value = ""; 
}
botonEncriptar.addEventListener("click", btnEncriptar); 

function btnDesencriptar() {
    agregarCamposTraduccion(); 
    const textoEncriptado = desencriptar(inputTexto.value); 
    traduccion.value = textoEncriptado; 
    inputTexto.value = ""; 
}
botonDesencriptar.addEventListener("click", btnDesencriptar);

function btnCopiar() {
    eliminarCamposTraduccion(); 
    traduccion.select(); 
    navigator.clipboard.writeText(traduccion.value); 
    traduccion.value = ""; 
}

botonCopiar.addEventListener("click", btnCopiar); 
