import sb from '@/libs/createClient'
export default async () => {
    const { data, error } = await sb
        .from('item')
        .select()
    if (!data || error) return { data: null, error, status: 400 }
    else return { data, error, status: 200 }
}