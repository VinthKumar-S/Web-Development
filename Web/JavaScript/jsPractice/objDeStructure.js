let obj ={
	name:"Naveen",
	age:21,
	email:"naveen@gmail.com"
}

const salary="Salary";

obj[salary]="1000";

let obj2 ={
	field:"Developer"
}

console.log(obj);

let merge={...obj,...obj2}

console.log(merge)

merge={obj,...obj2}

console.log(merge)

merge={...obj,obj2}

console.log(merge)