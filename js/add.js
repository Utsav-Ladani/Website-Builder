function generateElement(eleName) {
    let addEle = document.createElement(eleName);
    addEle.id = ID++;
    addEle.classList.add(`class-${ID}`)
    addEle.textContent = "Hello this is a div#" + addEle.id;
    return addEle;
}

function renderDataSet() {
    DataSet.forEach((element) => {
        wp.contentWindow.document.body.appendChild(element);
    });
}

function addElementInDataSet(element) {
    element.setAttribute("onclick", "select(this)");
    DataSet.add(element);
    renderDataSet();
}

function addElementInDataDownload(element) {
    DataDownload.add(element);
}

function LetsCreateEle(eleName) {
    let element = generateElement(eleName);
    addElementInDataSet(element);
    addElementInDataDownload(element.cloneNode());
}
