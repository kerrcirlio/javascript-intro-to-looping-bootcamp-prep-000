

for (var i = 1; i< 100;i++) {
  console.log ("Hello World the" + i + "time");
}

function forLoop(array){
  for(let i=0; i<25;i++){
    if (i===1){
      array.push(`I am 1 strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array;
}
function maybeTrue(){
  return Math.random() >= 0.5 
}

let countdowm = 100;
while (countdown > 0) {
  console.log(--countdown)
}

function whileLoop(n){
 
  while (n > 0) {
    console.log (--n)
  }
  return 'done'
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >=0.5
  }
  do { array.pop(); 
    
  }
     while (array.length> o || maybeTrue());
     
     return array
}

