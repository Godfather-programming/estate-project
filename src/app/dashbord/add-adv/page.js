import Client from '@/models/Client';
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
    const client = await Client.findOne({email})
  return (
    <AddAdvPage email={email} role={client.role}/>
  )
}

export default AddAdv