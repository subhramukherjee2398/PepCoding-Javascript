console.log("carname",carname);
var carname = 10;
console.log("carname",carname);
function FNCO(){
    console.log("FNCO",carname)
}

function fn(){
    console.log("carname",carname);
    var carname = "50000"
    function fn22(){
        console.log("carname fn22",carname);
        var carname = "nothing"
        
    }
    fn22()
    FNCO()
    console.log("carname",carname);
} 
fn()