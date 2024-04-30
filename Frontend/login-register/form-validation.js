
setInterval(validation, 1000);

function validation() {
    const form = document.querySelector("#user-form")
    try {
        const formData = new FormData(form);
        const username = formData.get('username');
        const password = formData.get('password');
        const username_validation = valid_user(username);
        const password_validation = valid_pass(password);
        if(document.getElementById("alert-user").innerHTML !== "User already exists"){
            document.getElementById("alert-user").innerHTML = ""
            document.getElementById("alert-pass").innerHTML = ""
            document.getElementById("username-field").style.borderColor = 'white'
            document.getElementById("password-field").style.borderColor = 'white'
        }
        if(!username_validation.valid && username !== ""){
            document.getElementById("alert-user").innerHTML = username_validation.message
            document.getElementById("username-field").style.borderColor = 'red'
        }
        if(!password_validation.valid && password !== ""){
            document.getElementById("alert-pass").innerHTML = password_validation.message
            document.getElementById("password-field").style.borderColor = 'red'        
        }
    } catch (e) {
        console.error(e);
    }
}

function valid_user(username){
    if (!/[a-z]/.test(username)) {
        return { valid: false, message: 'Username must contain at least one lowercase letter' };
    }
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(username)) {
        return { valid: false, message: 'Username must not contain any symbols' };
    }
    return { valid: true, message: 'Username is valid' };
}

function valid_pass(pass){
    if (pass.length < 8) {
        return { valid: false, message: 'Password must be at least 8 characters long' };
    }
    if (!/[a-z]/.test(pass)) {
        return { valid: false, message: 'Password must contain at least one lowercase letter' };
    }
    if (!/[A-Z]/.test(pass)) {
        return { valid: false, message: 'Password must contain at least one uppercase letter' };
    }
    if (!/[0-9]/.test(pass)) {
        return { valid: false, message: 'Password must contain at least one number' };
    }
    return { valid: true, message: 'Password is valid' };
}

validation();