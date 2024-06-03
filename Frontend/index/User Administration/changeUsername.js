const buttonU = document.getElementById("changeUsername")
const showU = document.getElementById("changeUsernameAction")
const changeU = document.querySelector("#changeUsernameAction #buttons #change")
const cancelU = document.querySelector("#changeUsernameAction #buttons #cancel")

buttonU.addEventListener('click', ()=>{
    overlay.style.zIndex = 110;
    showU.style.display = 'flex';
})

cancelU.addEventListener('click', ()=>{
    overlay.style.zIndex = 1;
    showU.style.display = 'none';
})
