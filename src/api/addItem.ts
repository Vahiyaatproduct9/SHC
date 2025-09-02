import sbs from '@/libs/createAuth'
interface props {
    photo: File | null;
    name: string;
    price: number | string;
    ingredients: string[];
    description: string;
    disease: string[];
}
export default async function ({ photo, name, price, ingredients, description, disease }: props) {
    const { data: imgData, error: imgError } = await sbs.storage.from('photo').upload(photo?.name || 'image', photo || '', {
        cacheControl: '3600',
        upsert: true
    })
    const { data: nameData, error: nameError } = await sbs.from('item').insert({
        name,
        price,
        ingredients,
        description,
        disease,
        image_url: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${imgData?.fullPath}`
    })
    console.log({ imgError }, { nameError })
    if (imgError || nameError) return false
    else return true
}