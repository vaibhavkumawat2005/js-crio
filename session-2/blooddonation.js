// function checkBloodDonationEligiblity(age,weight){

//         if (age<18 && weight<=50 ){
//             return "Underage";
//         }
//         else{
//             return"Eligible";
//         }

// }

// if(checkBloodDonationEligiblity(5,60) !== "Eligible" ){
//     console.log("underage");
// }
// else{
//     console.log("eligible");
// }

function checkBloodDonationEligiblity(age,weight){

    if (age>18 && weight>=50 ){
        return "Eligible";
    }
    else{
        return"underage";
    }

}

if(checkBloodDonationEligiblity(5,60) !== "Eligible" ){
console.log("underage");
}
else{
console.log("eligible");
}