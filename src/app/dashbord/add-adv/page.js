import AddAdvPage from '@/templates/AddAdvPage'
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

async function AddAdv() {
    const session = await getServerSession(authOptions);
    console.log(session);
    if(!session) redirect("/signin")
    const email = session?.user.email;
  return (
    <AddAdvPage email={email}/>
  )
}

export default AddAdv