import ServicesCard from "../Components/Homepage-section-components/ServicesCard";


export default function Services() {
  return (
    <div className="min-h-screen w-full m-0 p-0 bg-homepageprimary">
      <div className="container mx-auto px-[3rem] lg:px-[8rem] pt-8">
        <div className="flex justify-between items-center">
          <div className="inline-flex flex-col">
            <img src="/services-section/icon.png" className="w-12" alt="" />
            <h1 className="text-lg text-white font-bold hidden lg:visible ">
              High-impact services to take your business to the next level
            </h1>
          </div>
          <div>
            <button className="bg-white rounded-md text-md px-6 py-3 border hover:border-black truncate">
              Our Services  <img src="/services-section/Vector.png" className="inline" alt="" />{" "}
            </button>
          </div>
        </div>
        <h1 className="text-lg text-white lg:hidden font-bold mt-8 ">
          High-impact services to take your business to the next level
        </h1>

        <div className="mt-4 grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
              <ServicesCard heading="Web Development" intro="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis repellat aliquid incidunt voluptatem." />
              <ServicesCard imgUrl={""} heading={"Web Development"} intro={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis repellat aliquid incidunt voluptatem."} />

        </div>
      </div>
    </div>
  );
}
