const form = document.querySelector("#user-form")

async function sendData() {
    const formData = new FormData(form);
    try {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        if(response.status === 200) {
            localStorage.setItem("username", data.username)
            localStorage.setItem("token", data.token)
            window.location.href = "index.html"
        }
        if(response.status === 401){
            document.getElementById("alert-user").innerHTML = "Wrong Username or Password"
            document.getElementById("username-field").style.borderColor = 'red'
            document.getElementById("password-field").style.borderColor = 'red'
        }
    } catch (e) {console.error(e);}
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();

});