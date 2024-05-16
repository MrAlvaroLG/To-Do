const changeUsername = document.querySelector('#ChangeUsername')
const alertChangeUsername = document.querySelector('#alertChangeUsername')
const closechangeUsername = document.querySelector('#closeChangeUsername')

changeUsername.addEventListener("click", () => {
    alertChangeUsername.showModal();
});

closechangeUsername.addEventListener("click", () => {
    alertChangeUsername.close();
});
