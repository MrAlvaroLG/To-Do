function PasswordValidation(password: string): boolean {
    if (password.length < 8) return false;
    if (!/[a-z]/.test(password)) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (!/[0-9]/.test(password)) return false;
    return true;
}

function UsernameValidation(username: string): boolean {
    if (!/[a-z]/.test(username)) return false;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(username)) return false;
    return true;
}

export function DataValidation(username: string, password:string): boolean{
    if(UsernameValidation(username) && PasswordValidation(password))return true;
    return false;
}

