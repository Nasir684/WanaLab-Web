import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#f6f7f8] p-3">
      <div className="bg-black text-white rounded-[28px] p-6 mb-4 flex justify-between">
        <h1 className="text-[20px] font-black">Dashboard</h1><Link to="/" className="bg-white text-black px-3 py-1 rounded-full text-[11px] font-bold">Home</Link>
      </div>
      <div className="grid gap-2">
        <div className="bg-white p-4 rounded-2xl border"><p className="text-[11px] opacity-50">Total Tools</p><p className="font-black text-2xl">40 Tools</p></div>
        <div className="bg-white p-4 rounded-2xl border"><p className="text-[11px] opacity-50">Status</p><p className="font-bold">All Systems Green ✅</p></div>
      </div>
    </div>
  );
}
