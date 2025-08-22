import Image from "next/image";

type BoxItemProps = {
  src: string;
  title: string;
};

export default function BoxItem(props: BoxItemProps) {
  return (
    <div
      title={props.title}
      className="group flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
    >
      <Image
        src={props.src}
        alt={props.title}
        width={60}
        height={60}
        className="w-14 h-auto"
        loading="lazy"
      />
    </div>
  );
}
