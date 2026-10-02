export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a]">
      <div className="w-1/2">
        <h1 className="text-3xl font-semibold leading-10 tracking-tighter text-black text-zinc-50">
          MKBZ.net
        </h1>
        <p className="text-zinc-400 text-lg leading-none">
          hi there!!!!
        </p>
        <div className="divider leading-none mt-2.5 mb-1"></div>

        <div className="overflow-hidden whitespace-nowrap">
          <div className="flex gap-x-0.5">
            <a>
              <img src="/argentina.png" alt="Argentina"></img>
            </a>
            <a>
              <img src="/australia.jpg" alt="Australia"></img>
            </a>
            <a>
              <img src="/monk.gif" alt="MONKEY!!!!"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}