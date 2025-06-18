const duplicates = [
'sushi',
'pizza',
'burger',
'potatoe',
'pasta',
'ice-cream',
'pizza',
'chicken',
'onion rings',
'pasta',
'soda'
];
function removeDuplicates(borrar_duplicates) {
    return [...new Set(borrar_duplicates)];
}
console.log(removeDuplicates(duplicates));