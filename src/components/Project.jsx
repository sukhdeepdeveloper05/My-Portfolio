import Image from "next/image";

export default function Project({
  project: { title, link, image, year, platformIcon },
}) {
  const formattedLink = link
    .replaceAll("https://", "")
    .replaceAll("/", "")
    .replaceAll("-sukhdeep", "");

  return (
    <a
      href={link}
      target="_blank"
      className="group flex flex-col p-2 rounded-lg border border-[#2f3037] hover:border-[#3f3f44] shadow-[#13141566_0px_2px_40px_10px] hover:shadow-[#42454866_0px_2px_40px_10px] transition-all"
    >
      <div className="grid grid-cols-[1fr,auto,1fr] items-center justify-between mb-2">
        <div className="flex items-center gap-[4px]">
          <span className="w-2 md:w-[10px] h-2 md:h-[10px] bg-zinc-500 group-hover:bg-red-700 opacity-60 group-hover:opacity-100 rounded-full transition-all" />
          <span className="w-2 md:w-[10px] h-2 md:h-[10px] bg-zinc-500 group-hover:bg-yellow-600 opacity-60 group-hover:opacity-100 rounded-full transition-all" />
          <span className="w-2 md:w-[10px] h-2 md:h-[10px] bg-zinc-500 group-hover:bg-green-700 opacity-60 group-hover:opacity-100 rounded-full transition-all" />
        </div>
        <span className="bg-[#545556a8] min-w-44 text-center px-4 py-px rounded text-[8px] md:text-xs text-gray-200 group-hover:text-white transition-all">
          {formattedLink}
        </span>
        <span className="flex justify-end">{platformIcon()}</span>
      </div>
      <figure>
        <Image src={image} alt={title} width={0} height={0} />
      </figure>
      <div className="flex items-center justify-between mt-2 text-xs xl:text-sm text-gray-200 group-hover:text-white transition-all">
        <span>{title}</span>
        <span className="border border-[#404244] px-1 py-px rounded text-xs xl:text-sm text-gray-200 group-hover:text-white group-hover:border-[#77797c] transition-all">
          {year}
        </span>
      </div>
    </a>
  );
}
