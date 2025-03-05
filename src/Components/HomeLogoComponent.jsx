import React from 'react'
import { Link } from 'react-router';

function HomeLogoComponent() {
  return (
    <div className='text-4xl font-light text-black transform transition-transform duration-200 hover:scale-101'>
      <Link to={"/"}>
      Briz Doors
        {/* <img src="/src/assets/brizlogodarklong.svg" alt="Home" className='logo-img'/> */}
      </Link>
    </div>
  )
}

export default HomeLogoComponent