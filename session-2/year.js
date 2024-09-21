function year(y){
    if (y%400==0){
        return "leap year"

    }else if(y%4 ==0 && y%100 !== 0 ){
        return "leap year"
    }else{
        return "comman year"
    }


}
if(year(2005) !== "leap year"){
    console.log("test fail: not a leap year");
}
else{
    console.log("sample passed : leap year")
}
