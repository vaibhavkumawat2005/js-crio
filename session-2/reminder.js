function reminder(a,b){
    return a%3;

}

if (reminder(10,3) !== 1 ){
    console.log("test is failed : we expected the answer 1")
}else{
    console.log("test is passed: the answer 1")
}