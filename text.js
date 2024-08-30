const price = 100;
const age = 6;

if(age <= 10){
    console.log('free');
}
else if(age >= 11 && age <= 29){
     //  50% discount 
    const discount = price * 50 / 100 ;
    const payAmount = price -discount;
    console.log(payAmount);
}
else if(age >= 60){
    //  15% discount 
   const discount = price * 15 / 100 ;
   const payAmount = price -discount;
   console.log(payAmount);
}
else{
    console.log('100 tk');
}