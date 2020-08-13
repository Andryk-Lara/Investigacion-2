//EJEMPLO 1
//Elementos hijos

let padre = document.getElementById('padre');
let hijos = padre.children

for(let i = 0; i < hijos.length; i++){
    console.log(hijos[i]);
}