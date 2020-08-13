//Creamos el elemento
const elemento = document.getElementById('container');
const referencia = document.getElementById('referencia');
const nuevoElemento = document.createElement('p');
nuevoElemento.innerHTML ='Parrafo Insertado';
elemento.appendChild(nuevoElemento);
document.getElementById('container').insertBefore(nuevoElemento, referencia);