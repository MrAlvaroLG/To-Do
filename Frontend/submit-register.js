const form = document.querySelector("#register-form")

async function sendData() {
    const formData = new FormData(form);
    try {
        const response = await fetch("http://localhost:3000/auth", {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                "Content-Type": "application/json",
            }
        });
        if(!resoponse.user_validation){
            document.getElementById("alert-user").innerHTML = response.user_message
        }
        if(!resoponse.pass_validation){
            document.getElementById("alert-pass").innerHTML = response.pass_message
        }
        if(resoponse.user_validation && response.pass_validation){
            document.getElementById("alert-pass").innerHTML = "";
            document.getElementById("alert-user").innerHTML = "";
            window.location.href = "index.html";
        }
    } catch (e) {
        console.error(e);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
});