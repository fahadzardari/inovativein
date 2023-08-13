import Navbar from "../Components/Homepage-section-components/Navbar";
export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url(/homepage-section/bg.png",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen"
    >
      <Navbar />
      <div className="flex flex-col justify-center items-center lg:mt-12 lg:flex-row lg:px-36">
        <div className="flex items-center justify-center w-full order-2 px-10 lg:px-0 lg:order-1">
          <div className="max-w-2xl mb-8">
            <h1 className="text-xl text-left lg:text-left font-bold leading-snug tracking-tight lg:text-6xl lg:leading-tight">
              A fully integrated digital{" "}
              <span className="text-homepageservices">Services</span> agency
            </h1>
            <p className="py-5 text-sm leading-normal lg:text-xl">
              Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret
              reprehendunt ius ex. Ut vis mazim erroribus forensibus
            </p>
            <div className="flex flex-col items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                rel="noopener"
                className="px-8 py-4 text-xs w-2/3 lg:w-1/3 font-medium text-center text-white bg-black hover:bg-transparent border border-black hover:text-black rounded-md "
              >
                Our Services
              </a>
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                rel="noopener"
                className="px-8 py-4 text-xs w-2/3 lg:w-1/3 font-medium text-center text-black bg-transparent hover:bg-black border border-black hover:text-white rounded-md "
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="flex order-1 lg:order-2 items-center justify-center w-full">
          <div className="">
            <img
              src="/homepage-section/marketing-banner.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
