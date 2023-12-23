import logo from "../public/logo.png";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function About() {
  return (
    <section id="about" className="text-center scroll-pt-24 pb-8 bg-grey-blue">
      <div className="mb-16 mx-[10%] pt-20 sm:flex justify-between">
        <div className="my-auto p-2">
          <p className="text-3xl mb-2 sm:text-left sm:text-4xl text-white">
            Patrícia Kovács
          </p>
          <p className="text-xl mb-6 sm:text-left sm:text-2xl text-white">
            Website Developer
          </p>
          <p className="text-lg sm:text-left sm:text-xl text-white md:w-1/2">
            Nunc efficitur turpis vel odio rutrum, in efficitur nisl tristique.
            Curabitur gravida et felis in lobortis. In quis purus odio.
          </p>
        </div>
        <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
          <div className="sm:max-lg:w-32 hidden md:flex">
            <Image
              src={logo}
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="pt-1"
            />
          </div>
        </Tilt>
      </div>

      <div className="mt-[2%] mx-[10%] h-fit bg-dark-blue bg-opacity-80 rounded-3xl p-5">
        <p className="mb-2 pb-4 text-xl sm:text-2xl text-white">About</p>
        <div className="grid gap-4 sm:flex">
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <div className="sm:max-lg:w-1/2">
              <Image src={logo} alt="Logo" />
            </div>
          </Tilt>
          <div className="flex justify-center items-center sm:max-lg:w-1/2 text-white">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              eleifend egestas ante in suscipit. In arcu quam, ultrices sed nibh
              sed, blandit laoreet eros. Nunc efficitur turpis vel odio rutrum,
              in efficitur nisl tristique. Curabitur gravida et felis in
              lobortis. In quis purus odio. Cras ac bibendum ipsum. Pellentesque
              mattis sollicitudin augue, a euismod felis eleifend quis. Fusce
              pulvinar odio id porttitor fermentum. Duis nibh urna, rhoncus quis
              posuere eget, dapibus quis orci.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
