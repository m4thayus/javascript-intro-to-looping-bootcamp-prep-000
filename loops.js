var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(n) {
  do {
    console.log("I run once regardless");
  } while (incrementVariable() <= n);
}

function countdown(c) {
  while (c > 0) {
    --c;
    console.log(c);
  }
  console.log("done");
}