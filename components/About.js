import logo from "../public/logo.png";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function About() {
  return (
    <section id="about" className="text-center scroll-pt-24 pb-8 bg-grey-blue">
      <div className="mb-16 mx-[10%] pt-28 sm:flex gap-4">
        <div>
          <p className="text-3xl mb-2 sm:text-left sm:text-4xl text-cream">
            Patrícia Kovács
          </p>
          <p className="text-xl mb-6 sm:text-left sm:text-2xl text-cream">
            Website Developer
          </p>
          <p className="text-lg sm:text-left sm:text-xl text-cream">
            Hi👋, I'm Patricia. I am an enthusiastic website developer and like
            to constantly expand my knowledge. I'm mainly proficient in Laravel,
            but I'm happy to learn anything.
          </p>
        </div>
        <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
          <div className="sm:max-lg:w-1/2 hidden md:flex">
            <Image src={logo} alt="Logo" />
          </div>
        </Tilt>
      </div>

      <div className="mt-[5%] mx-[10%] h-fit bg-dark-blue bg-opacity-80 rounded-3xl p-5">
        <p className="mb-2 pb-4 sm:text-left text-xl sm:text-2xl text-cream">
          ABOUT
        </p>
        <div className=" grid gap-4 sm:flex">
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <div className="sm:max-lg:w-1/2">
              <Image src={logo} alt="Logo" />
            </div>
          </Tilt>
          <div className="flex justify-center items-center sm:max-lg:w-1/2 text-cream">
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
