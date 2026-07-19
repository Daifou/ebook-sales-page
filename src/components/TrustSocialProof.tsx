import { useState, useMemo } from 'react';
import { testimonials } from '../data';
import { Star, MessageSquare } from 'lucide-react';

type FilterType = 'all' | 'founder' | 'designer' | 'marketer';

export default function TrustSocialProof() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTestimonials = useMemo(() => {
    if (filter === 'all') return testimonials;
    return testimonials.filter(t => t.tag === filter);
  }, [filter]);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium font-mono text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-3">
          <MessageSquare className="w-3.5 h-3.5" /> VERIFIED SOCIAL PROOF
        </span>
        <h3 className="font-display text-2xl md:text-4xl font-bold text-[#0A0A0A] tracking-tight">
          Vetted by Elite Product Creators
        </h3>
        <p className="text-slate-500 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Over 4,200 founders, designers, and developers use our systems daily to double their interface metrics.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
          {(['all', 'founder', 'designer', 'marketer'] as FilterType[]).map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer ${
                filter === tag
                  ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                  : 'bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300'
              }`}
            >
              {tag === 'all' && 'All Stories'}
              {tag === 'founder' && 'SaaS Founders'}
              {tag === 'designer' && 'Product Designers'}
              {tag === 'marketer' && 'Growth Marketers'}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            <div>
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 italic">
                “{testimonial.text}”
              </p>
            </div>

            <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover bg-slate-100 flex-shrink-0"
              />
              <div className="min-w-0">
                <h5 className="font-semibold text-xs md:text-sm text-slate-900 truncate">
                  {testimonial.name}
                </h5>
                <p className="text-[11px] text-slate-400 truncate">
                  {testimonial.role}, <span className="font-semibold text-slate-500">{testimonial.company}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
