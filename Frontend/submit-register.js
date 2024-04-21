const form = document.querySelector("#register-form")

async function sendData() {
    const formData = new FormData(form);
    try {
        const response_validation = await fetch("http://localhost:3000/auth", {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const response_db_validation = await fetch("http://localhost:3000/register", {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                "Content-Type": "application/json",
            }
        });
        
        const json=await response_validation.json();
        if(!json.result_user.valid){
            document.getElementById("alert-user").innerHTML = json.result_user.message
        }
        if(!json.result_pass.valid){
            document.getElementById("alert-pass").innerHTML = json.result_pass.message
        }
        if(json.result_user.valid && json.result_pass.valid){
            const json_db_validation = await response_db_validation.json();
            if(json_db_validation.message === "User already exists"){
                document.getElementById("alert-user").innerHTML = json_db_validation.message
            }
            else{
                document.getElementById("alert-pass").innerHTML = "";
                document.getElementById("alert-user").innerHTML = "";
                window.location.href = "index.html";
            }
        }
    } catch (e) {console.error(e);}
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
});