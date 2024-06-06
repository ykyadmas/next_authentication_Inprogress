import { PrismaClient } from '@prisma/client'
import React from 'react'

const prisma=new PrismaClient()

const Dashboard = async() => {
  const display=await prisma.claimForm.count()
  return (
    <div className=''>
        {
          display===0? (
            <div className="card w-96 bg-slate-300 shadow-xl ">
            <div className="card-body">
              <h2 className="card-title">There No Claim</h2>
            </div>
          </div>          )
          :(
             <div className="card w-96 bg-slate-300 shadow-xl ">
            <div className="card-body">
              <h2 className="card-title">{display} Claim Requested</h2>
            </div>
          </div>
        
          )
         
        }
    </div>
  )
}

export default Dashboard