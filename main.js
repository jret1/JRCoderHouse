//detectar si el usuario esta en Dark Mode
const isDarkMode = () => {
    window.matchMedia ('(prefers-color-scheme: dark)').matches;
}

//regresar a la pagina anterior
history.back ();
history.go (-1);

//eliminar duplicados de un array
const removeDuplicates = (arr) => [...new Set (arr)];

//aceptar inputs del usuario 
let username;

document.getElementById("button").onclick = function (){
    username = document.getElementById ("user-message").value;
    console.log(message);
}

const removeDuplicates = (arr) => [...new Set (arr)];