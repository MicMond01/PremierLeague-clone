// const latestBtn = document.querySelector(".tab-one")
// const matchesBtn = document.querySelector(".tab-two")

// const fixtureTab = document.querySelector(".fixture-side")
// const newsTab = document.querySelector(".main-display")

//#########################################################
                // TAB (MATCHES AND FIXURES)
//#########################################################


let tabContent =  document.querySelectorAll(".tabcontent")
let tabLinks = document.querySelectorAll(".tablinks")



function showTab(event) {
    for (let i = 0; i < tabLinks.length; i++){
        tabLinks[i].classList.remove("active")
    }

    for (let i = 0; i < tabContent.length; i++){
        tabContent[i].classList.remove("active")
    }

    

    event.target.classList.add("active")
    let classString = event.target.getAttribute('data-target')
    console.log(classString)
    document.getElementById('panels').getElementsByClassName(classString)[0].classList.add("active")
}

for (let i = 0 ; i < tabLinks.length; i++){
    tabLinks[i].addEventListener('click', showTab, false)
}


//#########################################################
                    // NAVIGATION TOGGLE
//#########################################################

const bars = document.getElementById("barss")
const navDisplay = document.getElementById("left-second-nav")
let navMenu = document.getElementsByClassName("left-second-nav")
const bg = document.getElementById("bg")

bars.addEventListener('click', () => {
    navDisplay.classList.toggle("show")
    // navDisplay.classList.add("bg")
    bg.classList.toggle("shown")
    
})


window.onclick = function(event) {

    if (!event.target.matches(".menu-bars")){
        for (let i = 0; i < navMenu.length; i++){
            let openMenu = navMenu[i];
        

            if (openMenu.classList.contains('show')){
                bars.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
                bars.classList.add("active")
            }
            else {
                bars.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>"
                bars.classList.remove("active")
            }
        }
    }
}


//#########################################################
                    // NAVIGATION MENU 
//#########################################################
// const tabs = document.querySelector(".left-second-nav")
const labContent = document.querySelectorAll(".sub-nav")
const tabLink = document.querySelectorAll(".navClick")


tabLink.forEach(function(el) {
    el.addEventListener("click", openTabs)
})

function openTabs(el) {
    let btnTarget = el.currentTarget
    let optionT = btnTarget.dataset.option

    labContent.forEach(function(el) {
        el.classList.remove("active")
    })

    tabLink.forEach(function(el) {
        el.classList.remove("active")
    })

    document.querySelector("#" + optionT).classList.add("active")
    
    btnTarget.classList.add("active")
}

















// latestBtn.addEventListener('click', () => {
//     // console.log("flash")
//     fixtureTab.classList.add("show")
//     newsTab.classList.add("none")
    
// })

// matchesBtn.addEventListener('click', () => {
//     fixtureTab.classList.add("none")
//     newsTab.classList.add("show")
// })