"debugger"
const ejercicio3 = () => {
    let cantAlumnos = prompt('Introduzca la cantidad de alumnos: ')
    let alumnos = []
    //acumuladores por materia
    let acumFisica = 0
    let acumMates = 0
    let acumProgram = 0
    // control de aplazados
    let aplazadosMates = 0
    let aplazadosFisica = 0
    let aplazadosProgra = 0
    //control de los aprobados
    let aprobadosProgra =0
    let aprobadosFisica = 0
    let aprobadosMate = 0
    //notas maximas en cada materia
    let maxFisica = 0
    let maxMate = 0
    let maxProgra = 0
    //si aprobaron una, dos o todas las materias
    let aprobaronUna = 0
    let aprobaronDos = 0
    let aprobaronTodas=0


    for(let i = 0; i < cantAlumnos;i++){
        
        let nombreAlumno = prompt('Introduzca el nombre del alumno: ')
        let cedulaAlumno = Number.parseInt(prompt('Introduzca la cedula: '))
        let notaMates = Number.parseInt(prompt('Digite la nota de matematicas: '))
        let notaFisica = Number.parseInt(prompt('Digite la nota de fisica: '))
        let notaProgramacion = Number.parseInt(prompt('Digite la nota de programacion: '))

        
        let nuevoAlumno = {cedula: cedulaAlumno,nombre: nombreAlumno, notaDeMatematicas: notaMates, notaDeFisica: notaFisica, notaDeProgramacion: notaProgramacion}
        alumnos.push(nuevoAlumno)
    }
    alumnos.forEach((el,i)=> {
        
        if (el.notaDeFisica > 10){
            aprobadosFisica +=1
        }
        else {
            aplazadosFisica += 1
        }
        if (el.notaDeMatematicas > 10){
            aprobadosMate +=1
        }
        else {
            aplazadosMates += 1
        }
        if (el.notaDeProgramacion > 10){
            aprobadosProgra +=1
        }
        else {
            aplazadosProgra += 1
        }
        acumFisica += el.notaDeFisica
       acumMates += el.notaDeMatematicas
       acumProgram += el.notaDeProgramacion
    })
    
    const body  = document.querySelector('body')
   const p = document.createElement('p')

   let stmnt = `Nota promedio de Matematicas: ${acumMates/alumnos.length}.\n Nota promedio de Fisica: ${acumFisica/alumnos.length}.
   Nota promedio de Programacion: ${acumProgram/alumnos.length}.\n
   N° de Aprobados Mate: ${aprobadosMate}.\n
   N° de Aprobados Fisica: ${aprobadosFisica}.\n
   N° de Aprobados Programacion: ${aprobadosProgra}.\n
   N° de Aplazados Matematicas: ${aplazadosMates}.\n
   N° de Aplazados Fisica: ${aplazadosFisica}.\n
   N° de Aplazados Programacion: ${aplazadosProgra}`
   p.innerHTML = stmnt
   body.appendChild(p)
}