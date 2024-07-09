var now = new Date();

const options= {
    timeZone:'Asia/Kolkata',
    year:'numeric',
    month:'2-digit',
    day:'2-digit',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
    hour12:false
};

const formatter=new Intl.DateTimeFormat([],options);
const currentTime=formatter.format(now);
console.log(currentTime);

var cutProperty=" ";
var time=currentTime.substring(currentTime.indexOf(cutProperty)+1)
//console.log(time);

var cutProperty=":";
var time=time.substring(0,time.indexOf(cutProperty))
//console.log(time)

if(time>=4 && time<12){
    console.log("Good Morning.");
}
else if(time>=12 && time<=15){
    console.log("Good Afternoon.");
}
else if(time>=15 && time<=18){
    console.log("Good Evening.");
}
else if(time>=18 && time >3){
    console.log("Good Night.");
}

