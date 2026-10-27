import { Link } from "react-router-dom";
export default function EplPrime() {
  return (
    <div className="max-w-md mx-auto p-4 min-h-screen bg-[#f8f9fa]">
      <Link to="/sports" className="bg-black text-white text-xs px-3 py-1.5 rounded-full">← Sports Hub</Link>
      <h1 className="text-2xl font-black mt-6">EPL Prime ⚽</h1>
      <p className="text-[12px] text-gray-500 mt-2">English Premier League Live</p>
      <div className="bg-white p-4 rounded-2xl border mt-4">
        <p className="font-bold">EPL 2025-26 Live</p>
        <p className="text-xs text-gray-500 mt-1">Offline scoreboard coming soon.</p>
        <div className="mt-3 p-3 bg-black text-white rounded-xl text-xs">Man City vs Arsenal • Live soon</div>
      </div>
    </div>
  )
}
