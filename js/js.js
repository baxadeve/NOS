let cods = document.querySelector(".kodlar")
let tanlash = document.querySelector("select")


tanlash.onchange(function(){
    cods.innerHTML = tanlash.value
})
