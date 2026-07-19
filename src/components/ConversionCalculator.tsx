import { useState, useMemo } from 'react';
import { DollarSign, Youtube, Eye, Globe, Sparkles } from 'lucide-react';

export default function ConversionCalculator() {
  const [views, setViews] = useState<number>(3000000); // Default 3M monthly views
  const [usPercent, setUsPercent] = useState<number>(40); // 40% US views
  const [europePercent, setEuropePercent] = useState<number>(35); // 35% Europe views

  // Algeria / Asia / Rest of World is computed dynamically to total exactly 100%
  const otherPercent = useMemo(() => {
    return Math.max(0, 100 - usPercent - europePercent);
  }, [usPercent, europePercent]);

  // Adjust US percentage and balance Europe if needed
  const handleUsChange = (val: number) => {
    setUsPercent(val);
    if (val + europePercent > 100) {
      setEuropePercent(100 - val);
    }
  };

  // Adjust Europe percentage and balance US if needed
  const handleEuropeChange = (val: number) => {
    setEuropePercent(val);
    if (val + usPercent > 100) {
      setUsPercent(100 - val);
    }
  };

  // Presets for country traffic mix
  const applyPreset = (us: number, eu: number) => {
    setUsPercent(us);
    setEuropePercent(eu);
  };

  // Average RPM definitions based on actual YouTube Shorts geographic data
  const tier1Rpm = 1.0; // US/UK/Canada average RPM ($1.0 per 1K views)
  const tier2Rpm = 1.0; // Europe/GCC average RPM ($1.0 per 1K views)
  const tier3Rpm = 1.0; // Algeria/Asia/Developing average RPM ($1.0 per 1K views)

  const stats = useMemo(() => {
    // Weighted RPM based on audience country mix
    const weightedRpm = (usPercent * tier1Rpm + europePercent * tier2Rpm + otherPercent * tier3Rpm) / 100;
    const totalMonthly = (views * weightedRpm) / 1000;
    const totalAnnual = totalMonthly * 12;

    return {
      weightedRpm,
      totalMonthly: Math.round(totalMonthly),
      totalAnnual: Math.round(totalAnnual),
      totalMonthlyDzd: Math.round(totalMonthly * 250),
      totalAnnualDzd: Math.round(totalAnnual * 250),
      usViews: Math.round((views * usPercent) / 100),
      euViews: Math.round((views * europePercent) / 100),
      otherViews: Math.round((views * otherPercent) / 100),
    };
  }, [views, usPercent, europePercent, otherPercent]);

  return (
    <div id="calculator" className="w-full max-w-4xl mx-auto bg-white border border-black rounded-none overflow-hidden">
      {/* Lime header bar with title */}
      <div className="h-14 md:h-16 bg-[#D2FE2E] flex items-center justify-between px-5 md:px-7 border-b border-black">
        <div className="flex items-center gap-2.5">
          <Youtube className="w-5 h-5 md:w-6 md:h-6 text-black shrink-0" />
          <h2 className="font-sans text-[clamp(1.1rem,4vw,1.8rem)] font-black tracking-tighter leading-none text-black">
            حاسبة أرباح يوتيوب شورتس
          </h2>
        </div>
      </div>

      {/* Calculator body */}
      <div className="p-5 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Sliders and Inputs */}
        <div className="space-y-6">
          {/* المشاهدات الشهرية */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="input-views" className="text-sm font-black uppercase tracking-wider text-black flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-black" /> المشاهدات الشهرية
              </label>
              <span className="text-sm font-mono font-bold text-slate-900">
                {views.toLocaleString()}
              </span>
            </div>
            <input
              id="input-views"
              type="range"
              min="10000"
              max="20000000"
              step="50000"
              value={views}
              onChange={(e) => setViews(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-black"
            />
            <div className="flex justify-between text-[10px] text-black/50 font-mono mt-1">
              <span>10k</span>
              <span>10M</span>
              <span>20M</span>
            </div>
          </div>

          {/* Quick Country Mix Presets */}
          <div>
            <label className="text-sm font-black uppercase tracking-wider text-black block mb-2">
              بلد الجمهور
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => applyPreset(75, 15)}
                className={`py-3.5 px-2 text-xs md:text-sm font-sans font-bold text-center transition-all cursor-pointer ${
                  usPercent >= 70
                    ? 'btn-3d-preset-active'
                    : 'btn-3d-preset-inactive'
                }`}
              >
                🇺🇸 جمهور أمريكي قوي (75%)
              </button>
              <button
                onClick={() => applyPreset(5, 15)}
                className={`py-3.5 px-2 text-xs md:text-sm font-sans font-bold text-center transition-all cursor-pointer ${
                  usPercent <= 10 && otherPercent >= 70
                    ? 'btn-3d-preset-active'
                    : 'btn-3d-preset-inactive'
                }`}
              >
                🇩🇿 تركيز الجزائر
              </button>
            </div>
          </div>

          {/* Dynamic Geographic Sliders */}
          <div className="space-y-4 pt-2 border-t border-slate-100">

            {/* US / UK / Canada (Tier 1) */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-black/70 font-medium">🇺🇸 الولايات المتحدة / الفئة الأولى (العائد: ${tier1Rpm.toFixed(3)})</span>
                <span className="font-mono font-bold text-black">{usPercent}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={usPercent}
                onChange={(e) => handleUsChange(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-black"
              />
            </div>

            {/* Europe / GCC (Tier 2) */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-black/70 font-medium">🇪🇺 أوروبا / دول الخليج (العائد: ${tier2Rpm.toFixed(3)})</span>
                <span className="font-mono font-bold text-black">{europePercent}%</span>
              </div>
              <input
                type="range"
                min="0"
                max={100 - usPercent}
                value={europePercent}
                onChange={(e) => handleEuropeChange(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-black"
              />
            </div>

            {/* Algeria / Asia / Rest (Tier 3) */}
            <div className="bg-white p-3 rounded-xl border border-neutral-100 shadow-xs">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-black/70">🇩🇿 الجزائر، الهند وباقي العالم (العائد: ${tier3Rpm.toFixed(3)})</span>
                <span className="font-mono font-bold text-black">{otherPercent}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-lg mt-2 overflow-hidden">
                <div 
                  className="bg-slate-400 h-full transition-all duration-300"
                  style={{ width: `${otherPercent}%` }}
                />
              </div>
              <p className="text-[10px] text-black/50 mt-1.5 italic">
                الجزائر وشمال أفريقيا وآسيا تملك كثافة مشاهدة كبيرة، لكن أسعار الإعلانات أقل، لذلك يكون الحجم كبيراً والعائد لكل ألف مشاهدة أقل.
              </p>
            </div>
          </div>
        </div>

        {/* Results Visualization */}
        <div className="bg-[#D2FE2E] text-black rounded-none p-6 md:p-8 flex flex-col justify-between h-full border border-black shadow-[4px_4px_0_#000] relative overflow-hidden">
          <div className="space-y-6">
            <div>
              <span className="text-lg md:text-xl font-sans font-black text-black block">
                الأرباح المتوقعة من الشورتس
              </span>
            </div>

            {/* Monthly Earnings */}
            <div className="bg-black/10 rounded-none p-5 border border-black/20 space-y-3">
              <p className="text-xs text-black/60 uppercase tracking-wider font-bold">
                إجمالي الدخل الشهري المتوقع
              </p>
              
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-mono font-black text-black tracking-tight">
                  +${stats.totalMonthly.toLocaleString()}
                </span>
                <span className="text-sm font-sans font-bold text-black/70">
                  / شهر
                </span>
              </div>

              <div className="pt-3 border-t border-black/20">
                <div className="flex justify-between items-center text-xs text-black/60 mb-1">
                  <span>المعادل بالدينار الجزائري</span>
                  <span className="text-[10px] font-mono text-black/50">(1$ = 250 دج)</span>
                </div>
                <p className="text-2xl md:text-3xl font-sans font-black text-black">
                  +{stats.totalMonthlyDzd.toLocaleString()} دج <span className="text-xs font-bold">/ شهر</span>
                </p>
              </div>
            </div>

            {/* Yearly Potential & RPM */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/10 rounded-none p-4 border border-black/20 space-y-1.5">
                <p className="text-[10px] text-black/60 font-bold uppercase tracking-wider">
                  الإمكانية السنوية
                </p>
                <p className="text-xl font-mono font-black text-black">
                  +${stats.totalAnnual.toLocaleString()}
                </p>
                <p className="text-xs font-sans font-bold text-black/70">
                  +{stats.totalAnnualDzd.toLocaleString()} دج
                </p>
              </div>

              <div className="bg-black/10 rounded-none p-4 border border-black/20 space-y-1.5">
                <p className="text-[10px] text-black/60 font-bold uppercase tracking-wider">
                  متوسط العائد (RPM)
                </p>
                <p className="text-xl font-mono font-black text-black">
                  ${stats.weightedRpm.toFixed(3)}
                </p>
                <p className="text-[10px] text-black/50 font-sans">
                  لكل 1,000 مشاهدة
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
