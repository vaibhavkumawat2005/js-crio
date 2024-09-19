function compare(a,b,c){
    if(a==b && b==c){
        return true;
    }
    else{
        return false;
    }

}
 if(compare(10,10,10) !== true){
    console.log("test failed : expected not compared")
 }else{
    console.log("test passed all three compared")
 }