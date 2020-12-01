const courses = [
    {
        name : "React",
        price : "300",
    },
    {
        name : "Angular",
        price : "100",
    },
    {
        name : "JS",
        price : "550",
    },
    {
        name : "Python",
        price : "600",
    },
    {
        name : "Word",
        price : "50",
    },
];

function generate()
{
    const ui = document.querySelector(".list-group");
    ui.innerHTML = "";
    courses.forEach( course => {

        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("Rs. "+course.price);
        span.appendChild(price);

        li.appendChild(span);
        ui.appendChild(li);

    })
}

window.addEventListener("load",generate);

const button = document.querySelector(".sort-btn");

button.addEventListener("click",() => {
    courses.sort( (a,b) => a.price - b.price );
    generate();
});

const button_new = document.querySelector(".sort-btn-highest");

button_new.addEventListener("click",() => {
    courses.sort( (a,b) => b.price - a.price );
    generate();
});

