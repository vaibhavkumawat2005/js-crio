function grade(num){
    if(num>=80){
        return A
    
    }
    else if(num<80 && num>60){
        return B ;
    }
    else if(num<60 && num>50){
        return C;
    }
    else if (num<50 && num>45){
        return D;
    }
    else if(num<45 && num>25){
        return D;
    }
    else{
        return F;
    }

}

if (grade(45) !== "D"){
    console.log("Test fails: Expected D for input marks = 45");
}
else{
    console.log("Sample test case for input marks = 45 passed!");
}