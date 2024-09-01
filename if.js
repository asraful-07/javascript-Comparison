var isRaining = true;
var price = 60;

if(isRaining === true){
    if(price >= 40){
    console.log('kolla kaw');
    }
    else{
        console.log('badam kaw');
    }
}
else{
    console.log('okay');
}

// 2nd 
const brotherAge = 24;
const myAge = 21;
const isBrother = true;

if(!!isBrother){
    console.log('they are brother');
 if(myAge >= brotherAge){
    console.log('im big brother');
 }
 else if(brotherAge >= myAge){
    console.log("my brother is big brother");
 }
}
else{
    console.log("they are no brother");
}