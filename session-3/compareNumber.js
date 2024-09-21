function compareNumber(a,b,c){
    if(a==b){
        return true;
    }else if(b==c){
        return true
    }else{
        return false;
    }
}

if(compareNumber(10,99,99) !== true){
    console.log("ye bhi match nhi hora tera bhai")
}
else{
    console.log("sherrrr")
}