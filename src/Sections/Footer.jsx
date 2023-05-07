import React from 'react'

export default function Footer() {
  return (
    <div className='w-full'>
      <div className='bg-gray1 w-[90%] mx-auto h-[90vh] py-10'>
        <div className='flex justify-around'>
          <div className='h-[29rem] w-[18rem] bg-gray2 space-y-4 px-6 py-10'>
            <h3 className='text-white text-xl'>InovativeIn</h3>
            <img src="/homepage-section/logo.png" className='mx-auto' alt="" />
            <h3 className='text-white text-xl'>Subscribe Now</h3>
            <p className='text-lg text-gray-300'>To get discounts and offers from us</p>
            <input type="text" name="" id="" className='h-[3rem] w-[14rem] bg-gray3 rounded-lg px-4' placeholder='Enter your Email' /><br />
            <button className='bg-yellow-500 h-[3rem] w-[14rem] rounded-lg'>Subscribe</button>
          </div>

          <div className='w-1/2 text-white'>
            <div className='flex justify-between py-8'>
              <div className=''>
                <p>Get in touch with</p><p>+92 312-456789</p>
              </div>
              <div>
                <p>Location</p><p>phase 1 society Jamshoro</p>
              </div>
            </div>
            {/* Upper footer end*/}
            <hr />

            <div className='pt-12 pb-6 flex justify-between'>
                <div>
                  <h3>Pages</h3>
                  <ul className='pt-6 space-y-2'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                    <li>Services</li>
                  </ul>
                </div>
                <div>
                <h3>Utlility Pages</h3>
                  <ul className='pt-6 space-y-2'>
                    <li>Styleguide</li>
                    <li>404 Not Found</li>
                    <li>Password protected</li>
                    <li>Licences</li>
                    <li>Changelog</li>
                  </ul>
                </div>
                <div>
                <h3>Follows</h3>
                  <ul className='pt-6 space-y-2'>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Linkedin</li>
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