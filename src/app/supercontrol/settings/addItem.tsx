import React, { FormEvent, useState } from 'react'
import css from './addItem.module.css'
import addItem from '@/api/addItem'
import Message from '@/app/components/message/message';
import Loading from '@/app/components/loading/loading';

interface props {
    photo: File | null;
    name: string;
    price: number | string;
    ingredients: string[];
    description: string;
    disease: string[];
}

const AddItem = ({ setAdd }: { setAdd: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [file, setFile] = useState<File | null>(null)
    const [loading, setLoading] = useState<boolean | null>(null)
    const [message, setMessage] = useState<string>('')
    function purifyList(string: string) {
        return string.split(',')
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const fileData = new FormData(e.currentTarget)
        const name = fileData.get('name')
        const price = fileData.get('price')
        const desc = fileData.get('desc')
        const ingr = fileData.get('ingredients')
        const disease = fileData.get('disease')
        if (!file) {
            setMessage('Please add an image!')
            return;
        }
        const compiledData: props = {
            photo: file,
            name: name?.toString() || '',
            price: price?.toString() || '',
            ingredients: purifyList(ingr?.toString() || ''),
            description: desc?.toString() || '',
            disease: purifyList(disease?.toString() || '')
        }
        console.log(compiledData)
        const submitted = await addItem(compiledData)
        if (submitted) {
            setMessage('Item Added Successfully!')
            setFile(null)
            setAdd(false)
        }
        else setMessage('Some Error Occured!')
        setLoading(false)
    }
    return (
        <section className={css.container} onClick={() => setAdd(false)}>
            <Message setMessage={setMessage} message={message} />
            <form
                onClick={e => e.stopPropagation()}
                onSubmit={handleSubmit}>
                <div className={css.imageCover}>
                    {file ? <img src={URL.createObjectURL(file)} /> :
                        <>
                            <input type='file' maxLength={1} min={1} accept='image/*'
                                onChange={(t) => t.target.files && setFile(t.target.files[0])}
                                hidden id='file' required />
                            <button type='button' onClick={() => document.getElementById('file')?.click()}>+ Photo</button></>}
                </div>
                <div className={css.name}>
                    <label>Name:</label>
                    <input name='name' type='text' placeholder='Product Name' required />
                </div>
                <div className={css.price}>
                    <label>Price:(Rupee)</label>
                    <input name='price' type='number' placeholder='Price' required />
                </div>
                <div className={css.ingredients}>
                    <label>Ingredients:[separate with comma(,)]</label>
                    <textarea name='ingredients' placeholder='Ingredients' />

                </div>
                <div className={css.disease}>
                    <label>Disease Cures:[separate with comma(,)]</label>
                    <textarea name='disease' placeholder='Cures ..' />

                </div>

                <div className={css.desc}>
                    <label>Description:</label>
                    <textarea name='desc' placeholder='Description' />
                </div>
                <button type='submit'>{loading ? 'Adding' : 'Add'}</button>
            </form>
        </section>
    )
}

export default AddItem