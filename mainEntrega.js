  let pregunta = (prompt("Opcion 1. Piedra, Papel o Tijera, Opcion 2. Ingresar datos de pacientes y turnos, Opcion 3. Algo. Sino escriba .. Esc .. y saldra del Menu"))

  while (pregunta != "Esc") {
      if (pregunta == "opcion 1" || pregunta == Number(1)) {
    
    let jugador1 = prompt("Escriba el nombre del jugador 1:"); 
     let jugador2 = prompt("Escriba el nombre del jugador 2:"); 
  
     function jueguito() { 
        while (true) { 
                let  jugada1 = prompt(`${jugador1} ¿Piedra, papel o tijera?`).toLowerCase(); 
                let  jugada2 = prompt(`${jugador2} ¿Piedra, papel o tijera?`).toLowerCase(); 
  
                  if (jugada1 === jugada2) {                       
                    alert("Empate, sigan jugando."); 
                  }           
                 else if (
                  (jugada1 === "piedra" && jugada2 === "tijera") 
                  ||
                  (jugada1 === "papel" && jugada2 === "piedra") 
                  ||
                  (jugada1 === "tijera" && jugada2 === "papel")
                ) {
                  alert(`${jugador1} gana el juego.`);
                  break;
                } else {
                  alert(`${jugador2} gana el juego.`);
                  break;
                }
              }
            }
            
            jueguito();
     pregunta = prompt ("Opcion 1. Piedra, Papel o Tijera, Opcion 2. Ingresar datos de pacientes y turnos, Opcion 3. Algo. Sino escriba .. Esc .. y saldra del Menu");
 
  }
    
      else if (pregunta == "opcion 2" || pregunta == Number(2)) {
      alert("Elegiste la opción 2");   
      pregunta = prompt ("Opcion 1. Piedra, Papel o Tijera, Opcion 2. Ingresar datos de pacientes y turnos, Opcion 3. Algo. Sino escriba .. Esc .. y saldra del Menu");
      } 

      else if (pregunta == "opcion 3" || pregunta == Number(3)) {
      alert("Elegiste la opción 3");
     
      pregunta = prompt ("Opcion 1. Piedra, Papel o Tijera, Opcion 2. Ingresar datos de pacientes y turnos, Opcion 3. Algo. Sino escriba .. Esc .. y saldra del Menu");
      } 

      else {
      alert("Opción no válida");
      pregunta = prompt ("Opcion 1. Piedra, Papel o Tijera, Opcion 2. Ingresar datos de pacientes y turnos, Opcion 3. Algo. Sino escriba .. Esc .. y saldra del Menu");
      }

  };


// Agrego mas opciones ademas de la Opcion 1, para demostrar la funcionabilidad del menu
// y a futuro poder agregar mas ideas.