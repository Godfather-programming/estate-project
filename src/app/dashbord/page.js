// import Client from '@/models/Client'
// import { authOptions } from '@/utils/authOptions'
// import connectDB from '@/utils/connectDB'
// import { getServerSession } from 'next-auth'
import React from 'react'
import DashbordPage from '@/templates/DashbordPage'

function Dashbord() {  
  // const session = await getServerSession(authOptions)
  // console.log(session)
  // const {email} = session.user
  // await connectDB()
  // const client = await Client.find({email})
  // console.log(client)
  // const date = client.createdAt
  return (
    <DashbordPage />
  )
}

export default Dashbord