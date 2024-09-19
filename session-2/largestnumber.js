function largestNumber(a,b){
    if(a>b){
        return "a largest";
    }
    else{
        return "b largest"
    }
}

if(largestNumber(10,22) !== "a largest")
    {
        console.log("b is greater")
    }
    else{
        console.log("a is largest")
    }