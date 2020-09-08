let elementCount = 1;
var selectId;
localStorage.setItem("selectId", selectId);

let panelCSSPropertyArray = ["top", "bottom", "left", "right", "marginTop", "marginBottom", "marginLeft", "marginRight", "backgroundColor", "color", "fontSize", "height", "width", "textAlign", "lineHeight", "paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "position", "float", "clear", "border", "borderRadius", "listStyle", "zIndex"];
function setPanel(Element) {
    let li = document.getElementById("property").firstElementChild.appendChild(document.createElement("li"));
    let label = li.appendChild(document.createElement("label"));
    label.for = Element;
    label.innerText = Element + " :";
    let input = li.appendChild(document.createElement("input"));
    input.className = "prop";
    input.id = Element;
    input.type = "text";
    input.name = Element;
    input.setAttribute("onInput", "setAttr('" + Element + "');");
}

// function addElement(Element)
// {
//     let parent = document.getElementById("workplace").appendChild(document.createElement(Element));
//     parent.id = Element + elementCount;
//     parent.style.width = 100 + "px";
//     parent.style.height = 0 + "px";
//     parent.style.padding = 15 + "px";
//     if(Element == "input")
//     {
//         parent.value = Element + elementCount;
//     }
//     else
//     {
//         parent.innerText = Element + elementCount;
//     }
//     parent.style.backgroundColor = "rgb(201, 201, 201)";
//     parent.style.textAlign = "center";
//     parent.style.lineHeight = 8 + "px";
//     parent.onclick = select;
//     // parent.style.marginTop = 0;
//     // parent.style.marginBottom = 0;
//     // parent.style.marginLeft = 0;
//     // parent.style.marginRight = 0;
//     elementCount++;
// }
// // -----------------this ftwo functions is very usefull---------------------------
// function setSelect(Element) {
//         document.getElementById(Element).value = this.style[Element];
// }
// function select(){
//     selectId = this.id;
//     document.getElementById("id").value = this.id;
//     document.getElementById("innerText").value = this.innerText;
//     for(let i = 0 ; i<panelCSSPropertyArray.length ; i++)
//     {
//         setSelect.call(this , panelCSSPropertyArray[i]);
//     }
// }

function addElement(Element) {
    selectId = localStorage.getItem("selectId");
    if (selectId != null && document.getElementById("isIn").checked) {
        var frm = document.getElementById("frm").contentWindow.document.getElementById(selectId);
    }
    else {
        var frm = document.getElementById("frm").contentWindow.document.getElementById("workplace");
    }

    let mainEle = document.createElement(Element);
    mainEle.style.width = "100%";
    mainEle.style.height = "100%";

    let mask = document.createElement("div");
    mask.style.width = "100%";
    mask.style.height = "100%";
    mask.style.position = "absolute";
    mask.style.backgroundColor = "transparent";

    let main = document.createElement("div");
    main.appendChild(mask);     // masking for element
    main.appendChild(mainEle);      
    let parenT = frm.appendChild(main);
    
    console.log(main,mainEle);

    parenT.id = Element + elementCount;
    parenT.style.width = 150 + "px";
    parenT.style.height = 50 + "px";
    parenT.style.transform = "translate(-50%,-50%)"
    // parenT.style.background = `url('http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg')`;
    // parenT.style.padding = 15 + "px";
    if (Element == "input") {
        mainEle.value = Element + elementCount;
    }
    else {
        mainEle.innerText = Element + elementCount;
    }
    parenT.style.backgroundColor = "rgb(201, 201, 201)";
    parenT.style.textAlign = "center";
    // parenT.style.lineHeight = 8 + "px";
    parenT.style.position = "absolute";
    parenT.setAttribute("onclick", "select(event,this.id);");
    elementCount++;
    // setWrapper(parenT.id);
}
// function setWrapper(ID)
// {
//     let wrapper = document.getElementById("frm").contentWindow.document.getElementById(ID);
//     let wrapperDiv = wrapper.appendChild(document.createElement("div"));
//     wrapperDiv.className = "hideInput";
// }

function setAttr(Element) {
    selectId = localStorage.getItem("selectId");
    if (Element == "text") {
        document.getElementById("frm").contentWindow.document.getElementById(selectId).firstChild.textContent = document.getElementById("text").value;
    }
    else if (document.getElementById("frm").contentWindow.document.getElementById(selectId)[Element] != undefined) {
        document.getElementById("frm").contentWindow.document.getElementById(selectId)[Element] = document.getElementById(Element).value;
        if (Element == "id") {
            localStorage.setItem("selectId", document.getElementById("id").value);
        }
    }
    else {
        document.getElementById("frm").contentWindow.document.getElementById(selectId).style[Element] = document.getElementById(Element).value;
    }
}

function setAttrFormSearch(Element, thisId) {
    document.getElementById(Element).value = "";
    document.getElementById(Element).value = document.getElementById('frm').contentWindow.document.getElementById(thisId).style[Element];
}


//------------------------------

// setPanel("id");
for (let i = 0; i < panelCSSPropertyArray.length; i++) {
    setPanel(panelCSSPropertyArray[i]);
}

// ----------------------------------------------------
// main = window.open("wp.html" , "Application" , "width = 500 , height = 300");

function delt() {
    if (document.getElementById('frm').contentWindow.document.getElementById(document.getElementById('deleteById').value) != null) {
        document.getElementById('frm').contentWindow.document.getElementById(document.getElementById('deleteById').value).remove();
    }
}

function search() {
    thisId = document.getElementById('searchById').value;
    if (document.getElementById('frm').contentWindow.document.getElementById(thisId) != null) {
        localStorage.setItem("selectId", thisId);
        document.getElementById("id").value = document.getElementById('frm').contentWindow.document.getElementById(thisId).id;
        document.getElementById("text").value = document.getElementById('frm').contentWindow.document.getElementById(thisId).firstChild.nodeValue;
        for (let i = 0; i < panelCSSPropertyArray.length; i++) {
            setAttrFormSearch.call(this, panelCSSPropertyArray[i], thisId);
        }
    }
}