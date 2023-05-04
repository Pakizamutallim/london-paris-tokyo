const butonlar = document.getElementById("btn"); 
const texts = document.getElementsByClassName("text"); 

function openInfo1() {
    const london = document.getElementById("london"); 

    london.style.display = "block";
    tokyo.style.display = "none"
    paris.style.display = "none"
}
function openInfo2() {
    const paris = document.getElementById("paris"); 
    paris.style.display = "block"
    london.style.display = "none" 
    tokyo.style.display = "none"
}
function openInfo3() {
    const tokyo = document.getElementById("tokyo"); 
    tokyo.style.display = "block"
    paris.style.display = "none"
    london.style.display = "none"
}
