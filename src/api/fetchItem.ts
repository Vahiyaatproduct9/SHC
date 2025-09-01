import sb from '@/libs/createClient'
interface props { id: string }
export default async ({ id }: props) => {
    const { data, error } = await sb.from('item').select().eq('id', id)
    console.log(data, error)
    if (!data || error) return { error, status: 400 }
    else return { data, status: 200 }
}
