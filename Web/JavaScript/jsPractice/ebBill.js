let units=230;
let billAmount=0;

if(units <= 100){
    billAmount=0;
}
else if(units <=250){
    billAmount=(units-100)*5;
}
else if(units <=400){
    billAmount=(150*5)+((units-250)*7);
}
else if(units <=250){
    billAmount=(150*5)+(150*7)+((units-400)*10);
}

console.log("Bill Amount is:"+billAmount);