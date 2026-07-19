import { Benefit, Chapter, Testimonial, FAQItem, PricingPackage } from './types';

export const benefits: Benefit[] = [
  {
    id: 'b1',
    title: 'The Psychology of Friction',
    description: 'Deconstruct subliminal bounce triggers. Learn how to identify and eliminate the microscopic visual delays and misalignments that cause 68% of users to abandon checkouts.',
    metric: '-42%',
    metricLabel: 'Checkout Dropoff'
  },
  {
    id: 'b2',
    title: 'Scannability Systems',
    description: 'Most visitors read less than 20% of your copy. Apply the visual hierarchy grid used by Apple to guide readers directly to your value proposition and primary CTAs.',
    metric: '3.4x',
    metricLabel: 'Reading Engagement'
  },
  {
    id: 'b3',
    title: 'The Micro-Copy Multiplier',
    description: 'Simple, specific button adjustments that unlock significant lift. Swap out generic "Submit" actions for high-intent, cognitive-reassuring verbs that spark immediate action.',
    metric: '+27%',
    metricLabel: 'Click-Through Rate'
  },
  {
    id: 'b4',
    title: 'Cognitive Load Reduction',
    description: 'Learn how to present complex SaaS pricing and tier structures in simple layouts that prevent "choice paralysis" and naturally steer users toward your target option.',
    metric: '0.1s',
    metricLabel: 'Cognitive Match'
  }
];

