import React from 'react'

export default function Gradient() {
  return (
    <div className="m-0">
      <div className="container mx-auto pt-12 w-full" style={{ background: "linear-gradient(111.05deg, #E9F7FF 9.66%, #FFDBD5 57.52%, #FFF3CA 103.42%)" }}>
        <img src="/aboutus-section/ladder.png" className="w-12 mx-auto" alt="" />
        <h1 className="text-homepageprimary text-center font-light mt-6 mx-6">A Simple yet powerful and efficient process</h1>

        <div className="grid grid-cols-3 mx-auto bg-whit px-3 ">
          <div className="flex flex-col w-full bg-whit">
            <img src="/aboutus-section/Graphics.png" className="w-40 h-32" />
            <img src="/aboutus-section/Graphics.png" className="w-40 h-32" />

          </div>
          <div className="">
            <img src="/aboutus-section/numbers.png" className="w-16 mx-auto" alt="" />
          </div>
          <div className="flex flex-col w-full">
            <div>
              <h1 className="font-semibold text-sm">Marketing Plan</h1>
              <p className="text-sm font-light">consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
