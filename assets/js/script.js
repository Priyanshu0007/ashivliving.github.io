function movescreen(a,b,c) {
    
   up(a,b,c);
}

function up(a,b,c) {
    document.getElementById("center-text").style.position = 'absolute';
      document.getElementById("down-button").style.position = 'absolute';
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      pos++; 
      document.getElementById("logo-move").style.top = '-'+ pos + '%';
    }
  }
  document.getElementById("nav").classList.remove("hidden");
}