export const chapters: Chapter[] = [
  {
    id: 'ch1',
    number: '01',
    title: 'Cognitive Friction & The Subconscious Bounce',
    tagline: 'Understand the biological limits of user attention and how bad alignment triggers the human survival reflex to escape.',
    pageCount: 38,
    readTime: '15 min read',
    takeaways: [
      'The 5-second attention rule: Why page load is only 10% of the friction equation.',
      'The alignment effect: How sub-pixel offsets trigger subconscious trust-deficits.',
      'Identifying attention-bleeding elements and replacing them with premium breathing room.'
    ],
    sampleText: 'Conversion is not about persuading people to buy. It is about removing the obstacles that prevent them from doing so. When an interface has misaligned buttons, varying borders, or cluttered color structures, the human brain expends metabolic energy trying to resolve the visual conflict. This metabolic tax creates a feeling of unease. The user does not say, "The borders are inconsistent." They say, "I do not trust this site," and they close the tab.'
  },
  {
    id: 'ch2',
    number: '02',
    title: 'The Apple Layout: Visual Scannability Architecture',
    tagline: 'How to structure screen priority to align with natural reading sweeps.',
    pageCount: 46,
    readTime: '22 min read',
    takeaways: [
      'The F-Sweep vs. The Z-Pattern: When to apply which layout based on offer complexity.',
      'Font-weight styling as visual navigation: Why bold is more powerful than any color accent.',
      'The Fitts\'s Law cheat sheet: Optimizing primary and secondary tap targets for mobile screens.'
    ],
    sampleText: 'SaaS giants do not write pages to be read; they write them to be scanned. A user scans in a visual cascade, looking for hooks. By grouping information into three distinct typographic tiers—the Hook (Display, high-weight), the Support (Body, light-weight), and the Trigger (CTA, high-contrast)—you dictate the scanning sequence. If your body copy competes with your headlines, you have split the user\'s attention, which increases cognitive friction and halves your chances of conversion.'
  },
  {
    id: 'ch3',
    number: '03',
    title: 'Form Architecture: Conversational Field Design',
    tagline: 'Building multi-step checkouts that feel like helpful human dialog rather than tax questionnaires.',
    pageCount: 52,
    readTime: '25 min read',
    takeaways: [
      'The "Progressive Disclosure" strategy: Minimizing initial input dread.',
      'Why inline error validation should be supportive, not critical.',
      'Pre-filling and autofocus secrets that cut input time by up to 50%.'
    ],
    sampleText: 'A form is a conversation, not an interrogation. Every field you add to a form decreases conversion by an average of 4%. But if you must collect data, you must offset the interaction cost. By splitting forms into logical, bite-sized steps using progressive disclosure, you leverage the commitment bias: once a user fills out step one, they are 80% more likely to finish the entire form than if they had seen the full list of fields on load.'
  },
  {
    id: 'ch4',
    number: '04',
    title: 'Dynamic Pricing UX & Tier Psychology',
    tagline: 'Structuring your offer grids so the premium choice becomes the mathematically obvious solution.',
    pageCount: 42,
    readTime: '18 min read',
    takeaways: [
      'The Decoy Pricing principle: Guiding users to high-tier software packages.',
      'Visual anchoring: Why your most expensive package must always be presented first.',
      'Eliminating checkout doubt by placing contextual trust-notes next to the credit card inputs.'
    ],
    sampleText: 'Value is entirely relative. A $100 product feels expensive next to a $20 product, but looks like a bargain next to a $500 product. This is called visual anchoring. When you design your pricing tables, the architecture of the tiers should leverage this comparison. High-converting pricing systems do not just list features; they visually elevate the target tier while using subtle, high-trust micro-copy to remove final conversion doubt.'
  },
  {
    id: 'ch5',
    number: '05',
    title: 'The Blueprint of Trust: Subtle Proof Systems',
    tagline: 'How to showcase social proof and client results without looking desperate or manipulative.',
    pageCount: 35,
    readTime: '14 min read',
    takeaways: [
      'Structuring authentic testimonials that focus on hurdles overcome, rather than generic praise.',
      'Why "No-Cookie Consent" and transparent, clean legal copy beats flashy "secure checkout" shields.',
      'Leveraging specific, objective stats over vague marketing hype.'
    ],
    sampleText: 'Modern buyers are highly sensitive to fake social proof. Generic testimonials like "This is awesome!" from "John D." no longer build trust; they breed suspicion. High-converting trust design utilizes the specificity framework. A testimonial must outline the initial pain, the exact interface change made, and the measurable outcome. Pairing this narrative with a real, high-resolution portrait and a verifiable company link creates an unshakeable bedrock of credibility.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Lin',
    role: 'Co-Founder & CEO',
    company: 'LinearFlow',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200',
    text: 'We spent months A/B testing our sign-up flow and got a modest 0.5% lift. After implementing Julian\'s rules on visual scannability and button micro-copy from Chapter 3, our signup conversion shot up by 4.2% in under 10 days. Absolutely incredible.',
    rating: 5,
    tag: 'founder'
  },
  {
    id: 't2',
    name: 'Marcus Aurel',
    role: 'Lead Growth Designer',
    company: 'PayVault',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    text: 'Most design resources focus strictly on "vibes" and aesthetics. This is the first digital playbook that treats typography, spacing, and forms as mathematical levers for revenue. The chapter on form progressive disclosure alone is worth 100x the price.',
    rating: 5,
    tag: 'designer'
  },
  {
    id: 't3',
    name: 'Sophia Vance',
    role: 'VP of Growth & CRO',
    company: 'SaaSify',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    text: 'We bought license keys for our entire product and marketing team. Having everyone aligned on cognitive load reduction means we no longer argue about button colors. We build based on conversion laws. Our trial-to-paid conversion is up 18%.',
    rating: 5,
    tag: 'marketer'
  },
  {
    id: 't4',
    name: 'Darian K.',
    role: 'Solo Developer',
    company: 'FormCraft.io',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    text: 'As an indie builder, design was always my weak spot. I followed the visual alignment grids and copy frameworks in Chapter 2 word-for-word. My app went from making $400/mo to over $3,100/mo without changing a single line of backend logic.',
    rating: 5,
    tag: 'founder'
  },
  {
    id: 't5',
    name: 'Elena Rostova',
    role: 'Head of Brand Interface',
    company: 'Vertex Digital',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200&h=200',
    text: 'A stunningly beautiful masterclass. Julian details why clean, minimalistic layouts sell better than heavily animated interfaces. If you want your website to look like Stripe and convert like Basecamp, get this guide.',
    rating: 5,
    tag: 'designer'
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'faq1',
    category: 'Format',
    question: 'What format does the book come in?',
    answer: 'You will receive three DRM-free formats immediately upon checkout: a beautifully styled, high-contrast print-ready PDF, a fully reflowable EPUB for Apple Books or Kindle, and access to our exclusive web-based reader.'
  },
  {
    id: 'faq2',
    category: 'Audience',
    question: 'Do I need to be a professional designer to use this playbook?',
    answer: 'Not at all. In fact, this guide was explicitly written for developers, product managers, and founders who want to design high-converting interfaces without spending 4 years at art school. It is packed with practical checklists and blueprints.'
  },
  {
    id: 'faq3',
    category: 'Content',
    question: 'Is this just a collection of generic tips like "use orange buttons"?',
    answer: 'No. We despise superficial advice. This playbook is rooted in human cognitive psychology, Fitts\'s Law, and empirical case studies from leading SaaS teams. You will understand *why* certain designs work, backed by spatial mathematics and cognitive load theory.'
  },
  {
    id: 'faq4',
    category: 'Guarantee',
    question: 'What is your refund policy?',
    answer: 'We offer a 100% "Zero Friction" money-back guarantee. If you apply the checklists from the book and do not see a noticeable increase in your sign-ups or checkouts within 30 days, simply reply to your receipt email and we will refund you instantly. No questionnaires, no hesitation.'
  },
  {
    id: 'faq5',
    category: 'Team License',
    question: 'Is there a team or corporate discount?',
    answer: 'Yes! The "Team Sync Bundle" includes 10 seats, full Notion audit checklists, and Figma file templates that you can instantly duplicate for your team\'s workflow. It saves you thousands in agency consultation fees.'
  }
];

export const packages: PricingPackage[] = [
  {
    id: 'pkg-pro',
    name: 'دخل بالدولار، من هاتفك، وأنت في الجزائر',
    price: 700,
    originalPrice: 1500,
    tagline: 'يوتيوب شورتس يشبه امتلاك أصل رقمي؛ تنشر الفيديو مرة، ويستمر في جذب المشاهدات والأرباح مع الوقت.',
    features: [
      'ابدأ في كسب أول دولاراتك خلال 30 يوماً.',
      'دخل بالدولار أو اليورو.',
      'ابدأ بهاتفك فقط.',
      'اعمل من منزلك بساعة واحدة يومياً وفي أي مكان',
      'دخل يستمر حتى وأنت نائم.',
      'كل فيديو تنشره هو أصل رقمي يعمل لصالحك بعد نشره.',
      'استلم أموالك بالدولار وأنت في الجزائر.',
      '700 دج فقط يفتح لك مصدر دخل يستمر لسنوات'
    ],
    popular: true,
    savings: 'وفّر 800 دج'
  }
];
