import {
  Burger,
  Header,
  Container,
  Group,
  Transition,
  Paper,
} from "@mantine/core";
import { useState } from "react";

const classes = {
  dropdown: "absolute z-50 top-8 right-0 mt-16 w-full bg-white shad",
  dropdownInner: "py-8 px-10 flex flex-col gap-4",
};

export default function Navbar() {
  const [opened, setOpened] = useState(false);

  return (
    <Header className="bg-transparent border-0">
      <Container size={"100%"} className="flex justify-between items-center w-full md:px-40 md:py-4">
        <div className="flex flex-col justify-center items-center text-center">
          <img src="/homepage-section/logo.png" className="h-12 md:h-auto" alt="logo" />
          <h1 className="text-[0.7rem] md:text-2xl font-bold text-[#2C2D36]">Inovativein</h1>
        </div>
        <Group gap={5} className="hidden md:flex md:text-lg">
          <a href="" className="hover:text-neutral-800">Home</a>
          <a href="" className="hover:text-neutral-800">About</a>
          <a href="" className="hover:text-neutral-800">Services</a>
          <a href="" className="hover:text-neutral-800">Login</a>
          <a href=""
            className="bg-homepageprimary text-white px-8 py-3 rounded-lg"
          >
            Get Started
          </a>
        </Group>

        <Burger
          opened={opened}
          onClick={() => setOpened(!opened)}
          className="md:hidden"
        />
        <Transition
          mounted={opened}
          transition="fade"
          duration={200}
          timingFunction="ease"
        >
          {(styles) => (
            <Paper className={classes.dropdown + "mx-8"} style={styles}>
              <Group position="apart" className={classes.dropdownInner + ""}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Services</a>
                <a href="">Login</a>
              </Group>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}

// import {
//   Burger,
//   Header,
//   Container,
//   Group,
//   Transition,
//   Paper,
// } from "@mantine/core";
// import { useState } from "react";
// export default function Navbar() {
//   const [opened, setOpened] = useState(false);
//   return (
//     <Header className="bg-transparent w-full border-0">
//       <Container className="flex justify-between items-center w-full">
//         <img src="/homepage-section/logo.png" className="h-14" alt="" />
//         <Group gap={5} className="hidden md:flex">
//           <a href="">Home</a>
//           <a href="">About</a>
//           <a href="">Services</a>
//           <a href="">Login</a>
//         </Group>

//         <Burger className="md:hidden" opened={opened} onClick={() => setOpened(!opened)} />

//       </Container>
//     </Header>
//     // <nav className="flex grow-1 items-center  text-homepageprimary justify-between mx-4 py-8">
//     //   {/* <div className="flex flex-col items-center"> */}
//     //     <img src="/homepage-section/logo.png" alt="logo" className="h-8" />
//     //     {/* <h1 className="text-xs md:text-2xl text-[#2C2D36]">Inovativein</h1> */}
//     //   {/* </div> */}

//     //   <ul className="hidden md:flex items-center gap-16 text-lg grow-1">
//     //     <li className="">
//     //     <a className="" href="#">Home</a>
//     //     </li>
//     //     <li className="">
//     //     <a className="" href="#">About</a>
//     //     </li>
//     //     <li className="">
//     //     <a className="" href="#">Services</a>
//     //     </li>
//     //     <li className="">
//     //     <a className="" href="#">Pages</a>
//     //     </li>
//     //     <li className="">
//     //     <a className="" href="#">Login</a>
//     //     </li>

//     //     <li>
//     //       <button className="bg-homepageprimary text-white px-8 py-4 rounded-lg">
//     //         Get Started
//     //       </button>
//     //     </li>
//     //   </ul>

//     // </nav>
//   );
// }
