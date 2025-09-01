import { createClient } from "@supabase/supabase-js";
const sb = createClient('https://ijggmwakoqvoidgoexhp.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqZ2dtd2Frb3F2b2lkZ29leGhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0NzMxMjUsImV4cCI6MjA3MjA0OTEyNX0.rGf338LFeig11YV1FsypPnHDaBkn1zOu841jR58XHLY')
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