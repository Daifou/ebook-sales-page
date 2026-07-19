import { useState } from 'react';
import { chapters } from '../data';
import { Chapter } from '../types';
import { BookOpen, Check, FileText, Clock } from 'lucide-react';

export default function ChapterExplorer() {
  const [activeChapterId, setActiveChapterId] = useState<string>('ch1');

  const activeChapter = chapters.find(ch => ch.id === activeChapterId) || chapters[0];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium font-mono text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-3">
          <BookOpen className="w-3.5 h-3.5" /> INSIDE THE BLUEPRINT
        </span>
        <h3 className="font-display text-2xl md:text-4xl font-bold text-[#0A0A0A] tracking-tight">
          Explore the Chapter Outlines
        </h3>
        <p className="text-slate-500 text-sm md:text-base mt-2 max-w-xl mx-auto">
          No fluff. No high-level theories. Click on any chapter to read its specific takeaways and raw excerpt.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Chapter list / Navigation */}
        <div className="lg:col-span-5 space-y-3">
          {chapters.map((chapter) => {
            const isActive = chapter.id === activeChapterId;
            return (
              <button
                key={chapter.id}
                onClick={() => setActiveChapterId(chapter.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex gap-4 items-start ${
                  isActive
                    ? 'bg-neutral-900 border-neutral-900 text-white shadow-sm'
                    : 'bg-white border-slate-100 hover:border-slate-300 text-slate-700'
                }`}
              >
                <span className={`text-xs font-mono font-bold px-2 py-1 rounded-md ${
                  isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {chapter.number}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm leading-tight tracking-tight">
                    {chapter.title}
                  </h4>
                  <div className="flex gap-3 items-center mt-2">
                    <span className={`inline-flex items-center gap-1 text-[11px] font-mono ${
                      isActive ? 'text-slate-300' : 'text-slate-400'
                    }`}>
                      <FileText className="w-3 h-3" /> {chapter.pageCount} pages
                    </span>
                    <span className={`inline-flex items-center gap-1 text-[11px] font-mono ${
                      isActive ? 'text-slate-300' : 'text-slate-400'
                    }`}>
                      <Clock className="w-3 h-3" /> {chapter.readTime}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Selected Chapter Preview */}
        <div className="lg:col-span-7 bg-[#FAFAFA] border border-neutral-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <span className="text-xs font-mono font-bold text-blue-600 tracking-widest uppercase">
                Chapter {activeChapter.number} Insights
              </span>
              <span className="text-xs font-mono text-slate-400">
                {activeChapter.pageCount} pages • {activeChapter.readTime}
              </span>
            </div>

            <h4 className="font-display text-xl font-bold text-slate-900 leading-tight">
              {activeChapter.title}
            </h4>
            <p className="text-slate-500 text-xs md:text-sm mt-1">
              {activeChapter.tagline}
            </p>

            {/* Takeaways list */}
            <div className="mt-6 space-y-3">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Core Deliverables:
              </p>
              <ul className="space-y-2.5">
                {activeChapter.takeaways.map((takeaway, index) => (
                  <li key={index} className="flex gap-2.5 items-start text-xs md:text-sm text-slate-700 leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center text-blue-600 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Excerpt Simulator */}
            <div className="mt-8">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Raw Manuscript Preview:
              </p>
              <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-xs relative overflow-hidden max-h-[160px]">
                <p className="font-serif text-slate-800 text-xs md:text-sm leading-relaxed italic text-justify">
                  “{activeChapter.sampleText}”
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-[11px] text-slate-400 leading-normal max-w-sm">
              Each chapter contains ready-to-copy code templates and checklist audits.
            </p>
            <a
              href="#pricing-section"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-full transition-colors shadow-xs uppercase tracking-wider"
            >
              Get Complete Playbook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
