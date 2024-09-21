function findTeamName(name1,name2){

    var str = name1.charAt(0)
    var str2 = name2.charAt(0)
    
    return str + str2
}

if(findTeamName(Anu,Rao) !== "AR"){
    console.log("we expected RK")
}
else{
    console.log("AR")
}