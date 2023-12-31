'use client'
import React from 'react'
import Link from 'next/link'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { supabase } from '../lib/supabaseClient.js'
import { useSession, signIn, signOut, SessionProvider } from 'next-auth/react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'





const index = () => {
  const { data: session } = <SessionProvider> useSession(); </SessionProvider>
  const [guestbookData, setGuestbookData] = React.useState(null)
  const [message, setmessage] = React.useState(null)
  const [emptyalert, setemptyalert] = React.useState(false)
  const messageInput = React.useRef()

  const fetchguestbook = async () => {
    const { data, error } = await supabase.from('guestbook').select()
    if (data) {
      setGuestbookData(data)

    }
  }
  const uploaddata = async (e) => {
    let { data } = await supabase.from('guestbook').insert([
      {
        message,
        username: session.user.name,
        email: session.user.email,
      },
    ])
    fetchguestbook()
  }
  const removedata = async (removeid) => {
    const { data } = await supabase.from('guestbook').delete().eq('id', removeid)
    fetchguestbook()
  }
  React.useEffect(() => {
    fetchguestbook()
  }, [])








  return (

    <main className="">

      <div className={`p-2 mt- mb-2 ${!session ? 'block' : 'hidden'}`}>
        <p className="text-xl font-bold">Sign in</p>
        <div className="flex">
          <button
            onClick={() => signIn('google')}
            className=" ml-2 drop-shadow-sm text-lg px-2 py-1 bg-blue-400 hover:bg-blue-500 duration-100 mt-1 text-white rounded-md flex items-center"
          >
            <BsGoogle />
            &thinsp;Google
          </button>
        </div>
      </div>
<div className={`p-2 mt-5 ${!session ? 'hidden' : 'block'}`}>
        <p className="mb-1">Sign in with&nbsp;{session && session.user.name}</p>
        <input
          ref={messageInput}
          onChange={(x) => {
            setmessage(x.target.value)
          }}
          onFocus={() => setemptyalert(false)}
          type="text"
          placeholder="Your message..."
          className="w-full py-1 px-2 text-lg rounded-md bg-neutral-100 ring-1 ring-blue-300 focus:ring-[3px] focus:outline-none duration-75"
        />
        <p className={`text-md text-red-500 ${emptyalert ? 'block' : 'hidden'}`}>Message is empty</p>
        <div className="flex mt-2">
          <button
            onClick={() => {
              messageInput.current.value = ''
              !message ? setemptyalert(true) : emptyalert && ''
              session && message && uploaddata()
              setmessage(null)
            }}
            className="drop-shadow-sm px-2 py-1 bg-blue-400 hover:bg-blue-500 duration-100 rounded-md mr-2 w-full text-lg"
          >
            Send it
          </button>
          <button
            onClick={() => signOut()}
            className="drop-shadow-sm px-2 py-1 w-[120px] bg-zinc-300 hover:bg-zinc-400 duration-100 rounded-md text-lg"
          >
            Sign out
          </button>
        </div>
      </div>
      <div className="mb-5">
        <ul>
          {guestbookData ? (
            guestbookData
              .sort((a, b) => (a.id < b.id ? 1 : -1))
              .map((guestbookData) => (
                <li
                  key={guestbookData.id}
                  className="hover:bg-neutral-200 px-3 py-2 rounded-md duration-100 my-1 hover:drop-shadow-sm"
                >
                  <p className="text-md">{guestbookData.message}</p>
                  <div className="flex text-xs">
                    <p>{guestbookData.username}</p>&thinsp;<p>/</p>&thinsp;
                    <p>
                      {guestbookData.created_at.slice(0, 10)}&thinsp;at&thinsp;
                      {guestbookData.created_at.slice(11, 16)}
                    </p>
                    <div
                      className={`hidden ${
                       session && guestbookData.email === session.user.email
                        ? '!flex'
                        : '!hidden'
                        }`}
                    >
                      <p>&thinsp;/&thinsp;</p>
                      <button
                        onClick={() => removedata(guestbookData.id)}
                        className="text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))
          ) : (
            <Skeleton
              className="my-2"
              borderRadius={10}
              count={1}
              height={60}
              baseColor="#dfdfdf"
              highlightColor="#cfc9c9"
              duration={0.8}
            />
          )}
        </ul>
      </div>





      

    </main>
  )
}


export default index
