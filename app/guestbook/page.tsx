import React from 'react'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { supabase } from '../../lib/supabaseClient.js'
import { useSession, signIn, signOut, SessionProvider } from 'next-auth/react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Index from "../../pages/page";



const Page = () => {
    return (

        <Index />


    )
}

export default Page


