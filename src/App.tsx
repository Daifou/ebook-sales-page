import { useState, useMemo, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Check, Star, ArrowRight } from 'lucide-react';

import ConversionCalculator from './components/ConversionCalculator';
import ReviewsSection from './components/ReviewsSection';
import ThankYou from './components/ThankYou';
import { packages } from './data';
import img1 from './assets/images/image_product.png';
import img2 from './assets/images/product image 4.png';
import img3 from './assets/images/product image 3.png';

function LandingPage() {
  const [imgIndex, setImgIndex] = useState(0);
  const [showSticky, setShowSticky] = useState(true);
  const images = [img2, img1, img3];
  const productRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setImgIndex((i) => (i + 1) % images.length), 2000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const el = productRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const [loading, setLoading] = useState(false);
  const activePackage = useMemo(() => packages[0], []);

  const handleOpenCheckout = () => {
    window.location.href = 'https://sofizpay.com/create-payment-link/?account=GCXLJJ36YWR7HH5NSGENKE62UEJ3ZQ5V6QJTA3RQNPAK5E2XURYA4O2S&amount=700&memo=&return_url=https%3A%2F%2Ffaydbatma.shop%2Fthankyou';
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#FDFDFD] font-sans text-[#0A0A0A] selection:bg-black selection:text-[#D2FE2E] pb-24 md:pb-28">
      <main className="relative py-2 md:py-4 px-4 md:px-6 max-w-2xl mx-auto space-y-3">
        <section className="w-full max-w-xl mx-auto bg-[#F7F7F4] border border-black overflow-hidden rounded-none">
          <div className="h-12 md:h-14 bg-[#D2FE2E] flex items-center justify-between px-5 md:px-7 border-b border-black">
            <div className="w-7 h-7 bg-black" aria-hidden="true" />
          </div>

          <div className="px-5 md:px-7 pt-5 pb-6 space-y-5">
            <h1 className="font-sans text-[clamp(2.2rem,8.5vw,3.75rem)] font-black tracking-tighter leading-[1.1] text-black w-full text-right antialiased">
              دخل بالدولار،
              <br />
              من هاتفك
              <br />
              وأنت في الجزائر
            </h1>

            <div className="w-full aspect-square bg-neutral-200 overflow-hidden rounded-2xl">
              <img
                key={imgIndex}
                src={images[imgIndex]}
                alt="دخل بالدولار من هاتفك وأنت في الجزائر"
                className="w-full h-full object-cover object-center block"
                style={{ animation: 'fadeIn 0.4s ease-in-out' }}
              />
            </div>
            <div className="flex justify-center gap-1.5 -mt-2">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === imgIndex ? 'bg-black w-3' : 'bg-neutral-300'}`}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="space-y-8">
          <p className="text-[#000000] font-sans text-base md:text-lg tracking-wide leading-relaxed font-bold">
            لا نظريات معقدة، ولا وعود خيالية. خطة واضحة تقودك خطوة بخطوة لبناء قناة يوتيوب شورتس ناجحة، دون تضييع الوقت في التجربة والخطأ.
          </p>

          <div ref={productRef} className="border border-black rounded-none bg-white p-6 md:p-8 space-y-5">
            <div className="pb-3.5 border-b border-black -mx-6 md:-mx-8 px-6 md:px-8">
              <div className="flex flex-row items-center justify-between flex-wrap gap-x-4 gap-y-2">
                <div className="space-y-0.5">
                  <h2 className="font-sans text-base md:text-lg font-black tracking-tight text-[#0A0A0A]">
                    {activePackage.name}
                  </h2>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-black text-black" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider">(194)</span>
                  </div>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-sans text-xl md:text-2xl font-black text-black">
                    {activePackage.price} دج
                  </span>
                  <span className="text-[10px] font-sans font-bold text-neutral-800 bg-[#D2FE2E] px-1.5 py-0.5 border border-black tracking-wider">
                    {activePackage.savings}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[#000000] text-base md:text-lg leading-relaxed font-sans font-bold">
              يوتيوب شورتس يشبه امتلاك أصل رقمي؛ تنشر الفيديو مرة، ويستمر في جذب المشاهدات والأرباح مع الوقت.
            </p>

            <div className="space-y-3 pb-4 border-b border-black -mx-6 md:-mx-8 px-6 md:px-8">
              <span className="font-sans font-black text-sm md:text-base tracking-wide text-neutral-950 block">
                لماذا هذا النظام مناسب لك:
              </span>
              <ul className="space-y-3 text-sm md:text-base text-[#000000] font-bold">
                {activePackage.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 items-center">
                    <span className="flex-shrink-0 w-5 h-5 bg-[#D2FE2E] text-black border border-black rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[4.5]" />
                    </span>
                    <span className="leading-snug text-[#000000] font-bold">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-1">
              <button
                onClick={handleOpenCheckout}
                disabled={loading}
                className="btn-3d-lime w-full py-4 md:py-4.5 text-black font-sans font-black text-lg md:text-xl tracking-wide flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D2FE2E]/70 disabled:opacity-50"
              >
                <span>اشترِ الدليل الآن – 700 دج</span>
                <ArrowRight className="w-5.5 h-5.5 rotate-180" />
              </button>
            </div>

            <div className="pt-1 flex flex-col items-center justify-center text-center">
              <span className="text-[9px] font-sans tracking-wide text-neutral-400">
                * وصول آمن / تحميل مباشر بدون قيود
              </span>
            </div>
          </div>
        </div>
      </main>

      <div className="w-full bg-black text-white py-3 overflow-hidden border-y border-black flex select-none">
        <div className="animate-marquee flex gap-4 text-[11px] font-sans font-bold tracking-wide min-w-full">
          {(() => {
            const items = [
              'دخل بالدولار من هاتفك',
              '✦ خطة واضحة بدون تعقيد',
              'ابدأ من الجزائر',
              '✦ يوتيوب شورتس كأصل رقمي',
              'لا تضيع وقتك في التجربة والخطأ',
              '✦ فيديوهات تعمل لصالحك',
              'أرباح حقيقية بالدولار',
              '✦ دعم مستمر ومتابعة',
            ];
            return [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items].map((text, i) => (
              <span key={i} className="shrink-0">{text}</span>
            ));
          })()}
        </div>
      </div>

      <section id="calculator" className="py-16 md:py-24 px-4 bg-white border-b border-neutral-200">
        <ConversionCalculator />
      </section>

      <ReviewsSection />

      <footer className="bg-white py-4 px-6 text-xs text-neutral-400 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto flex flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 bg-black" aria-hidden="true" />
            <span className="font-sans text-neutral-800 text-[9px] tracking-wide font-bold">
              فيض بطمة
            </span>
          </div>

          <p className="text-[10px] font-light">
            © {new Date().getFullYear()} فيض بطمة. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>

      <div className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-black transition-transform duration-300 ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="max-w-5xl mx-auto w-full flex items-center justify-between px-6 md:px-8 py-3">
          <span className="font-sans text-2xl md:text-3xl font-black text-black tracking-tighter">
            {activePackage.price} دج
          </span>
          <button
            onClick={handleOpenCheckout}
            disabled={loading}
            className="font-sans font-black text-sm md:text-base tracking-wider text-black uppercase cursor-pointer disabled:opacity-50"
          >
            {loading ? 'جاري التحويل...' : 'احصل على الكتاب'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/thankyou" element={<ThankYou />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}
