import SignupPage from '@/templates/SignupPage'
import { authOptions } from '@/utils/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

async function Signup() {
  const session = await getServerSession(authOptions)
  if(session) redirect("/")
  return <SignupPage />
}

export default Signup