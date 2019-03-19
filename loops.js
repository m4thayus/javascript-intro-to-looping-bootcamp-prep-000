var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(n) {
  while (incrementVariable() < n) {
     console.log("I run once regardless");
  }
}

doWhileLoop(9);