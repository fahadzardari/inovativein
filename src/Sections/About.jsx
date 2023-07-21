import React from 'react'

export default function About() {
  return (
    <div className="w-[90%] sm:w-[80%] mx-auto flex flex-col sm:flex-row justify-between items-start">
      <div>
        <img src="/aboutus-section/Image.png" alt="" />
      </div>

      <div className='sm:w-1/2 w-full'>
          <div className='flex justify-between gap-4 mt-10 w-[26rem] mb-5'>
              <img src="/aboutus-section/about.png" className='object-contain self-start' width={80} alt="" />
              <div>
                <small>02. ABOUT US</small>
                <h3 className='sm:text-2xl text-xl'>The #1 digital marketing services company</h3>
              </div>
          </div>
          <hr />
          <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et fugit voluptates enim, libero totam debitis dolores tempora</p>
          <div className='flex justify-center gap-4 mt-10 w-[26rem]'>  
              <img src="/aboutus-section/Icon1.png" className='object-contain self-start' width={70} alt="" />
              <div>
                <h3 className='text-xl'>Guaranteed Results</h3>
                <hr className='sm:w-[20rem]  my-1'/>
                <p className='' style={{"text-wrap": "balance"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro</p>
              </div>
          </div>
          <div className='flex justify-center gap-4 mt-10 w-[26rem]'>  
              <img src="/aboutus-section/Icon2.png" className='object-contain self-start' width={70} alt="" />
              <div>
                <h3 className='text-xl'>Team of Industry Experts</h3>
                <hr className='w-[20rem] my-1'/>
                <p style={{"text-wrap": "balance"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro</p>
              </div>
          </div>
      </div>
    </div>
  )
}
