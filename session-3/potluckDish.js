function potluckDish(name,dish){
    var firstName = name.charAt(0);
    var lastName =  name.charAt(name.length-1);
    var firstdish = dish.charAt(0);
    var lastdish = dish.charAt(dish.length-1);

    if (firstName === firstdish && lastName === lastdish){
        return true;
    }
    else{
        return false;
    }
}

if (potluckDish("arti","aioli") !== true){
    console.log("not match")
}
else{
    console.log("match")
}

