
var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}

function forLoop(array) {
  for (var c = 0; c < 25; c++) {
    if (i = 1) {
      array[c] = "I am 1 strange loop.";
    }
   else {
      array[c] = "I am ${i} strange loops.";
    }
  }
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