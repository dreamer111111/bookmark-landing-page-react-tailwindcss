import React from 'react'

const Logo = ({className=""}) => {
  return (
    <div className={`flex items-center ${className}`}>
        <img src="images/logo-bookmark.svg" alt="Bookmark Logo" className='h-6 md:h-auto' />
    </div>
  )
}

export default Logo