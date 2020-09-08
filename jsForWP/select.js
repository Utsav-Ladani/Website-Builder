let selectData1 = new Set();

function select(el) {
  event.stopPropagation();
  if (event.altKey) {
    selectData1.add(el);
    moveDiv();
  } else {
    selectData1.forEach((ele) => {
      ele.classList.remove("select");
    });
    removeHandle();
    selectData1.clear();
    selectData1.add(el);
    moveDiv();
  }
  selectData1.forEach((ele) => {
    ele.classList.add("select");
  });
  parent.window.selectData = selectData1;
}
