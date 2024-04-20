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
        const json=await response.json();
        if(!json.result_user.valid){
            document.getElementById("alert-user").innerHTML = json.result_user.message
        }
        if(!json.result_pass.valid){
            document.getElementById("alert-pass").innerHTML = json.result_pass.message
        }
        if(json.result_user.valid && json.result_pass.valid){
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