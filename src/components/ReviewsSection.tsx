import { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const allReviews = [
  {
    id: 1,
    name: 'أمير بن عمر',
    avatar: 'أ',
    avatarBg: '#6366f1',
    text: 'لم أتوقع نتائج بهذه السرعة. بعد شهر واحد من تطبيق الخطة، وصلت قناتي إلى 4,000 مشاهدة يومياً.',
    stars: 5,
    daysAgo: 2,
  },
  {
    id: 2,
    name: 'سارة بلعيد',
    avatar: 'س',
    avatarBg: '#ec4899',
    text: 'أفضل استثمار قمت به في حياتي. الفيديو الأول وصل إلى 220,000 مشاهدة في أسبوع واحد.',
    stars: 5,
    daysAgo: 5,
  },
  {
    id: 3,
    name: 'يوسف مسعود',
    avatar: 'ي',
    avatarBg: '#0ea5e9',
    text: 'الدليل غيّر نظرتي تماماً. الآن لدي مصدر دخل إضافي من هاتفي وأنا في الجزائر.',
    stars: 5,
    daysAgo: 8,
  },
  {
    id: 4,
    name: 'ليلى حمادي',
    avatar: 'ل',
    avatarBg: '#f59e0b',
    text: 'بدأت بهاتف عادي. الخطوات واضحة وعملية. في الشهر الثاني بدأت أرى أرباحاً حقيقية.',
    stars: 5,
    daysAgo: 12,
  },
  {
    id: 5,
    name: 'رامي بوطالب',
    avatar: 'ر',
    avatarBg: '#10b981',
    text: 'استراتيجية جذب الجمهور الأمريكي كانت مفتاح النجاح. تضاعفت أرباحي ثلاث مرات.',
    stars: 5,
    daysAgo: 15,
  },
  {
    id: 6,
    name: 'نور الدين قاسم',
    avatar: 'ن',
    avatarBg: '#8b5cf6',
    text: 'اشتريت الدليل وأنا لا أعرف شيئاً. الآن لدي قناة بـ 12,000 متابع وأكسب منها كل شهر.',
    stars: 5,
    daysAgo: 18,
  },
  {
    id: 7,
    name: 'مريم بوزيد',
    avatar: 'م',
    avatarBg: '#f43f5e',
    text: 'أفضل محتوى أنفقت عليه أموالي. كل فيديو يجلب لي مشاهدات وأرباحاً بشكل تلقائي.',
    stars: 5,
    daysAgo: 20,
  },
  {
    id: 8,
    name: 'عبد الرحمن كريم',
    avatar: 'ع',
    avatarBg: '#06b6d4',
    text: 'بدأت من الصفر وأصبح لدي 8,000 متابع الآن. الخطة عملية جداً وواضحة.',
    stars: 5,
    daysAgo: 23,
  },
];

function getDateLabel(daysAgo: number): string {
  const now = new Date();
  const d = new Date(now);
  d.setDate(d.getDate() - daysAgo);
  const months = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

const arcConfig = [
  { rotate: -8,  translateY: 18, marginLeft: 8  },
  { rotate: -4,  translateY: 6,  marginLeft: -12 },
  { rotate: -1,  translateY: 0,  marginLeft: -12 },
  { rotate: 1,   translateY: 0,  marginLeft: -12 },
  { rotate: 4,   translateY: 6,  marginLeft: -12 },
  { rotate: 8,   translateY: 18, marginLeft: 8  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-px">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-2.5 h-2.5 fill-black text-black" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [page, setPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const visibleCount = useRef(5).current;
  const totalPages = Math.ceil(allReviews.length / visibleCount);

  const visibleReviews = allReviews.slice(page * visibleCount, page * visibleCount + visibleCount);

  const prev = () => setPage((p) => Math.max(p - 1, 0));
  const next = () => setPage((p) => Math.min(p + 1, totalPages - 1));

  useEffect(() => {
    const t = setInterval(() => setPage((p) => (p + 1) % totalPages), 2000);
    return () => clearInterval(t);
  }, [totalPages]);

  return (
    <section
      dir="rtl"
      className="py-10 md:py-16 border-b border-neutral-200 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="font-sans text-xl md:text-2xl font-black text-black tracking-tight">
            ماذا قالوا عن الدليل
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            تجارب حقيقية من أشخاص بدأوا من الصفر
          </p>
        </div>

        {/* Half-circle arc layout */}
        <div
          ref={containerRef}
          className="flex justify-center overflow-hidden pb-8 pt-6 px-4"
        >
          {visibleReviews.map((review, i) => {
            const cfg = arcConfig[i % arcConfig.length];
            return (
              <div
                key={review.id}
                className="shrink-0 w-[200px] md:w-[230px] bg-white border border-black rounded-xl p-4 md:p-5 flex flex-col gap-2 shadow-[3px_3px_0_#000]"
                style={{
                  transform: `rotate(${cfg.rotate}deg) translateY(${cfg.translateY}px)`,
                  marginLeft: i === 0 ? 0 : `${cfg.marginLeft}px`,
                  zIndex: 5 - i,
                }}
              >
                <StarRating count={review.stars} />
                <p className="text-[11px] md:text-[12px] text-neutral-700 leading-relaxed">
                  {review.text}
                </p>
                <div className="flex items-center gap-2 mt-auto pt-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-black font-bold text-[10px] shrink-0 bg-white border border-black"
                >
                    {review.avatar}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-neutral-800 leading-tight">{review.name}</p>
                    <p className="text-[9px] text-neutral-400 leading-tight">{getDateLabel(review.daysAgo)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={prev}
            disabled={page === 0}
            className="w-9 h-9 rounded-full border border-black flex items-center justify-center bg-white disabled:opacity-30 cursor-pointer hover:bg-black hover:text-white transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono font-bold text-neutral-500">
            {page + 1} / {totalPages}
          </span>
          <button
            onClick={next}
            disabled={page === totalPages - 1}
            className="w-9 h-9 rounded-full border border-black flex items-center justify-center bg-white disabled:opacity-30 cursor-pointer hover:bg-black hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
