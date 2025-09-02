import sb from '@/libs/createClient'
export default async () => {
    const { data, error } = await sb.from('contact').select()
    if (!data || error) return { data: null, error, status: 400 }
    else return { data, error: null, status: 200 }
}

export async function deleteContact({ id }: { id: string }) {
    const { data, error } = await sb.from('contact').delete().eq('id', id)
    if (error) return { data, error, status: 400 }
    else return { data, error, status: 200 }
}