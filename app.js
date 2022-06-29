// Method 1

/* let names = [
    "Zakariae",
    "Ahmed",
    "Adele",
    "Agnes",
    "Billy",
    "Bob",
    "Calvin",
    "Christina",
    "Cindy",
    "Zaki",
];

const myUl = document.getElementById("myUL");
const myInput = document.getElementById("myInput");

function submitElements() {
    let content = names
        .map((name) => {
            return `<li><a href="#">${name}</a></li>`;
        })
        .join("");

    myUl.innerHTML = content;
}

submitElements();

myInput.addEventListener("keyup", (e) => {
    names = names.filter((name) => {
        return (
            name.slice(0, myInput.value.length).toLowerCase() ===
            myInput.value.toLowerCase()
        );
    });
    console.log(names);
    submitElements();
    names = [
        "Zakariae",
        "Ahmed",
        "Adele",
        "Agnes",
        "Billy",
        "Bob",
        "Calvin",
        "Christina",
        "Cindy",
        "Zaki",
    ];
});
 */



// Method 2 - the shortest

let names = [
    "Zakariae",
    "Ahmed",
    "Adele",
    "Agnes",
    "Billy",
    "Bob",
    "Calvin",
    "Christina",
    "Cindy",
    "Zaki",
];

const myUl = document.getElementById("myUL");
const myInput = document.getElementById("myInput");

let content = names
    .map((name) => {
        return `<li><a href="#">${name}</a></li>`;
    })
    .join("");
myUl.innerHTML = content;

myInput.addEventListener("keyup", (e) => {
    names.forEach((name) => {
        if (
            name.slice(0, myInput.value.length).toLowerCase() ===
            myInput.value.toLowerCase()
        ) {
            content += `<li><a href="#">${name}</a></li>`;
        }
    });
    myUl.innerHTML = content;
    content = "";
});


