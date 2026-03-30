import React, { useState } from 'react';
import { Printer, Shield, Landmark, Edit3, Palette, RefreshCw } from 'lucide-react';

const themes = {
  navy: { primary: 'bg-slate-900', border: 'border-slate-800', text: 'text-slate-900', accent: 'bg-amber-100', light: 'bg-slate-50' },
  forest: { primary: 'bg-emerald-950', border: 'border-emerald-900', text: 'text-emerald-950', accent: 'bg-stone-100', light: 'bg-emerald-50' },
  burgundy: { primary: 'bg-rose-950', border: 'border-rose-900', text: 'text-rose-950', accent: 'bg-orange-50', light: 'bg-rose-50' },
  parchment: { primary: 'bg-stone-800', border: 'border-stone-700', text: 'text-stone-900', accent: 'bg-amber-50', light: 'bg-stone-100' },
};

const Bill = ({ index, denomination, currencyName, bankName, motto, serialPrefix, currentTheme }) => (
  <div className={`relative w-[400px] h-[180px] p-2 m-2 border-4 ${currentTheme.border} ${currentTheme.light} shadow-lg overflow-hidden flex flex-col justify-between print:m-4 print:shadow-none`}>
    {/* Ornate Background Pattern */}
    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px' }} />

    {/* Corner Denominations */}
    <div className="flex justify-between items-start z-10">
      <div className={`text-xl font-serif font-bold ${currentTheme.text} border-2 ${currentTheme.border} px-2 rounded`}>{denomination}</div>
      <div className="text-[10px] uppercase tracking-widest font-bold opacity-40">Federal Reserve of the Vault</div>
      <div className={`text-xl font-serif font-bold ${currentTheme.text} border-2 ${currentTheme.border} px-2 rounded`}>{denomination}</div>
    </div>

    {/* Central Area */}
    <div className="flex flex-col items-center justify-center flex-grow z-10">
      <div className="flex items-center gap-4 mb-1">
        <div className={`w-12 h-12 rounded-full border-2 ${currentTheme.border} flex items-center justify-center bg-white shadow-inner`}>
          <Shield className={currentTheme.text} size={24} />
        </div>
        <div className="text-center">
          <h2 className={`text-xs uppercase tracking-[0.2em] font-bold ${currentTheme.text} opacity-70`}>{currencyName}</h2>
          <h1 className={`text-3xl font-serif font-black uppercase ${currentTheme.text}`}>{denomination}</h1>
        </div>
        <div className={`w-12 h-12 rounded-full border-2 ${currentTheme.border} flex items-center justify-center bg-white shadow-inner`}>
          <Landmark className={currentTheme.text} size={24} />
        </div>
      </div>
      <p className="text-[8px] uppercase tracking-tighter italic opacity-60">This note is valid for academic rewards and classroom privileges only</p>
    </div>

    {/* Footer */}
    <div className="flex justify-between items-end z-10 px-2 pb-1">
      <div className="flex flex-col items-start">
        <div className="text-[7px] uppercase font-bold opacity-50">Authorized Bank</div>
        <div className="font-serif italic text-sm border-b border-black w-24 text-center overflow-hidden whitespace-nowrap">{bankName}</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-[9px] font-serif uppercase tracking-widest italic">{motto}</div>
        <div className="text-[7px] mt-1 font-mono">{serialPrefix}-{Math.floor(100000 + index * 1234)}</div>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-[7px] uppercase font-bold opacity-50">Denomination</div>
        <div className="text-xs font-bold uppercase">{denomination} Credits</div>
      </div>
    </div>

    {/* Side Bars */}
    <div className={`absolute left-0 top-1/4 bottom-1/4 w-1 ${currentTheme.primary}`} />
    <div className={`absolute right-0 top-1/4 bottom-1/4 w-1 ${currentTheme.primary}`} />
  </div>
);

const App = () => {
  const [currencyName, setCurrencyName] = useState('Vault Credits');
  const [denomination, setDenomination] = useState('10');
  const [bankName, setBankName] = useState('The Global Inquiry Vault');
  const [motto, setMotto] = useState('In Inquiry We Trust');
  const [colorTheme, setColorTheme] = useState('navy');
  const serialPrefix = 'GIV';

  const currentTheme = themes[colorTheme];
  const billProps = { denomination, currencyName, bankName, motto, serialPrefix, currentTheme };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row p-4 md:p-8 gap-8 font-sans">
      {/* Settings Panel */}
      <div className="w-full md:w-80 bg-white p-6 rounded-2xl shadow-xl flex flex-col gap-6 print:hidden">
        <div className="flex items-center gap-2 mb-2">
          <Landmark className="text-slate-900" />
          <h2 className="text-xl font-serif font-bold text-slate-900 tracking-tight">The Vault Mint</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1 flex items-center gap-1">
              <Edit3 size={12} /> Currency Name
            </label>
            <input
              type="text"
              value={currencyName}
              onChange={(e) => setCurrencyName(e.target.value)}
              className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-slate-900 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1 flex items-center gap-1">
              <RefreshCw size={12} /> Denomination
            </label>
            <input
              type="text"
              value={denomination}
              onChange={(e) => setDenomination(e.target.value)}
              className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-slate-900 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1 flex items-center gap-1">
              <Shield size={12} /> Bank Name
            </label>
            <input
              type="text"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-slate-900 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Motto</label>
            <input
              type="text"
              value={motto}
              onChange={(e) => setMotto(e.target.value)}
              className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-slate-900 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2 flex items-center gap-1">
              <Palette size={12} /> Institutional Theme
            </label>
            <div className="flex gap-2">
              {Object.keys(themes).map((t) => (
                <button
                  key={t}
                  onClick={() => setColorTheme(t)}
                  className={`w-8 h-8 rounded-full border-2 ${colorTheme === t ? 'border-slate-900 shadow-md' : 'border-transparent'} ${themes[t].primary}`}
                  title={t}
                />
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => window.print()}
          className="mt-4 w-full bg-slate-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-lg active:scale-95"
        >
          <Printer size={18} /> Generate &amp; Print
        </button>

        <p className="text-[10px] text-slate-400 text-center leading-relaxed">
          The Vault Currency Designer creates professional-grade banknotes for elite classroom ecosystems.
        </p>
      </div>

      {/* Preview / Print Area */}
      <div className="flex-grow flex flex-col items-center">
        <div className="mb-4 text-slate-400 uppercase text-[10px] tracking-widest font-bold print:hidden">Live Digital Proof</div>

        <div className="flex flex-wrap justify-center max-w-[900px] print:block print:w-full">
          {/* Screen: single preview */}
          <div className="print:hidden">
            <Bill index={0} {...billProps} />
          </div>

          {/* Print: 3 rows × 2 bills */}
          <div className="hidden print:grid print:grid-cols-2 print:gap-4">
            {[...Array(6)].map((_, i) => (
              <Bill key={i} index={i} {...billProps} />
            ))}
          </div>
        </div>

        <div className="mt-8 p-6 bg-slate-200/50 rounded-xl border border-slate-300 text-slate-600 max-w-md text-sm italic print:hidden">
          "A currency is only as strong as the institution behind it. By issuing these notes, you are establishing the credibility of the Vault in your classroom."
        </div>
      </div>

      <style>{`
        @media print {
          body { background: white !important; }
          @page { margin: 1cm; }
        }
      `}</style>
    </div>
  );
};

export default App;
