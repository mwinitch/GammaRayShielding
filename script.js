let materials = document.getElementById("place");
let output = document.getElementById("output");
let count = 1;
document.getElementById("remove").addEventListener("click", function() {
    if (count > 1) {
        let myElement = document.getElementById(`material${count}`);
        myElement.remove();
        count--;
    }
});

document.getElementById("add").addEventListener("click", function() {
    count++;
    let node = document.createElement("div");
    node.setAttribute("id", `material${count}`);
    let para = document.createElement("p");
    var txt = document.createTextNode(`Material ${count}`);
    para.appendChild(txt);
    node.appendChild(para);

    // Create frac input
    let fracInput = document.createElement("input");
    fracInput.id = `frac${count}`;
    fracInput.name = `frac${count}`;
    fracInput.type = "text";

    let fracLabel = document.createElement("Label");
    fracLabel.htmlFor = `frac${count}`;
    let b = `\\( \\displaystyle \\frac{u_${count}}{\\rho_${count}} \\): `;
    fracLabel.innerHTML = b;
    node.appendChild(fracLabel);
    node.appendChild(fracInput);

    let linebreak1 = document.createElement("br");
    let linebreak2 = document.createElement("br");
    node.appendChild(linebreak1);
    node.appendChild(linebreak2);

    // Create rho input
    let rhoInput = document.createElement("input");
    rhoInput.id = `rho${count}`;
    rhoInput.name = `rho${count}`;
    rhoInput.type = "text";

    let rhoLabel = document.createElement("Label");
    rhoLabel.htmlFor = `rho${count}`;
    let c = `\\( \\rho_${count} \\): `;
    rhoLabel.innerHTML = c;
    node.appendChild(rhoLabel);
    node.appendChild(rhoInput);

    let linebreak3 = document.createElement("br");
    let linebreak4 = document.createElement("br");
    node.appendChild(linebreak3);
    node.appendChild(linebreak4);

    // Create x input
    let xInput = document.createElement("input");
    xInput.id = `x${count}`;
    xInput.name = `x${count}`;
    xInput.type = "text";

    let xLabel = document.createElement("Label");
    xLabel.htmlFor = `x${count}`;
    let d = `\\( x_${count} \\): `;
    xLabel.innerHTML = d;
    node.appendChild(xLabel);
    node.appendChild(xInput);

    let linebreak5 = document.createElement("br");
    let linebreak6 = document.createElement("br");
    node.appendChild(linebreak5);
    node.appendChild(linebreak6);

    materials.appendChild(node);
    MathJax.typeset();
});

document.getElementById("calculate").addEventListener("click", function() {
    let total = 0;
    for (let i = 1; i <= count; i++) {
        let res = document.getElementById(`frac${i}`).value * document.getElementById(`rho${i}`).value * document.getElementById(`x${i}`).value;
        total += res;
    }
    let part = Math.E ** (-1 * total);
    let result = document.getElementById("xnaught").value * part;
    let display = `Result: ${result.toFixed(2)} R/hr`;
    output.innerHTML = display;
});