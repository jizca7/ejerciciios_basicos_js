const names = [
'Peter',
'Steve',
'Tony',
'Natasha',
'Clint',
'Logan',
'Xabier',
'Bruce',
'Peggy',
'Jessica',
'Marc'
];
function nameFinder(array, value) {
    const index = array.indexOf(value);
        if (index !== -1) {
    return { encontrado: true, posicion: index };
} else {
    return false;
    }
}
console.log(nameFinder(names, 'Xabier')); 
console.log(nameFinder(names, 'Jesús')); 