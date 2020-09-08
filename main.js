let elementArray = ["div" , "span" , "button" , "input" , "p" , "h" , "ul" , "li" , "ol"];
function setElement(Element)
{
    let li = document.getElementById("main").firstElementChild.appendChild(document.createElement("li"));
    let button = li.appendChild(document.createElement("button"));
    button.setAttribute("onclick","addElement('"+Element+"');")
    button.innerText = Element;
}
for(let i = 0 ; i < elementArray.length ; i++)
{
    setElement(elementArray[i]);
}