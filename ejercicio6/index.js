const pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["Programar", "Squash", "Piano"],
  };
  
  console.log(pedro.edad);
  
  pedro.estatura = 1.8;
  
  console.log(pedro);
  
  delete pedro.activo;
  
  console.log(pedro);
  
  
for (let valor in pedro) {
    if (pedro.hasOwnProperty(valor)) {
      console.log(`{${valor}} : ${pedro[valor]}`);
    }
  }
  
  function saludo(nombre) {
    return `Hola, me llamo ${nombre}`;
  }
  
  console.log(saludo(pedro.nombre));
  
  