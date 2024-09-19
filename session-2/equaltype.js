function isEquilateralType(a,b,c){
    if(a==b && b==c){
        return true;
    }
    else{
        return false;
    }
}

if(isEquilateralType(60,60,60) !==  true){
    console.log("the all angle is not same")
}
else{
    console.log("the all angle is same")
}

