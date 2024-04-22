const form = document.querySelector("#user-form")

async function sendData() {
    const formData = new FormData(form);
    try {
        const response = await fetch("http://localhost:3000/authenticate_login", {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                "Content-Type": "application/json",
            }
        });
        

    } catch (e) {console.error(e);}
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
});