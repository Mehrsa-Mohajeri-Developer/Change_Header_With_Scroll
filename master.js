document.querySelector("main").addEventListener("scroll", (e) => {
    let st = e.target.scrollTop
    if (st > 80) {
        document.querySelector("header").classList.add("scroll")
        document.getElementById("logo").style.color = "black"
        document.getElementById("nav").style.color = "black"
    }
    else{
        document.querySelector("header").classList.remove("scroll") 
        document.getElementById("logo").style.color = "white"
        document.getElementById("nav").style.color = "white"
    }
})