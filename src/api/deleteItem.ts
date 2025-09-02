import sbs from '@/libs/createAuth'
export default async function deleteItem({ id }: { id: string }) {
    return await sbs.from('item').delete().eq('id', id)
}