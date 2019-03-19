
var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}

function forLoop(array) {
  for (i = 0, i < array.length, i++)
    if 
}

function whileLoop(n) {
  while (n > 0) {
    --n;
    console.log(n);
  }
  return "done"
}

function doWhileLoop(n) {
  do {
    console.log("I run once regardless");
  } while (incrementVariable() <= n);
}