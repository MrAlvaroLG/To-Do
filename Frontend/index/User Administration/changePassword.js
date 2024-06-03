const buttonP = document.getElementById("changePassword")
const showP = document.getElementById("changePasswordAction")
const changeP = document.querySelector("#changePasswordAction #buttons #change")
const cancelP = document.querySelector("#changePasswordAction #buttons #cancel")

buttonP.addEventListener('click', ()=>{
    overlay.style.zIndex = 110;
    showP.style.display = 'flex';
})

cancelP.addEventListener('click', ()=>{
    overlay.style.zIndex = 1;
    showP.style.display = 'none';
})
