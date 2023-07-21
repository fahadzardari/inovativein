import React from 'react'

export default function Benefits() {
  return (
    <div className='flex flex-col sm:flex-row w-[90%] sm:w-[80%] mx-auto justify-between my-6'>
      <div className='sm:w-1/2 '>
        <div className='flex gap-4'>
            <img src="/benefits-section/Icon1.png" alt="" width={80} />
            <div className='self-center'>
                <small>04. BENEFITS</small>
                <h3 className='text-xl sm:text-2xl'>Benifit of working with Us</h3>
            </div>
        </div>
        <div className=''>
            <img src="/benefits-section/bg.png" alt="" className='w-[80%]' />
        </div>
      </div>

      <div>
        <div className='flex justify-center gap-4 mt-10 w-[26rem]'>  
            <img src="/benefits-section/Icon2.png" className='object-contain self-start' width={70} alt="" />
            <div>
                <h3 className='text-xl'>Page Rankings</h3>
                <hr className='w-[20rem] my-1'/>
                <p style={{"text-wrap": "balance"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro</p>
            </div>
        </div>
        <div className='flex justify-center gap-4 mt-10 w-[26rem]'>  
            <img src="/benefits-section/Icon3.png" className='object-contain self-start' width={70} alt="" />
            <div>
                <h3 className='text-xl'>Site Optimization</h3>
                <hr className='w-[20rem] my-1'/>
                <p style={{"text-wrap": "balance"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro</p>
            </div>
        </div>
        <div className='flex justify-center gap-4 mt-10 w-[26rem]'>  
            <img src="/benefits-section/Icon4.png" className='object-contain self-start' width={70} alt="" />
            <div>
                <h3 className='text-xl'>Reporting & Analysis</h3>
                <hr className='w-[20rem] my-1'/>
                <p style={{"text-wrap": "balance"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro</p>
            </div>
        </div>
      </div>
    </div>
  )
}
