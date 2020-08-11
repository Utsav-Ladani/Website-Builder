
function moveDiv() {
  let b = true;
  selectData.forEach((el) => {
    b = b | el.onmousedown;
  });

  if (b) {
    selectData.forEach((el) => {
      el.onmousedown = move;
      el.style.position = "absolute";
      el.onmousedown = move;
    });
  }

  let x = 0,
    x1;
  let y = 0,
    y1;

  function move(e) {
    e = e || window.event;
    e.preventDefault();
    e.stopPropagation();

    x1 = e.clientX;
    y1 = e.clientY;

    window.onmousemove = startMove;
    window.onmouseup = stopMove;
  }
  function startMove(e) {
    e = e || window.event;
    e.preventDefault();
    e.stopPropagation();

    x = x1 - e.clientX;
    y = y1 - e.clientY;
    x1 = e.clientX;
    y1 = e.clientY;

    selectData.forEach((el) => {
      el.style.top = el.offsetTop - y + "px";
      el.style.left = el.offsetLeft - x + "px";
    });
  }
  function stopMove() {
    window.onmousemove = null;
    window.onmouseup = null;
  }
}

function removeHandle() {
  selectData.forEach((ele) => {
    ele.onmousedown = null;
  });
}
