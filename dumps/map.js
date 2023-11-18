const array1 = [[339, "TD006145"], [340, "TD006146"]];
var arrayed = array1.map(values => ({
    ID: values[0],
    Name: values[1]
}));

console.log("arrayed - ", arrayed)
// arrayed -  [ { ID: 339, Name: 'TD006145' }, { ID: 340, Name: 'TD006146' } ]

const array2 = ["01/01/2019, 00:00", "01/01/2019, 01:00", "01/01/2019, 02:00", "01/01/2019, 03:00", "01/01/2019, 04:00", "01/01/2019, 05:00"];
let time = []

time = array2.map(xAxis => ({
    Date: xAxis.split(',')[0],
    Time: xAxis.split(',')[1],
}));

console.log(JSON.stringify(time))
// [{"Date":"01/01/2019","Time":" 00:00"},{"Date":"01/01/2019","Time":" 01:00"},{"Date":"01/01/2019","Time":" 02:00"},{"Date":"01/01/2019","Time":" 03:00"},{"Date":"01/01/2019","Time":" 04:00"},{"Date":"01/01/2019","Time":" 05:00"}]