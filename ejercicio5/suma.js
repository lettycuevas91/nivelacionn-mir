function sum(arreglo) {
    let sumaTotal = 0;
    if (arreglo.length === 0) return 0;
    for (const key in arreglo) {
      sumaTotal = sumaTotal + arreglo[key];
    }
    return sumaTotal;
  }

console.log(sum([1,2,3]))
console.log(sum([10,8,12,5]))
console.log(sum([]))

