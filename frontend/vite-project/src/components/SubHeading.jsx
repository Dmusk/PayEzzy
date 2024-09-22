import React from 'react'

const SubHeading = ({ label }) => {
  return (
    <div>
      <p className="mb-6 font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{label}</p>
    </div>
  )
}

export default SubHeading