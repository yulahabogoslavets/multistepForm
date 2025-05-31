export function isValidStringField(name: string, minLetters = 3) {
    const allowedChars = /^[A-Za-zÄäÖöÜüß\- ]+$/
    const letterCount = (name.match(/[A-Za-zÄäÖöÜüß]/g) || []).length
    return allowedChars.test(name.trim()) && letterCount >= minLetters
}

export function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.trim())
}
export function isValidZip(zip: string) {
    const zipRegex = /^[0-9]{5}$/
    return zipRegex.test(zip.trim())
}
