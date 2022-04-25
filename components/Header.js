import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <h1>
            <Link href='/'>
              <a>Moviewer</a>
            </Link>
          </h1>
        </div>
      </div>
    </div >
  )
}

export default Header