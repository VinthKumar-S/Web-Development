var price=75;
var discount;
if(price>=50)
{
    if(price>=100){
        discount=price-price*0.20;
        console.log("Discount Price is:"+discount);
    }
    else if(price>=50){
        discount=price-price*0.10;
        console.log("Discount Price is:"+discount);
    }

}
else{
    console.log("No Discounts.");
}