import Avatar from "@/assets/Avatars/Avatar";

export default function HomePage() {
  return (
    <div className="flex max-md:flex-col-reverse justify-center items-center md:gap-24 h-full">
      <div className="py-6 flex flex-col gap-5 max-w-[480px]">
        <div className="flex gap-4 h-4">
          <p className="text-[#00f48d] text-[10px] uppercase">
            Frontend Developer
          </p>
          {/* <div className="w-px h-full bg-[#474853]" />
          <p className="text-[#a7aab4] text-[10px] uppercase">
            Customs Developer
          </p> */}
        </div>
        <div>
          <h1 className="text-3xl min-[769px]:text-[44px] min-[769px]:leading-[56px] font-medium mb-5">
            Hello! Welcome to my Coding World
          </h1>
          <p className="text-sm leading-6 text-[#a7aab4]">
            Hi, I'm Sukhdeep, a self-taught FrontEnd Developer from Punjab. By
            completing a project or solving an error, It gives me a wonderfull
            feeling of Achievment and joy.
          </p>
        </div>
      </div>
      <div className="md:max-xl:hidden">
        <Avatar className="max-md:w-52 max-md:h-52" />
      </div>
    </div>
  );
}
