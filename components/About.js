import about from "../public/about.png";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function About() {
  return (
    <section id="about" className="text-center scroll-pt-24 pb-8 mb-6">
      <div className="text-center italic text-pink-500 pt-6">
        Development is still in progress...
      </div>
      <div className="mb-16 mx-[10%] pt-20 sm:flex justify-between">
        <Tilt
          scale={1.05}
          transitionSpeed={2500}
          tiltReverse={true}
          className="sm:order-2 my-auto mx-auto"
        >
          <div>
            <Image
              src="design.svg"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="pt-1 mb-6"
            />
          </div>
        </Tilt>
        <div className="sm:order-1 my-auto p-2">
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
      </div>

      <div className="mt-[2%] mx-[10%] h-fit bg-dark-blue bg-opacity-80 rounded-3xl p-5">
        <p className="mb-2 pb-4 text-xl sm:text-2xl text-white ">About</p>
        <div className="grid gap-4 sm:flex">
          <div className="w-[210px] my-auto mx-auto lg:w-[100%] xl:w-[80%] 2xl:w-[50%]">
            <Image src={about} alt="Picture" className="mx-auto" />
          </div>
          <div className="flex justify-center items-center sm:max-lg:w-1/2 text-white">
            <p className="lg:px-11">
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
