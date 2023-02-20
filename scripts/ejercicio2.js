 const ejercicio2 = () => {
    let montoInicial = prompt('Introduzca el monto inicial: ')
    let interes = 0

    let monto = montoInicial + 250*12 
    let interesTotal = montoInicial * Math.pow((1 + 0.15/12),12*12) 

    alert("El interes de Enero a Diciembre de la cuenta de ahorros es: "+ interesTotal)
}