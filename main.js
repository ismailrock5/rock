function changeText() {
  // Tab to edit
  document.getElementById("fname").innerText = document.getElementById("fName").value;
  document.getElementById("msg").style.display="block";
  
}

function reset() {
  // Tab to edit
  document.getElementById("fname").innerText ="";
  document.getElementById("msg").style.display="none";
  
}