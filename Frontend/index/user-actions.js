document.getElementById('username').innerHTML = localStorage.getItem('username');
document.getElementById('usernameActions').innerHTML = localStorage.getItem('username');

const changeUsername = document.querySelector('#ChangeUsername')
const changePassword = document.querySelector('#ChangePassword')
const deleteAccount = document.querySelector('#DeleteAccount')

const openUserAdministration = document.querySelector("#User")
const closeUserAdministration = document.querySelector("#ClosePU")
const userAdministration = document.querySelector("#UserAdministration")
const ChangeUsernameActions = document.querySelector("#ChangeUsernameActions")
const body = document.body;

userAdministration.style.display = 'none';
ChangeUsernameActions.style.display = 'none';

openUserAdministration.addEventListener("click", ()=>{
    userAdministration.style.display = 'flex';
})