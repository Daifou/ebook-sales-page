import { Check, X, ShieldAlert } from 'lucide-react';

export default function ComparisonTable() {
  const comparisonRows = [
    {
      feature: 'Cognitive Science Basis',
      playbook: 'Rooted in Fitts\'s Law, Gestalt principles, and attention span economics.',
      youtube: 'Vague visual opinions, trends like "use neon button effects", and design lingo.',
      vetted: true,
    },
    {
      feature: 'Layout Systems',
      playbook: 'Strict grid layout rules mapping to Z and F reading cascades.',
      youtube: 'Random element placement with no empirical user navigation research.',
      vetted: true,
    },
    {
      feature: 'Actionability',
      playbook: 'Copy-paste Tailwind styles, Notion audit checklist sheets, and raw Figma files.',
      youtube: 'Passive video walkthroughs with no physical files, assets, or worksheets.',
      vetted: true,
    },
    {
      feature: 'Form & Checkout UX',
      playbook: 'Proven progressive disclosure formulas that mathematically cut checkout abandonment.',
      youtube: 'Standard generic input fields that trigger immediate user cognitive friction.',
      vetted: true,
    },
    {
      feature: 'Time Saved',
      playbook: '2 hours of reading to learn formulas refined over 8 years of elite SaaS work.',
      youtube: '150+ hours of scattered videos filled with sponsored pitches and outdated theory.',
      vetted: true,
    },
    {
      feature: 'Financial Return Guarantee',
      playbook: 'Pays for itself in minutes. Unconditional 30-day money-back refund rule.',
      youtube: 'Free to watch, but costs thousands of dollars in lost customer conversions.',
      vetted: false,
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium font-mono text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-3">
          <ShieldAlert className="w-3.5 h-3.5" /> SYSTEM COMPOSITIONS
        </span>
        <h3 className="font-display text-2xl md:text-4xl font-bold text-[#0A0A0A] tracking-tight">
          How This System Compares
        </h3>
        <p className="text-slate-500 text-sm md:text-base mt-2 max-w-xl mx-auto">
          We spent years analyzing conversion behavior so you don’t have to waste time sorting through scattered, unvetted Internet advice.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-150 bg-white shadow-xs">
        <table className="w-full border-collapse text-left text-xs md:text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-150">
              <th className="p-4 md:p-5 font-semibold text-slate-500 uppercase tracking-wider text-[10px]">
                Dimension
              </th>
              <th className="p-4 md:p-5 font-semibold text-slate-900 uppercase tracking-wider text-[10px] w-5/12 bg-blue-50/40">
                ⚡ Conversion by Design
              </th>
              <th className="p-4 md:p-5 font-semibold text-slate-500 uppercase tracking-wider text-[10px] w-5/12">
                Random YouTube / Medium Advice
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {comparisonRows.map((row, index) => (
              <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4 md:p-5 font-semibold text-slate-700">
                  {row.feature}
                </td>
                <td className="p-4 md:p-5 text-slate-900 bg-blue-50/10">
                  <div className="flex gap-2 items-start">
                    <span className="flex-shrink-0 w-4 h-4 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="font-medium">{row.playbook}</span>
                  </div>
                </td>
                <td className="p-4 md:p-5 text-slate-500">
                  <div className="flex gap-2 items-start">
                    <span className="flex-shrink-0 w-4 h-4 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mt-0.5">
                      <X className="w-3 h-3" />
                    </span>
                    <span>{row.youtube}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
