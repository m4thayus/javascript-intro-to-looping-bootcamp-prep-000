var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(n) {
  do {
    console.log("I run once regardless");
    console.log(i)
  } while (incrementVariable() < n);
}

doWhileLoop(9);