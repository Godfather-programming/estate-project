import AddAdvPage from '@/templates/AddAdvPage'
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react'

async function AddAdv() {
    const session = await getServerSession(authOptions);
    console.log(session);
    const { email } = session.user;
  return (
    <AddAdvPage email={email}/>
  )
}

export default AddAdv