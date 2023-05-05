export default function Navbar() {
  return (
    <nav className="flex grow-1 items-center  text-homepageprimary justify-between">
      <div className="flex flex-col items-center">
        <img src="/homepage-section/logo.png" alt="" />
        <h1 className="text-2xl font-bold text-[#2C2D36]">Inovativein</h1>
      </div>

      <ul className="flex items-center gap-16  text-lg grow-1 ">
        <li className="">
        <a className="" href="#">Home</a>
        </li>
        <li className="">
        <a className="" href="#">About</a>
        </li>
        <li className="">
        <a className="" href="#">Services</a>
        </li>
        <li className="">
        <a className="" href="#">Pages</a>
        </li>
        <li className="">
        <a className="" href="#">Login</a>
        </li>

        <li>
          <button className="bg-homepageprimary text-white px-8 py-4 rounded-lg">
            Get Started
          </button>
        </li>
      </ul>
    </nav>
  );
}
