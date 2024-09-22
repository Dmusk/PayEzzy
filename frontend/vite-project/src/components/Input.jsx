import React from 'react'

const Input = ({ label, placeholder, onChange }) => {
  return (
    <>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="flex justify-startblock mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
          <input onChange={onChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-blackdark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>
      </div>
    </>
  )
}

export default Input