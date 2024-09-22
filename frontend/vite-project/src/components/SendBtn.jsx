import React from 'react'

const SendBtn = ({ user }) => {
  return (
    <div>
      <div className='pt-1 flex justify-between'>
        <div className='flex justify-start'>
          <h1 className='pr-2'>A</h1>
          <div key={user.id}>
            {user.firstName}
          </div>
        </div>
        <div>
          <button className='bg-black text-white border rounded-md border-slate-500 '>Send Money</button>
        </div>
      </div>
    </div>
  )
}

export default SendBtn