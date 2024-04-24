export function PasswordValidation(password): boolean {
    if (password.length < 8) return false;
    if (!/[a-z]/.test(password)) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (!/[0-9]/.test(password)) return false;
    return true;
}

export function UsernameValidation(username): boolean {
    if (!/[a-z]/.test(username)) return false;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(username)) return false;
    return true;
}

