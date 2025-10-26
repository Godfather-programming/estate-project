import Client from '@/models/Client'
import AdminPage from '@/templates/AdminPage'
import { verifyPassword } from '@/utils/auth'
import { authOptions } from '@/utils/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

async function Admin() {
  const session = await getServerSession(authOptions)
  console.log(session)
  const client = await Client.findOne({email: session.user.email})
  console.log(client.password)
  const adminPassword = "123nemat"
  const isValid = await verifyPassword(adminPassword, client.password)
  console.log({isValid})
  if(!isValid) redirect("/")
  return (
    <AdminPage />
  )
}

export default Admin