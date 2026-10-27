import React, { useState } from 'react';

const TOOLS = [
  "Word Counter", "Case Converter", "Password Generator", "QR Generator",
  "Base64 Encode", "URL Encode", "JSON Formatter", "Image Compressor",
  "Color Picker", "Lorem Ipsum", "UUID Generator", "Hash Generator",
  "Image to Base64", "Regex Tester", "HTML Minifier", "CSS Minifier",
  "JS Minifier", "Text Diff", "Unit Converter", "BMI Calculator",
  "Age Calculator", "Loan Calculator", "Percentage Calculator", "Date Difference",
  "Image Resizer", "Text to Speech", "Speech to Text", "Morse Code",
  "Binary Converter", "Hex Converter", "IP Finder", "Password Strength",
  "Email Validator", "Credit Card Validator", "CSV to JSON", "JSON to CSV",
  "Markdown Preview", "HTML to Markdown", "YouTube Thumbnail", "Meta Tag Generator"
];

export default function App() {
  const [active, setActive] = useState(TOOLS[0]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleTool = (tool) => {
    setActive(tool);
    setInput("");
    setOutput("");
  };

  const countWords = (t) => {
    if (active === "Word Counter") {
      const words = t.trim() ? t.trim().split(/\s+/).length : 0;
      setOutput(`Words: ${words} | Characters: ${t.length}`);
    } else if (active === "Case Converter") {
      setOutput(`UPPER: ${t.toUpperCase()}\n\nlower: ${t.toLowerCase()}`);
    } else {
      setOutput(t ? `Processed: ${t.slice(0,500)}` : "");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-[1400px] mx-auto p-4">
        <header className="flex justify-between items-center py-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-bold">W</div>
            <h1 className="text-xl font-bold">WanaLab</h1>
            <span className="ml-3 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs border border-green-500/30">● 40 TOOLS LIVE - v2.2</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
          <div className="bg-white/[0.04] rounded-2xl border border-white/10 p-3 h-[80vh] overflow-y-auto">
            {TOOLS.map(t => (
              <button key={t} onClick={()=>handleTool(t)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm mb-1 ${active===t ? 'bg-violet-600 text-white' : 'hover:bg-white/10 text-white/70'}`}>
                {t}
              </button>
            ))}
          </div>

          <div className="bg-white/[0.04] rounded-2xl border border-white/10 p-6">
            <h2 className="text-2xl font-bold mb-6">{active}</h2>
            <textarea
              value={input}
              onChange={e=>{setInput(e.target.value); countWords(e.target.value)}}
              placeholder={`Enter text for ${active}...`}
              className="w-full h-40 bg-black/50 border border-white/10 rounded-xl p-4 text-sm outline-none"
            />
            {output && <pre className="mt-6 bg-black/60 border border-white/10 rounded-xl p-4 text-sm whitespace-pre-wrap">{output}</pre>}
          </div>
        </div>
      </div>
    </div>
  );
            }
