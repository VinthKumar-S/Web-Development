let arr=[70,40,5,16,9,11];

arr.forEach((param1,param2,param3)=>{
    //console.log(param1); -value
   // console.log(param3)  -whole array
    if(param1>18){
        console.log(param2) // -- index
    }

})

let number = arr.map((val)=>val);// store value
console.log(number); 