import sb from '@/libs/createClient'
export default async () => {
    const { data, error } = await sb
        .from('item')
        .select('id, image_url, name, disease, price')
    if (!data || error) return { data: null, error, status: 400 }
    else return {
        data: {
            name: 'All Items',
            details: data
        }, error, status: 200
    }
}