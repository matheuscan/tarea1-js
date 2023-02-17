 const ejercicio1 = () => {
    let menoresA40 = 0
    let entre40y50 = 0
    let entre50y60 = 0
    let de60OMas=0
    let cantAlumnos = prompt('Introduzca la cantidad de alumnos: ')
    if (cantAlumnos === 0) return
    for(let i = 0; i<cantAlumnos;i++){
        let pesoAlumno = prompt(`Introduzca el peso del alumno ${i+1}: `)
        if(pesoAlumno < 40){
            menoresA40 += 1
        }
        else if (pesoAlumno >=40 && pesoAlumno <50){
            entre40y50 +=1
        }
        else if (pesoAlumno >=50 && pesoAlumno <=60){
            entre50y60 +=1
        }
        else {
            de60OMas +=1
        }
    }
    let mensaje = {
        mensaje: "Las estadísticas finales de la clase son las siguientes: \n Alumnos menores  a 40kg: "+ (menoresA40/cantAlumnos)*100+ "% Entre 40 y 50: " +(entre40y50/cantAlumnos)*100 + "% Entre 50 y 60: "+(entre50y60/cantAlumnos)*100 +"% Alumnos con Pesomayor a 60: "+ (de60OMas/cantAlumnos)*100 + "%"
    }
    alert("Porcentajes relativos a cada categoria con respecto a la cantidad de alumnos")
    alert(JSON.stringify(mensaje))
}