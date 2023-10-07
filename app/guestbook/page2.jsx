import React from 'react'
import { supabase } from '../lib/supabaseClient'
import { useSession, signIn, signOut } from 'next-auth/react'

const index = () => {
    const [guestbookData, setGuestbookData] = React.useState(null)

    const { data: session } = useSession()


    // fetch supabase table data
    const fetchguestbook = async () => {
        const { data, error } = await supabase.from('guestbook').select()
        if (data) {
            setGuestbookData(data)
            console.log(data)
        }
    }


    const uploaddata = async (e) => {
        let { data } = await supabase.from('guestbook').insert([
            {
                message: '<your message>',
                username: '<your username>',
                email: '<your email>',
            },
        ])
        fetchguestbook()
    }

    const removedata = async (removeid) => {
        // removeid = table item you want to remove
        const { data } = await supabase.from('guestbook').delete().eq('id', removeid)
        fetchguestbook()
    }





    return (

        <button onClick={()=>signIn('Login provider')}>Sign in</button>
            <button onClick={()=>signOut()} >Sign out</button>

        <div>
            <ul>{guestbookData && guestbookData.map((data) => <li>{data.message}</li>)}</ul>
        </div>
    )




}
export default index
