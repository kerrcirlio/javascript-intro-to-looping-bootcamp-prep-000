function forLoop(array) {
  for (let i=0; i<25; i++){
    if (i=== 1) {array.push("I am 1 strange loop.")}
    
    else{array.push(`I am ${i} strange loops.`)}
    
  }
    return array;
}

function whileLoop(n){
  let coundown=n;
  while(coundown>0) {console.log(--countdown)}
  return 'done'
  
}
