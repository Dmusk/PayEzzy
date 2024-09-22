import React from 'react'

const Heading = ({ label }) => {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">{label}</h1>
    </div>
  )
}

export default Heading
