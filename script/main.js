//selector
const nav = document.querySelector("nav")
const dynamicText = document.querySelector(".dynamic-text")
const menuBtn = document.querySelector(".navbar-btn")
const menu = document.querySelector(".responsive-menu")
const closeMenuBtn = document.querySelector(".close-menu")
const backdrop = document.querySelector(".backdrop")


//navigation 

let topNav = nav.offsetTop

window.addEventListener("scroll", () => {
    window.pageYOffset > topNav ? nav.classList.add("sticky") : nav.classList.remove("sticky")
})

// dynamic type in header

const text = ["زیبایی", " برترین ها ", "تنوع ", "کیفیت"]

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
    if (currentText === letter) {
        count++
        index = 0
    }
}

type()


// responsive menu

menuBtn.addEventListener("click",()=>{
    menu.style.right = "0%"
    backdrop.style.display = "block"

})

const closeMenu = () => { 
    menu.style.right = "-100%"
    backdrop.style.display = "none"

}
closeMenuBtn.addEventListener("click",closeMenu)
backdrop.addEventListener("click",closeMenu)




