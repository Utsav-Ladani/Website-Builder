const workplace = document.getElementById('workplace');
const generatedPage = document.getElementById('generatedPage');
const surface = document.getElementById('surface');


function moveWorkplace() {

  let x = 0,
    x1;
  let y = 0,
    y1;
  let surface = document.getElementById("surface");
  let wp = document.getElementById("generatedPage");

  surface.onmousedown = move;

  function move(e) {
    e = e || window.event;

    // e.preventDefault();
    // e.stopPropagation();

    x1 = e.clientX;
    y1 = e.clientY;

    window.onmousemove = startMove;
    window.onmouseup = stopMove;
    window.onkeyup = function (event) {
      if (event.keyCode == 17) {
        stopMove();
      }
    }
  }

  function startMove(e) {
    e = e || window.event;
    
    // e.preventDefault();
    // e.stopPropagation();

    x = x1 - e.clientX;
    y = y1 - e.clientY;
    x1 = e.clientX;
    y1 = e.clientY;

    wp.style.top = wp.offsetTop - y + "px";
    wp.style.left = wp.offsetLeft - x + "px";
  }
  function stopMove() {
    window.onmousemove = null;
    window.onmouseup = null;
  }
}

moveWorkplace();

window.addEventListener('mousemove', (e) => {
  if (e.ctrlKey) {
      surface.style.display = "block";        
  }
  else {
      surface.style.display = "none";
  }
});
generatedPage.contentWindow.addEventListener('mousemove', (e) => {  
  if (e.ctrlKey) {
      surface.style.display = "block";
  }
  else {
      surface.style.display = "none";
  }
});