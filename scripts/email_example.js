// URL EXAMPLE
const spans = document.querySelector(".url_example").childNodes;
let url_components = [];

for (let i = 0; i < spans.length; i++) {
    if (spans[i].nodeType === 3 || spans[i].classList.contains("ignore")) {
        continue;
    }
    url_components.push(spans[i]);
}

const url_definition = document.querySelector("#url_definition");

const definitions = {
    nume: "este denumirea cutiei poştale, de obicei acesta este numele de familie al utilizatorului sau o abreviere",
    at: "simbolul „at” (la)",
    adresa: "adresa simbolică a calculatorului client pe care este creată cutia poştală",

};

url_components.forEach(el => {
    el.addEventListener("click", e => {
        const id = e.target.id;
        const def = definitions[id];
        url_components.forEach(element => {
            element.style.textDecoration = "none";
        });
        if (def) {
            url_definition.textContent = def;
            e.target.style.textDecoration = "underline wavy hsl(207, 91%, 56%)";
        }
    });
});
