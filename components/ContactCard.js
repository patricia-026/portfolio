export default function ContactCard({ children, text, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="cursor-pointer rounded-xl w-[200px] p-4 mx-auto my-auto grid justify-center bg-dark-blue shadow-sm shadow-white/50 hover:shadow-md hover:shadow-white/50 duration-200 hover:scale-105"
    >
      {children}
      <div className="mx-auto text-white pt-2">{text}</div>
    </a>
  );
}
