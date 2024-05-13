const OpenPopUp = document.querySelector("#User")
const ClosePopUp = document.querySelector("#ClosePU")
const PopUp = document.querySelector("#UserAdministration")
const body = document.body;

OpenPopUp.addEventListener("click", ()=>{
    PopUp.showModal();
    body.classList.remove('blur-effect-remove');
    body.classList.add('blur-effect');
})

ClosePopUp.addEventListener("click", ()=>{
    PopUp.close();
    body.classList.remove('blur-effect');
    body.classList.add('blur-effect-remove');
})
