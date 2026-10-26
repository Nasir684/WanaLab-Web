import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="max-w-md mx-auto p-4 bg-[#f8f9fa] min-h-screen">
      <div className="bg-black text-white p-6 rounded-[24px] mb-4">
        <Link to="/" className="text-[10px] bg-white/10 px-3 py-1 rounded-full">← Back to Tools</Link>
        <h1 className="text-2xl font-black mt-3">Dashboard</h1>
        <p className="text-xs opacity-60">WanaLab Analytics • Offline</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white p-4 rounded-2xl border">
          <p className="text-[10px] uppercase text-gray-400 font-bold">Total Tools</p>
          <p className="text-2xl font-black">40+</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border">
          <p className="text-[10px] uppercase text-gray-400 font-bold">Offline</p>
          <p className="text-2xl font-black">100%</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border">
          <p className="text-[10px] uppercase text-gray-400 font-bold">Data Collected</p>
          <p className="text-2xl font-black">0 KB</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border">
          <p className="text-[10px] uppercase text-gray-400 font-bold">Privacy</p>
          <p className="text-2xl font-black">First</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 mt-4 border">
        <h2 className="font-black text-[14px] uppercase">Founder & Developer</h2>
        <div className="flex gap-4 items-center mt-4">
          <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center font-black text-xl">NK</div>
          <div>
            <p className="font-bold text-[16px]">Nasir Khan</p>
            <p className="text-[12px] text-gray-500">Founder & Developer • WanaLab</p>
            <p className="text-[11px] text-gray-400 mt-1">Independent Research Lab • Privacy First Tools • Built for Global Users • Offline First</p>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <a href="https://wanalab-web.pages.dev/" className="bg-black text-white text-[11px] px-4 py-2 rounded-full font-bold">Website</a>
          <span className="bg-gray-100 text-[11px] px-4 py-2 rounded-full">Engineered with Privacy</span>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-[10px] text-gray-400">© 2026 WanaLab • Nasir Khan • All Tools Offline • No Upload</p>
      </div>
    </div>
  );
}
