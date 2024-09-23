import React from 'react'

function Header() {
  return (
    <div>
        <div className='flex justify-around'>
            <p>Logo</p>
            <div className='flex'>
                <p>Home</p>
                <p>Reviews</p>
                <p>Team</p>
                <p>Contact</p>
            </div>
        </div>
    </div>
  )
}

export default Header