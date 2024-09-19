function evenOrOdd(n){

    if (n>0){
        if (n%2==0){
            return "Even";

        }
        else{
            return "Odd";
        }
    }

}

if(evenOrOdd(3) !== "Even")
{
    console.log("it's a odd number");
}else{
    console.log("it's a even number")
}
