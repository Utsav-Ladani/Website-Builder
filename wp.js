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
    // parent.document.getElementById("text").value = document.getElementById(thisId).firstChild.nodeValue;
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
        x1 = e.clientX;
        y1 = e.clientY;

        window.onmousemove = startMove;
        window.onmouseup = stopMove;
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
        test.style.top = (test.offsetTop -  y) + "px";
        test.style.left = (test.offsetLeft - x) + "px";
        // test.style.top = 100*(test.offsetTop -  y)/parseInt(getComputedStyle(test.parentNode).height.replace("px","").replace("vh","")) + "%";
        // test.style.left = 100*(test.offsetLeft - x)/parseInt(getComputedStyle(test.parentNode).width.replace("px","").replace("vh","")) + "%";
        console.log(test.style.top);

    }
    function stopMove() {
        window.onmousemove = null;
        window.onmouseup = null;
    }
}
