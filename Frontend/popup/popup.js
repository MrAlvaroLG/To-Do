const OpenPopUp = document.querySelector("#User")
const ClosePopUp = document.querySelector("#ClosePU")
const PopUp = document.querySelector("#UserAdministration")

OpenPopUp.addEventListener("click", ()=>{
    PopUp.showModal();
})

ClosePopUp.addEventListener("click", ()=>{
    PopUp.close();
})
