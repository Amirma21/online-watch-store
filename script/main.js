//selector
const nav = document.querySelector("nav")
const dynamicText = document.querySelector(".dynamic-text")


//navigation 

let topNav = nav.offsetTop

window.addEventListener("scroll", () => {
    window.pageYOffset > topNav ? nav.classList.add("sticky") : nav.classList.remove("sticky")
})

// dynamic type in header

const text = [" کیفیت ", "زیبایی ", "برندهای برتر"]

let count = 0;  //nuber of array
let index = 0;
let currentText = " ";
let letter = " ";

const type = () => {
    if (count === text.length) { count = 0 };
    currentText = text[count]
    letter = currentText.slice(0, index++)
    dynamicText.innerText = letter
    setTimeout(type, 400)
    if(currentText === letter) {
        count ++
        index = 0
    }
}

type()

