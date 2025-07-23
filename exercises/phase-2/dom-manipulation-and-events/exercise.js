const div = document.createElement("div");

document.body.appendChild(div);

const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";

div.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3";
h3.style.color = "blue";

div.appendChild(h3);

const div2 = document.createElement("div");
div2.style = "background-color: pink; border: black;";

div.appendChild(div2);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

div2.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!"

div2.appendChild(p2);
