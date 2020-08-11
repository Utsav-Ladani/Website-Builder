const Elements = ["Div", "Button", "Span", "Ul", "Table", "Li", "Input", "Section"];

const addPanel = document.getElementById("addPanel");

Elements.forEach((ele) => {
    let li = document.createElement('li');
    li.textContent = ele;
    li.setAttribute('onclick', 'LetsCreateEle(this.textContent)');
    addPanel.appendChild(li);
})


// tools design -----

const fas = ["fa-gear", "fa-download", "fa-mobile", "fa-laptop", "fa-code", "fa-server"];

const tools = document.getElementById('tools');

fas.forEach((fa) => {
    let btn = document.createElement('button');
    let i = document.createElement('i');
    i.classList.add('fa')
    i.classList.add(fa);
    i.classList.add('fa-2x');
    btn.appendChild(i)
    tools.appendChild(btn);
})