import { useState } from "react";
const box = "bg-white rounded-2xl p-5 shadow-sm border border-black/5";
const btn = "bg-black text-white w-full py-3 rounded-xl font-bold active:scale-[0.98]";
const input = "w-full bg-gray-100 rounded-xl p-3 outline-none border focus:border-black text-[14px]";
const label = "text-[11px] font-bold uppercase tracking-widest text-gray-400 ml-1";

export default function Extra21Prime({ type }) {
  const [v1, setV1] = useState(""); const [v2, setV2] = useState(""); const [v3, setV3] = useState("");
  const [out, setOut] = useState("");

  const calc = () => {
    const n1 = parseFloat(v1); const n2 = parseFloat(v2); const n3 = parseFloat(v3);
    if (type === "profit") { const cost=n1, sell=n2; const profit=sell-cost; const margin=(profit/sell*100).toFixed(1); setOut(`Profit: ${profit.toFixed(0)} | Margin: ${margin}%`); }
    if (type === "tip") { const bill=n1, tip=n2; const total=bill+(bill*tip/100); setOut(`Tip: ${(bill*tip/100).toFixed(0)} | Total: ${total.toFixed(0)}`); }
    if (type === "salary") { const monthly=n1; setOut(`Hourly: ${(monthly/160).toFixed(0)} | Weekly: ${(monthly/4).toFixed(0)} | Daily: ${(monthly/30).toFixed(0)}`); }
    if (type === "tax") { const income=n1; const taxRate=n2||15; setOut(`Tax: ${(income*taxRate/100).toFixed(0)} | Net: ${(income - income*taxRate/100).toFixed(0)}`); }
    if (type === "gold") { const grams=n1, price=n2; setOut(`Value: ${(grams*price).toFixed(0)} | ${(grams/11.66).toFixed(2)} Tola`); }
    if (type === "unit") { const val=n1; setOut(`${val} KG = ${(val*2.2046).toFixed(2)} LB | ${val} KM = ${(val*0.621).toFixed(2)} Miles`); }
    if (type === "speed") { const kmh=n1; setOut(`${kmh} KM/H = ${(kmh*0.621).toFixed(1)} MPH | ${kmh} KM in ${(60/kmh*10).toFixed(1)} min for 10KM`); }
    if (type === "electric") { const units=n1, rate=n2; setOut(`Bill: ${(units*rate).toFixed(0)} | ${units} Units x ${rate}`); }
    if (type === "grade") { const obt=n1, total=n2; const per=(obt/total*100).toFixed(1); setOut(`Percentage: ${per}% | ${per>=80?"A+":per>=60?"B":"C"}`); }
    if (type === "datediff") { if(!v1||!v2) return setOut("Select both dates"); const d1=new Date(v1), d2=new Date(v2); const diff=Math.abs(d2-d1)/86400000; setOut(`${diff} Days | ${(diff/30).toFixed(1)} Months | ${(diff/365).toFixed(1)} Years`); }
    if (type === "timezone") { const utc=n1; const offset=n2; setOut(`Local: ${(utc+offset)%24}:00 | UTC ${utc} + ${offset}`); }
    if (type === "bpressure") { const sys=n1, dia=n2; let status=sys<120&&dia<80?"Normal":sys<130?"Elevated":"High"; setOut(`${sys}/${dia} - ${status}`); }
    if (type === "heartrate") { const age=n1; const max=220-age; setOut(`Max HR: ${max} | Fat Burn: ${(max*0.6).toFixed(0)}-${(max*0.7).toFixed(0)} | Cardio: ${(max*0.7).toFixed(0)}-${(max*0.85).toFixed(0)}`); }
    if (type === "step") { const steps=n1; setOut(`${steps} Steps = ${(steps*0.0008).toFixed(2)} KM = ${(steps*0.04).toFixed(0)} Calories`); }
    if (type === "bodyfat") { const bmi=n1, age=n2; const bf=(1.2*bmi + 0.23*age - 16.2).toFixed(1); setOut(`Body Fat: ${bf}% (Est.)`); }
    if (type === "agegap") { if(!v1||!v2) return setOut("Select dates"); const d1=new Date(v1), d2=new Date(v2); const years=Math.abs(d2.getFullYear()-d1.getFullYear()); setOut(`Age Gap: ${years} Years`); }
    if (type === "invoice") { const qty=n1, price=n2, disc=n3||0; const sub=qty*price; const total=sub-(sub*disc/100); setOut(`Subtotal: ${sub} | Total after ${disc}%: ${total}`); }
    if (type === "calorie") { const w=n1, h=n2, age=n3; const bmr=(10*w + 6.25*h - 5*age + 5).toFixed(0); setOut(`BMR: ${bmr} Calories/day | Maintenance: ${(bmr*1.2).toFixed(0)}`); }
    if (type === "interest") { const p=n1, r=n2, t=n3; const si=(p*r*t/100).toFixed(0); setOut(`Simple Interest: ${si} | Total: ${(p+parseFloat(si)).toFixed(0)}`); }
    if (type === "ratio") { const a=n1, b=n2; setOut(`Ratio: ${a}:${b} = ${(a/b).toFixed(2)} : 1`); }
    if (type === "random") { const min=n1||1, max=n2||100; const rnd=Math.floor(Math.random()*(max-min+1))+min; setOut(`Random: ${rnd}`); }
  };

  const titles = {
    profit:"Profit Margin Prime", tip:"Tip Prime", salary:"Salary Prime", tax:"Tax Prime", gold:"Gold Prime",
    unit:"Unit Prime", speed:"Speed Prime", electric:"Electric Bill Prime", grade:"Grade Prime", datediff:"Date Diff Prime",
    timezone:"Time Zone Prime", bpressure:"BP Log Prime", heartrate:"Heart Rate Prime", step:"Step to KM Prime",
    bodyfat:"Body Fat Prime", agegap:"Age Gap Prime", invoice:"Invoice Prime", calorie:"Calorie Prime",
    interest:"Interest Prime", ratio:"Ratio Prime", random:"Random Prime"
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4 bg-[#f8f9fa] min-h-screen">
      <h1 className="text-xl font-black uppercase">{titles[type]}</h1>
      <div className={box + " space-y-3"}>
        {type==="datediff" || type==="agegap" ? (
          <>
            <input type="date" className={input} onChange={e=>setV1(e.target.value)} />
            <input type="date" className={input} onChange={e=>setV2(e.target.value)} />
          </>
        ) : (
          <>
            <input className={input} type="number" placeholder="Value 1" value={v1} onChange={e=>setV1(e.target.value)} />
            <input className={input} type="number" placeholder="Value 2 (optional)" value={v2} onChange={e=>setV2(e.target.value)} />
            {(type==="invoice"||type==="calorie"||type==="interest") && <input className={input} type="number" placeholder="Value 3 (optional)" value={v3} onChange={e=>setV3(e.target.value)} />}
          </>
        )}
        <button onClick={calc} className={btn}>Calculate — Offline</button>
        {out && <div className="bg-black text-white p-4 rounded-xl font-bold break-all">{out}</div>}
        <p className="text-[10px] text-gray-400 text-center uppercase">Global • No Upload • Offline</p>
      </div>
    </div>
  );
}
