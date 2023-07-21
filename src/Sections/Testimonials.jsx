import React from 'react'

export default function Testimonials() {
  return (
    <div className='w-[90%] sm:w-[80%] mx-auto my-8'>
      <div className='flex justify-start gap-4'>
        <img src="/testimonials-section/Icon.png" alt="" width={90} />
        <div>
            <small>03. Testimonials</small>
            <h3 className='text-xl sm:text-2xl sm:w-2/3'>We work with customers across all industries</h3>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-between gap-8 sm:gap-0 my-6'>
        <div className='bg-gradient-to-r from-[#FFF8F8] to-[#F5F7FF] sm:w-[30rem] sm:h-[20rem] p-4 rounded-xl'>
            <div className='sm:w-[25rem] sm:h-[14rem] bg-white mx-auto rounded-xl p-6 drop-shadow-md'>
                <div className='flex justify-between mb-2'>
                    <h3>Company</h3>
                    <span>⭐⭐⭐⭐⭐</span>
                </div>
                <hr />
                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolore fugit, officiis repellendus animi odio ulla</p>
            </div>
            <div className='flex justify-start gap-2 mx-5 mt-3 items-center'>
                <img src="/testimonials-section/Photo1.png" className='rounded-full' alt="" />
                <div>
                    <h3>John Carter</h3>
                    <small>Marketing Lead at Google</small>
                </div>
            </div>
        </div>
        <div className='bg-gradient-to-r from-[#FFF8F8] to-[#F5F7FF] sm:w-[30rem] sm:h-[20rem] p-4 rounded-xl'>
            <div className='sm:w-[25rem] sm:h-[14rem] bg-white mx-auto rounded-xl p-6 drop-shadow-md'>
                <div className='flex justify-between mb-2'>
                    <h3>Company</h3>
                    <span>⭐⭐⭐⭐⭐</span>
                </div>
                <hr />
                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolore fugit, officiis repellendus animi odio ulla</p>
            </div>
            <div className='flex justify-start gap-2 mx-5 mt-3 items-center'>
                <img src="/testimonials-section/Photo1.png" className='rounded-full' alt="" />
                <div>
                    <h3>John Carter</h3>
                    <small>Marketing Lead at Google</small>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
