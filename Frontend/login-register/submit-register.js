const form = document.querySelector("#user-form")

async function sendData() {
    const formData = new FormData(form);
    try {
        const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        if(response.status === 201) {
            localStorage.setItem("username", data.username)
            localStorage.setItem("token", data.token)
            window.location.href = "index.html"
        }
        if(response.status === 409){
            document.getElementById("alert-user").innerHTML = "User already exists"
            document.getElementById("username-field").style.borderColor = 'red'
        }
    } catch (e) {console.log(e)}
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
});