function resetBrightness(){
  document.getElementById("GreenLight").style.filter = "brightness(100%)";
}

function displayNick(){
  document.getElementById("UnknownNick").src = "images/Nick.jpg";
  document.getElementById("GreenLight").style.filter = "brightness(30%)";
}

function displayGatsby(){
  document.getElementById("UnknownGatsby").src = "images/Gatsby.jpg";
  document.getElementById("GreenLight").style.filter = "brightness(10%)";
}

function displayDaisy(){
  document.getElementById("UnknownDaisy").src = "images/Daisy.png";
  document.getElementById("GreenLight").style.filter = "brightness(90%)";
}

function displayTom(){
  document.getElementById("UnknownTom").src = "images/Tom.jpg";
  document.getElementById("GreenLight").style.filter = "brightness(5%)";
}

function hiddenImg(x){
  x.src = "images/UnknownPerson.png";
  document.getElementById("GreenLight").style.filter = "brightness(100%)";
}
