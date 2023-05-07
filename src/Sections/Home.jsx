import Navbar from "../Components/Homepage-section-components/Navbar";
export default function Home() {
  return (
    <div
      style={{ backgroundImage: "url(/homepage-section/bg.png" , backgroundRepeat:"no-repeat" }}
      className="h-screen w-full px-[10rem] pt-8 "
    >
      <img src="/homepage-section/marketing-banner.png" className="invisible lg:visible absolute w-30 h-30 right-0 lg-right-10 top-40 " />
      <Navbar />
      <div className="content w-3/6 mt-12">
        <h1 className="font-extrabold text-7xl">
          A fully integrated digital{" "}
          <span className="text-homepageservices">Services</span> agency
        </h1>
        <p className="text-[#555555] text-lg mt-10">
          Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret
          reprehendunt ius ex. Ut vis mazim erroribus forensibus
        </p>

        <div className="flex mt-8 gap-4">
        <button className="text-white bg-homepageprimary hover:bg-transparent hover:text-homepageprimary  border hover:border-homepageprimary font-light px-8 py-6 rounded-lg">
            Our Services
          </button>
          <button className="text-white bg-homepageprimary hover:bg-transparent hover:text-homepageprimary  border hover:border-homepageprimary font-light px-8 py-6 rounded-lg">
            Getting Started
          </button>
        </div>
      </div>
    </div>
  );
}
