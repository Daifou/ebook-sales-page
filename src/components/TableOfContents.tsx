import { useState } from 'react';

const chapters = [
  { id: 1, title: 'كيف تبني مصدر دخل من يوتيوب شورتس' },
  { id: 2, title: 'كيف يحوّل الناس المشاهدات إلى أرباح' },
  { id: 3, title: 'الاستراتيجيات السرية لجذب الجمهور الأمريكي' },
  { id: 4, title: 'كيف تصنع فيديوهات تحقق ملايين المشاهدات' },
  { id: 5, title: 'الأسرار التي لا يخبرك بها أحد' },
  { id: 6, title: 'كيف تحول القناة إلى آلة أرباح تلقائية' },
  { id: 7, title: 'الخطوات العملية للبدء من الصفر' },
  { id: 8, title: 'كيف توظف الذكاء الاصطناعي لتصنيع المحتوى' },
];

export default function TableOfContents() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pt-2">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="w-full text-center text-xs font-sans font-bold text-black underline underline-offset-4 decoration-1 decoration-black/40 hover:decoration-black transition-colors cursor-pointer"
        >
          اطلع على محتويات الكتاب
        </button>
      )}

      {open && (
        <div className="border-2 border-black rounded-none overflow-hidden bg-[#FDFDFD]">
          {/* Title bar */}
          <div className="bg-[#D2FE2E] border-b-2 border-black px-4 py-2.5">
            <h3 className="font-sans text-sm font-black text-black tracking-tight">
              محتويات الكتاب
            </h3>
            <p className="text-[9px] font-sans text-black/60 mt-0.5">
              8 فصول عملية مفصّلة
            </p>
          </div>

          {/* Chapters list */}
          <div className="divide-y divide-black/15">
            {chapters.map((ch, i) => (
              <div
                key={ch.id}
                className={`flex items-baseline gap-3 px-4 py-2.5 ${i >= 2 ? 'blur-[3px] select-none' : ''}`}
              >
                <span className="text-[10px] font-mono font-black text-black/40 shrink-0 w-4 text-left">
                  {ch.id}.
                </span>
                <span className="text-xs font-sans font-bold text-black leading-snug">
                  {ch.title}
                </span>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="border-t-2 border-black px-4 py-2 bg-black/5">
            <p className="text-[9px] font-sans text-black/50 text-center">
              اشترِ الكتاب لفتح جميع الفصول
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
