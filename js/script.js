function clearScreen() {
  document.getElementById("resultado").value = "";
}

// This function display values
function display(value) {
  document.getElementById("resultado").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
  var p = document.getElementById("resultado").value;
  var q = eval(p);
  document.getElementById("resultado").value = q;
}

// This funcion erase the last digit

backspace.onclick = function(e){
  erase();
}

function erase (){
  var value = resultado.value;
  var newValue = value.substring(0,value.length - 1);
  resultado.value = newValue;
}

//Disabled decimal dot 

var dot = document.getElementById("dot");
dot.addEventListener("clearScreen", function(event) {
  event.target.disabled = true;
});

