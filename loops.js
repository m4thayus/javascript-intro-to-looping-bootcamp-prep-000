var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(n) {
  while (incrementVariable() < n);
}

doWhileLoop(9);