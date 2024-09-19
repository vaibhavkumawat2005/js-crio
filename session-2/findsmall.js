function findSmallest(a,b,c){
    if(a<b && a<c){
        return a
    }else if(b<c){
       return b;   
    }else{
        return c;
    }
}

if(findSmallest(5,6,5) !== "a"){
    console.log("a is a samllest")
}else{
    console.log("b is smallest")
}