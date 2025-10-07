import SigninPage from '@/templates/SigninPage'
import { authOptions } from '@/utils/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
// import { useRouter } from 'next/navigation'
import React from 'react'

async function Signin() {
  const session = await getServerSession(authOptions)
  console.log(session) 
  if(session) redirect("/")
  return (
    <SigninPage session={session}/>
  )
}

export default Signin