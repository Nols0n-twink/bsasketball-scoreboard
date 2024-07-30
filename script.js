// svrv
const homeAdder1 = document.getElementById("home-adder-1")
const homeAdder2 = document.getElementById("home-adder-2")
const homeAdder3 = document.getElementById("home-adder-3")

const homeCounter = document.getElementById("home-counter")
let homeCounterInt = parseInt(homeCounter.innerText)

const guestAdder1 = document.getElementById("guest-adder-1")
const guestAdder2 = document.getElementById("guest-adder-2")
const guestAdder3 = document.getElementById("guest-adder-3")

const guestCounter = document.getElementById("guest-counter")
let guestCounterInt = parseInt(guestCounter.innerText)

const homeTitle = document.querySelector(".home__title")
const guestTitle = document.querySelector(".guest__title")

homeAdder1.addEventListener("click", function() {
    homeCounterInt += 1
    homeCounter.innerText = homeCounterInt
    if (homeCounterInt > guestCounterInt) {
        homeTitle.classList.add("leading-score")
        guestTitle.classList.remove("leading-score")
    } else {
     if (homeCounterInt < guestCounterInt) {
        homeTitle.classList.remove("leading-score")
        guestTitle.classList.add("leading-score")
     } else {
        homeTitle.classList.remove("leading-score")
        guestTitle.classList.remove("leading-score")
     }   
    }
})
homeAdder2.addEventListener("click", function() {
    homeCounterInt += 2
    homeCounter.innerText = homeCounterInt
    if (homeCounterInt > guestCounterInt) {
        homeTitle.classList.add("leading-score")
        guestTitle.classList.remove("leading-score")
    } else {
     if (homeCounterInt < guestCounterInt) {
        homeTitle.classList.remove("leading-score")
        guestTitle.classList.add("leading-score")
     } else {
        homeTitle.classList.remove("leading-score")
        guestTitle.classList.remove("leading-score")
     }   
    }
})
homeAdder3.addEventListener("click", function() {
    homeCounterInt += 3
    homeCounter.innerText = homeCounterInt
    if (homeCounterInt > guestCounterInt) {
        homeTitle.classList.add("leading-score")
        guestTitle.classList.remove("leading-score")
    } else {
     if (homeCounterInt < guestCounterInt) {
        homeTitle.classList.remove("leading-score")
        guestTitle.classList.add("leading-score")
     } else {
        homeTitle.classList.remove("leading-score")
        guestTitle.classList.remove("leading-score")
     }   
    }
})

guestAdder1.addEventListener("click", function() {
    guestCounterInt += 1
    guestCounter.innerText = guestCounterInt
    if (homeCounterInt > guestCounterInt) {
        homeTitle.classList.add("leading-score")
        guestTitle.classList.remove("leading-score")
    } else {
     if (homeCounterInt < guestCounterInt) {
        homeTitle.classList.remove("leading-score")
        guestTitle.classList.add("leading-score")
     } else {
        homeTitle.classList.remove("leading-score")
        guestTitle.classList.remove("leading-score")
     }   
    }
})
guestAdder2.addEventListener("click", function() {
    guestCounterInt += 2
    guestCounter.innerText = guestCounterInt
    if (homeCounterInt > guestCounterInt) {
        homeTitle.classList.add("leading-score")
        guestTitle.classList.remove("leading-score")
    } else {
     if (homeCounterInt < guestCounterInt) {
        homeTitle.classList.remove("leading-score")
        guestTitle.classList.add("leading-score")
     } else {
        homeTitle.classList.remove("leading-score")
        guestTitle.classList.remove("leading-score")
     }   
    }
})
guestAdder3.addEventListener("click", function() {
    guestCounterInt += 3
    guestCounter.innerText = guestCounterInt
    if (homeCounterInt > guestCounterInt) {
        homeTitle.classList.add("leading-score")
        guestTitle.classList.remove("leading-score")
    } else {
     if (homeCounterInt < guestCounterInt) {
        homeTitle.classList.remove("leading-score")
        guestTitle.classList.add("leading-score")
     } else {
        homeTitle.classList.remove("leading-score")
        guestTitle.classList.remove("leading-score")
     }   
    }
})

const newGame = document.getElementById("new-game")

newGame.addEventListener("click", function() {
    homeCounter.innerText = 0
    guestCounter.innerText = 0
    homeCounterInt = 0
    guestCounterInt = 0
    homeTitle.classList.remove("leading-score")
    guestTitle.classList.remove("leading-score")
})


