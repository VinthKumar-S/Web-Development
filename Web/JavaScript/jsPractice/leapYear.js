var year=2028;

if(year % 4 == 0)
{
    if(year % 100 == 0)
    {
        if(year % 400 == 0)
        {
            console.log("Leap Year 2")
        }
        else{
            console.log("Not leap Year")
        }
    }
    else
    {
        console.log("Leap Year 1")
    }   
}
else
{
    console.log("Not Leap Year")
}