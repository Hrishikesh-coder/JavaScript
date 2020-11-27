const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBg = (selectedElemented) => {
    return window.getComputedStyle(selectedElemented).backgroundColor ;
}

var color = getBg(pink);

console.log(getBg(orange));

// pink.addEventListener('click', () => {
//     center.style.background = color ;
// })

const magic = (element, color) => {

    return element.addEventListener('mouseover', () => {
        center.style.background = color ;
    })

};

magic(cyan, getBg(cyan));
magic(red, getBg(red));
magic(violet, getBg(violet));
magic(orange, getBg(orange));
magic(pink, getBg(pink));


