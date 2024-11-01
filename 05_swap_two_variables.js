function usingTempVariable(a, b) {
  let temp = parseInt(0);

  temp = a;
  a = b;
  b = temp;

  console.log(`After swapping var a = ${a} & var b = ${b}`);
}

usingTempVariable(10, 20);

function notUsingTempVariable(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a);
  console.log(b);
}

notUsingTempVariable(5, 10);

function destructingAssignment(a, b) {
  [a, b] = [b, a];
  console.log(a);
  console.log(b);
}

destructingAssignment(3, 5);
