function openSneaker(sneakerName) {
  var i;
  var x = document.getElementsByClassName("sneaker");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(sneakerName).style.display = "block";
}