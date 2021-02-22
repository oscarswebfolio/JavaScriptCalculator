let period = document.getElementById('period');
let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let times = document.getElementById('times');
let divide = document.getElementById('divide');

let equals = document.getElementById('equals');
let output = document.getElementById('output');

let mathTotalOutput = output;

zero.onclick = function() {
  if (output.textContent < "0") {
     mathTotalOutput = "0";
     output.textContent = "0";
  } else {
    mathTotalOutput+= "0";
    output.textContent += "0";
  }
  console.log(mathTotalOutput);
}
one.onclick = function() {
  if (output.textContent < "0") {
     mathTotalOutput = "1";
     output.textContent = "1";
  } else {
    mathTotalOutput+= "1";
    output.textContent += "1";
  }
  console.log(mathTotalOutput);
}
two.onclick = function() {
  if (output.textContent < "0") {
     mathTotalOutput = "2";
     output.textContent = "2";
  } else {
    mathTotalOutput+= "2";
    output.textContent += "2";
  }
  console.log(mathTotalOutput);
}
three.onclick = function() {
  if (output.textContent < "0") {
     mathTotalOutput = "3";
     output.textContent = "3";
  } else {
    mathTotalOutput+= "3";
    output.textContent += "3";
  }
  console.log(mathTotalOutput);
}
four.onclick = function() {
  if (output.textContent < "0") {
     mathTotalOutput = "4";
     output.textContent = "4";
  } else {
    mathTotalOutput+= "4";
    output.textContent += "4";
  }
  console.log(mathTotalOutput);
}
five.onclick = function() {
  if (output.textContent < "0") {
     mathTotalOutput = "5";
     output.textContent = "5";
  } else {
    mathTotalOutput+= "5";
    output.textContent += "5";
  }
  console.log(mathTotalOutput);
}
six.onclick = function() {
  if (output.textContent < "0") {
     mathTotalOutput = "6";
     output.textContent = "6";
  } else {
    mathTotalOutput+= "6";
    output.textContent += "6";
  }
  console.log(mathTotalOutput);
}
seven.onclick = function() {
  if (output.textContent < "0") {
     mathTotalOutput = "7";
     output.textContent = "7";
  } else {
    mathTotalOutput+= "7";
    output.textContent += "7";
  }
  console.log(mathTotalOutput);
}
eight.onclick = function() {
  if (output.textContent < "0") {
     mathTotalOutput = "8";
     output.textContent = "8";
  } else {
    mathTotalOutput+= "8";
    output.textContent += "8";
  }
  console.log(mathTotalOutput);
}
nine.onclick = function() {
  if (output.textContent < "0") {
     mathTotalOutput = "9";
     output.textContent = "9";
  } else {
    mathTotalOutput+= "9";
    output.textContent += "9";
  }
  console.log(mathTotalOutput);
}
plus.onclick = function() {
  if (mathTotalOutput != "") {
    mathTotalOutput += "+";
    output.textContent = mathTotalOutput;
    console.log(mathTotalOutput);
  }  
}
minus.onclick = function() {
  if (mathTotalOutput != "") {
    mathTotalOutput += "-";
    output.textContent = mathTotalOutput;
    console.log(mathTotalOutput);
  }  
}
divide.onclick = function() {
  if (mathTotalOutput != "") {
    mathTotalOutput += "/";
    output.textContent = mathTotalOutput;
    console.log(mathTotalOutput);
  }  
}
times.onclick = function() {
  if (mathTotalOutput != "") {
    mathTotalOutput += "*";
    output.textContent = mathTotalOutput;
    console.log(mathTotalOutput);
  }  
}
period.onclick = function() {
  if (mathTotalOutput != "") {
    mathTotalOutput += ".";
    output.textContent = mathTotalOutput;
    console.log(mathTotalOutput);
}
}
document.getElementById('clear').onclick = function() {
  output.textContent = "";
};
equals.onclick = function() {
  output.textContent = eval(mathTotalOutput);
}