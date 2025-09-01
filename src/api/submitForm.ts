import sb from '../libs/createClient'

interface prop {
    name: string;
    email: string;
    phone: string;
}

export default async function ({ name, email, phone }: prop) {
    const { data, error } = await sb.from('contact').insert({
        name,
        email,
        phone
    }).select()
    console.log(data, error)
    if (data && !error) return true
    else return false
}