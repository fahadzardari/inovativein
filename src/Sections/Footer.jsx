import React from 'react'

export default function Footer() {
  return (
    <div className='w-full'>
      <div className='bg-gray1 sm:mx-auto sm:h-[34rem] py-10'>
        <div className='flex items-center sm:justify-around sm:flex-row flex-col'>
          <div className='h-[29rem] w-[18rem] bg-gray2 space-y-4 px-6 py-10'>
            <h3 className='text-white text-xl'>InovativeIn</h3>
            <img src="/homepage-section/logo.png" className='mx-auto' alt="" />
            <h3 className='text-white text-xl'>Subscribe Now</h3>
            <p className='text-lg text-gray-300'>To get discounts and offers from us</p>
            <input type="text" name="" id="" className='h-[3rem] w-[14rem] bg-gray3 rounded-lg px-4' placeholder='Enter your Email' /><br />
            <button className='bg-yellow-500 h-[3rem] w-[14rem] rounded-lg'>Subscribe</button>
          </div>

          <div className='w-[90%] sm:w-1/2 text-white'>
            <div className='flex justify-between py-8'>
              <div className=''>
                <p>Get in touch with us</p><p>+92 312-456789</p>
              </div>
              <div>
                <p>Location:</p><p>phase 1 society Jamshoro</p>
              </div>
            </div>
            {/* Upper footer end*/}
            <hr />

            <div className='pt-12 pb-6 flex justify-between'>
                <div>
                  <h3 className='text-xl'>Pages</h3>
                  <ul className='pt-6 space-y-2'>
                    <li><a href='#'  className='hover:text-lime-300 hover:delay-300'>Home</a></li>
                    <li><a href='#'  className='hover:text-lime-300 hover:delay-300'>About</a></li>
                    <li><a href='#'  className='hover:text-lime-300 hover:delay-300'>Blog</a></li>
                    <li><a href='#'  className='hover:text-lime-300 hover:delay-300'>Pricing</a></li>
                    <li><a href='#'  className='hover:text-lime-300 hover:delay-300'>Contact</a></li>
                    <li><a href='#'  className='hover:text-lime-300 hover:delay-300'>Services</a></li>
                  </ul>
                </div>
                <div>
                <h3 className='text-xl'>Utlility Pages</h3>
                  <ul className='pt-6 space-y-2'>
                    <li><a href='#'  className='hover:text-lime-300 hover:delay-300'>Styleguide</a></li>
                    <li><a href='#'  className='hover:text-lime-300 hover:delay-300'>404 Not Found</a></li>
                    <li><a href='#'  className='hover:text-lime-300 hover:delay-300'>Password protected</a></li>
                    <li><a href='#'  className='hover:text-lime-300 hover:delay-300'>Licences</a></li>
                    <li><a href='#'  className='hover:text-lime-300 hover:delay-300'>Changelog</a></li>
                  </ul>
                </div>
                <div>
                <h3 className='text-xl'>Follows</h3>
                  <ul className='pt-6 space-y-2'>
                    <li><a href='#'  className='hover:text-lime-300 hover:delay-300'>Facebook</a></li>
                    <li><a href='#'  className='hover:text-lime-300 hover:delay-300'>Twitter</a></li>
                    <li><a href='#'  className='hover:text-lime-300 hover:delay-300'>Instagram</a></li>
                    <li><a href='#'  className='hover:text-lime-300 hover:delay-300'>Linkedin</a></li>
                  </ul>
                </div>
            </div>
            <hr />
            {/* lower footer end */}
            <div className='pt-6 text-center'>Copyright InovativeIn | Designed by InovativeIn - Powered by InovativeIn</div>
          </div>
        </div>
      </div>
    </div>
  );
}