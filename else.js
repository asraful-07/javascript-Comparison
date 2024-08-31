const money = 100;
const isRaining = true;
const age = 20;
// const taxi = 20;

if(isRaining === true && money >= 200){
    // 5% discount
    const discount = money * 5/100;
    const payAmount = money - discount;
    console.log(payAmount);
}
else if(isRaining === true && money >= 20 || age <= 30){
    // 10% discount 
    const discount = money * 10 / 100;
    const payAmount = money - discount;
    console.log(payAmount);
}

else{
    console.log('100');
}