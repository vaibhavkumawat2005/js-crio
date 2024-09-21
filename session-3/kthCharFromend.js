function kthCharFromEnd(str,k){
return str[str.length-k]
}

if(kthCharFromEnd("abcdefghi",2) !== "h"){
    console.log("we expected h char")
}else{
    console.log("the answer is h")
}