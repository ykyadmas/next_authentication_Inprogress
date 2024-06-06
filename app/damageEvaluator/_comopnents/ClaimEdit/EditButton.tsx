import Link from 'next/link'
import React from 'react'

const EditButton = ({ClaimId}:{ClaimId:number}) => {
  return (
    <div>
        <Link href={`/damageEvaluator/claim/${ClaimId}/edit`} className='btn btn-primary'>Edit</Link>
    </div>
  )
}

export default EditButton