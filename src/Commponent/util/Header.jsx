import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <header className='border-2 border-red-800 bg-white h-20  '  >
          <nav className='flex items-center justify-between mt-5'>
              <Link>
                  <img src="/src/Commponent/images/download.jpg" alt="logo" className='h-8' />
              </Link>

              {/*SEARCH BAR */}
              <div className=' border-2 w-96'>
                  <input type="text "  placeholder='Search for products,categories,etc.., ' />
              </div>

                  
              <div className='pl-60'>
                   {/*Login*/}
                  <Link to={"/"}>
                     <button className='bg-blue-300' >Login</button>  
                  </Link> 
              </div>
              <div>
                    {/*Login*/}
                  <Link to={"/"}>
                     cart
                  </Link> 
              </div>
              <div>
                   {/*Login*/}
                  <Link to={"/"}>
                     become a seller
                  </Link> 
              </div>
               <div>
                   {/*Login*/}
                  <Link >
                     
                  </Link> 
              </div>
            </nav>
   </header>
  )
}

export default Header
