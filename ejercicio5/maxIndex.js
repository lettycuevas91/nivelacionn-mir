function maxIndex(arreglo) {
    if (arreglo.length === 0) return undefined;
    let indice = 0;
    let valor = 0;
    for (const numero in arreglo) {
      if (numero === 1) {
        valor = arreglo[numero];
        indice = numero;
      } else if (arreglo[numero] > valor) {
        valor = arreglo[numero];
        indice = numero;
      }
    }
    return indice;
  }
  
  console.log(maxIndex([1, 3 , 2]));
  console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]));
  console.log(maxIndex([]));