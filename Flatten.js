const obj = {
    name : "subhra",
    age : 23,

    address  : {
        city : "kol",
        pin  : "743372"
    }
}

function FlattenObject(object,parent,res={}){

    for(let key in objs){
       let proppName = parent ? parent + '_' + key : key 
       if(typeof object[key] == 'object'){
        FlattenObject(object[key],proppName,res)
       }
       else{
         res[proppName] = obj.key
       }
    }
    return res;
}

FlattenObject(obj)