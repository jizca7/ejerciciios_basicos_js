const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
      // Completar
let total = 0;
    for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
        total += list[i];
    } else if (typeof list[i] === 'string') {
        total += list[i].length;
    }
}
    return total;
}

console.log(averageWord(mixedElements)); 
