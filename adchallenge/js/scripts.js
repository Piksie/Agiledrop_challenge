// Active link function

let currentUrl = location.href

setInterval(function () {
    if (currentUrl != location.href) {
        currentUrl = location.href;
        let splitCurrentUrl = currentUrl.split("#")[1]

        if (splitCurrentUrl === "challenge-home") {
            document.querySelectorAll(".menu-item")[0].classList.add("active")
        } else {
            document.querySelectorAll(".menu-item")[0].classList.remove("active")
        }

        if (splitCurrentUrl === "challenge-event") {
            document.querySelectorAll(".menu-item")[2].classList.add("active")
        } else {
            document.querySelectorAll(".menu-item")[2].classList.remove("active")
        }

        if (splitCurrentUrl === "challenge-about-me") {
            document.querySelectorAll(".menu-item")[3].classList.add("active")
        } else {
            document.querySelectorAll(".menu-item")[3].classList.remove("active")
        }
    }
}, 500);