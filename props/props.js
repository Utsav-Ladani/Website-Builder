const props = document.getElementById('properties');

propsArray = ["height", "width", "left", "right", "top", "bottom", "color", "background-color", "border", "padding"];

function createProps(name) {
    let html = `
            <label for="${name}" title="${name}">${name} :</label>
            <input type="text" name="${name}" class='${name}' id='${name}' oninput=setStyle("${name}") >
    `;
    let element = document.createElement("li")
    element.innerHTML = html;
    props.append(element);
}

propsArray.forEach(prop => {
    createProps(prop);
});

function setStyle(prop) {
    window.selectData.forEach(ele => {
        if (document.getElementsByName('classFlag')[0].checked == true && ele.classList.length > 1) {
            let className = ele.classList;
            let className1;
            if (className[0]!="select")
                className1 = className[0]
            else
                className1 = className[1];
            if (className1 != undefined) {
                if (styleObj.class[className1.toString()] == undefined)
                    styleObj.class[className1.toString()] = {};
                styleObj.class[className1.toString()][prop.toString()] = document.getElementById(prop).value;
            }
        }
        else if (document.getElementsByName('idFlag')[0]) {

        }
        else {

        }
    });
    generateStyle();
}


