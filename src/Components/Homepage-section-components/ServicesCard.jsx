export default function ServicesCard({ imgUrl, heading, intro, link }) {
  return (
    <div className="container text-white text-center flex flex-col gap-y-2 items-center py-6 rounded-xl border border-[#424245] px-8  justify-center" style={{background:"linear-gradient(180deg, #36363E 0%, #292930 100%)"}}>
      <img src="/services-section/icon.png" alt="" />
      <h1 className="text-md font-semibold">{heading}</h1>
      <p className="text-sm font-thin ">
                {intro}
      </p>
      <button className="truncate bg-[#FFDC60] rounded-md px-10 text-black py-4" >Read More <img className="inline" src="/services-section/Vector.png" alt="" /></button>
    </div>
  );
}
