import { createClient } from "@supabase/supabase-js";
const sb = createClient()
const run = async () => {
    const { data, error } = await sb
        .from('item')
        .select('id, image_url, name, disease, price')
    if (!data || error) return { data: null, error, status: 400 }
    else console.log({
        data: {
            name: 'All Items',
            details: data
        }, error, status: 200
    })
}
run()