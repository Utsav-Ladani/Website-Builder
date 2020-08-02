let panelCSSPropertyArrayDUP = ["marginTop" , "marginBottom" , "marginLeft" , "marginRight" , "backgroundColor" , "color" , "fontSize" , "height" , "width" , "textAlign" , "lineHeight" , "paddingTop" , "paddingBottom" , "paddingLeft" , "paddingRight"];
// -------this declaration is not needed because in Index.js has this declaration-------

// -----------------this two functions is very usefull---------------------------
function setSelect(Element,thisId) {
    parent.document.getElementById(Element).value = "";
    parent.document.getElementById(Element).value = document.getElementById(thisId).style[Element];
}
function select(event,thisId){
    event.stopPropagation();
    localStorage.setItem("selectId" , thisId);
    parent.document.getElementById("id").value = document.getElementById(thisId).id;
    parent.document.getElementById("text").value = document.getElementById(thisId).firstChild.nodeValue;
    for(let i = 0 ; i<panelCSSPropertyArrayDUP.length ; i++)
    {
        setSelect.call(this , panelCSSPropertyArrayDUP[i],thisId);
    }
    moveDiv(document.getElementById(thisId));
}

// moveDiv();
function moveDiv(test) {
    console.log("fire");
    let x = 0,x1;
    let y = 0,y1;
    test.onmousedown = move;

    function move(e) {
        e = e || window.event;
        e.preventDefault();
        e.stopPropagation();
        console.log("move");
        x1 = e.clientX;
        y1 = e.clientY;

        test.onmousemove = startMove;
        test.onmouseup = stopMove;
    }
    function startMove(e) {
        e = e || window.event;
        e.preventDefault();
        e.stopPropagation();
        console.log("fireStart");
        x = x1 - e.clientX;
        y = y1 - e.clientY;
        x1 = e.clientX;
        y1 = e.clientY;
        console.log(e.clientX);
        test.style.top = (test.offsetTop -  y) + "px";
        test.style.left = (test.offsetLeft - x) + "px";
    }
    function stopMove() {
        console.log("close");
        test.onmousemove = null;
        test.onmouseup = null;
    }
}