function kthCharFromStart(str,k){
    return str[k-1];
    
}

if(kthCharFromStart("abcdef",2) !== "b" )
    console.log("Test fails: Expected 'b' for input str = 'abcdefghi' and k = 2");
else
  console.log("Sample test case for input str = 'abcdefghi' and k = 2 passed!");