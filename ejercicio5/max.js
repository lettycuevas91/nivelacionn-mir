function max(arreglo) {
  if (arreglo.length === 0) return undefined;
  let max = 0;
  for (const numero in arreglo) {
    if (numero === 1) {
      max = arreglo[numero];

    } else if (arreglo[numero] > max) {
      max = arreglo[numero];

    }
  }
  return max;
}

console.log(max([1, 3 , 2]));
console.log(max([10, 9, 8, 7, 6, 5, 4]));
console.log(max([]));