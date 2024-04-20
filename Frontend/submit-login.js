const form = document.querySelector("#login-form")

async function sendData() {
    const formData = new FormData(form);
    try {
        console.log(formData.values())
        const response = await fetch("http://localhost:3000/auth", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json",
        }
    });
    response.text().then((data) => {
        console.log(data);
    });
    } catch (e) {
        console.error(e);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
});