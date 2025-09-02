export default function (pass: string) {
    if (pass === process.env.NEXT_PUBLIC_SECRET_KEY) return true
    else return false
}