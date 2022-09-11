console.clear();

// declarar los elementos
const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const pResult = document.getElementById('result');
const formulario = document.getElementById('form');

// escuchar los eventos

formulario.addEventListener('click', sumarInputValues)

function sumarInputValues(event){
    //console.log({event});
    //event.preventDefault();
    const sumaInputs = calculo1.value + calculo2.value;
    pResult.innerHTML = 'El resultado es:' + sumaInputs;
}

