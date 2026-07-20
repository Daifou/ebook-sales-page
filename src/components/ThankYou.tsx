import { ArrowRight } from 'lucide-react';

export default function ThankYou() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#FDFDFD] font-sans text-[#0A0A0A] flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 99px, #f0f0f0 99px, #f0f0f0 100px), repeating-linear-gradient(90deg, transparent, transparent 99px, #f0f0f0 99px, #f0f0f0 100px)',
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="max-w-sm w-full bg-[#F7F7F4] border border-black overflow-hidden relative z-10">
        <div className="h-10 bg-[#D2FE2E] flex items-center justify-center px-4 border-b border-black">
          <div className="w-5 h-5 bg-black" aria-hidden="true" />
        </div>

        <div className="p-5 md:p-8 flex flex-col items-center justify-center text-center space-y-5">
          <h1 className="font-sans text-lg md:text-xl font-black tracking-tighter leading-[1.2] text-black">
            قرارك كان صحيح
          </h1>

          <a
            href="/ebook-shorts-guide.pdf"
            download="دليل_يوتيوب_شورتس.pdf"
            className="btn-3d-lime w-full px-6 py-3 text-black font-sans font-black text-sm md:text-base tracking-wide flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D2FE2E]/70 no-underline"
          >
            <span>تحميل دليل يوتيوب شورتس</span>
            <ArrowRight className="w-4 h-4 rotate-180" />
          </a>

          <p className="text-[8px] font-sans tracking-wide text-neutral-400">
            * وصول آمن / تحميل مباشر بدون قيود
          </p>
        </div>
      </div>
    </div>
  );
}
