//Obtenemos el lugar donde queremos el nuevo elemento
const elemento = document.getElementById('container');
//Obtenemos la referencia del lugar posterior a donde queremos colocar el nuevo elemento
const referencia = document.getElementById('referencia');
//Creamos el nuevo elemento
const nuevoElemento = document.createElement('p');
//Le añadimos texto a ese nuevo elemento
nuevoElemento.innerHTML ='Parrafo Insertado';
elemento.appendChild(nuevoElemento);
//Despues lo posicionamos donde lo queremos, usamos la referencia
document.getElementById('container').insertBefore(nuevoElemento, referencia);