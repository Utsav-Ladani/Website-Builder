function select(el) {
    event.stopPropagation();
    if (event.ctrlKey) {
      selectData.add(el);
      moveDiv();
    } else {
      selectData.forEach((ele) => {
        ele.classList.remove("select");
      });
      removeHandle();
      selectData.clear();
      selectData.add(el);
      moveDiv();
    }
    selectData.forEach((ele) => {
      ele.classList.add("select");
    });
  }
  