export default function ContactCard({ children, text }) {
  return (
    <div className="rounded-xl w-[200px] p-4 mx-auto my-auto grid justify-center bg-dark-blue shadow-sm shadow-white/50">
      {children}
      <div className="mx-auto text-white pt-2">{text}</div>
    </div>
  );
}
