let counter  = 0 ;
let IntervalId;

function sayHo(){
    counter++;
    console.log("Hii..")
    if(counter >=3 ){
        clearInterval(IntervalId)
    }
}

IntervalId = setInterval(sayHo, 2000)