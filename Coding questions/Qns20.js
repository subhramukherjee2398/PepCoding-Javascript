let count = 0;
(function imediate(){
    if(count === 0 ){
        let count = 1;
        console.log(count)
    }
    console.log(count)
})();

/**
 * 1
 * 0
 */