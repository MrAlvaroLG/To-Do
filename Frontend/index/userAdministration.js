const username = localStorage.getItem('username');
document.getElementById('username').innerHTML = username;
document.querySelector('#userAdministration #username').innerHTML = username;

const user = document.getElementById('user')
const userAdministration = document.getElementById('userAdministration')
const closeUserAdministration = document.getElementById('close')
const overlay = document.getElementById('overlay')

user.addEventListener('click', ()=>{
    userAdministration.style.display = 'block';
    overlay.style.display='block';
    overlay.style.backdropFilter = 'blur(5px)';
})

closeUserAdministration.addEventListener('click', ()=>{
    userAdministration.style.display = 'none';
    overlay.style.display='none';
})

overlay.addEventListener('click', ()=>{
    showU.style.display= 'none';
    showP.style.display= 'none';
    overlay.style.zIndex = 1;
    userAdministration.style.display = 'none';
    overlay.style.display='none';
})
