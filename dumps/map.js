const array1 = [[339, "TD006145"], [340, "TD006146"]];
var arrayed = array1.map(values => ({
    ID: values[0],
    Name: values[1]
}));

console.log("arrayed - ", arrayed)
// arrayed -  [ { ID: 339, Name: 'TD006145' }, { ID: 340, Name: 'TD006146' } ]

