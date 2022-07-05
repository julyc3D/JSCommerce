let numeroIngresado = prompt('Ingresa la cantidad de veces que quieras que aparezca un mensaje emergente, gracias.')

if (numeroIngresado <= 15) {

    for (let i = 1; i <= numeroIngresado; i++) {

        alert('Este es el mensaje ' + i)

    }
}
else {
    alert('solo me enseñaron a contar hasta 15, no me odies.')
}