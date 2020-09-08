styleObj = {
    "tag": {
        "div": {
            "color": "red",
        },
    },
    "class": {
        "main1": {
            "color": "green",
        },
    },
    "id": {
        "0": {
            "color": "black",
        },
    },
};


function generateStyle() {

    let styleCSS = "";

    Object.entries(styleObj.tag).map(([key, val]) => {

        styleCSS += key + " {\n";

        Object.entries(val).map(([prop, propVal]) => {
            styleCSS += "\t" + prop + ": ";
            styleCSS += propVal + ";\n";
        })

        styleCSS += "}\n\n";
    });

    Object.entries(styleObj.class).map(([key, val]) => {

        styleCSS += "." + key + " {\n";

        Object.entries(val).map(([prop, propVal]) => {
            styleCSS += "\t" + prop + ": ";
            styleCSS += propVal + ";\n";
        })

        styleCSS += "}\n\n";
    });

    Object.entries(styleObj.id).map(([key, val]) => {

        styleCSS += "#" + key + " {\n";

        Object.entries(val).map(([prop, propVal]) => {
            styleCSS += "\t" + prop + ": ";
            styleCSS += propVal + ";\n";
        })

        styleCSS += "}\n\n";
    });

    let s = document.createElement("style");
    s.innerText = styleCSS;
    document.getElementById("generatedPage").contentDocument.getElementsByTagName("head")[0].append(s);

}