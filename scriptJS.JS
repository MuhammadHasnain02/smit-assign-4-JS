// one in table name
// second in table stop value

let userinput = +prompt ('Enter Any Table Name')
let userinput2= +prompt ('Enter Value Stop Table')

let tablename = "Table Of " + userinput
let print = document.getElementById("nameh2").innerText = tablename

for( let i=1; i<=userinput2; i++ )
{

document.write(userinput + ' x ' + i + ' = ' + userinput * i + '<br>')

}