import React, { useState } from 'react';
import { packages } from '../data';
import { PricingPackage } from '../types';
import { X, Lock, CheckCircle, ArrowRight, ShieldCheck, Download, Copy, Check, Sparkles, CreditCard } from 'lucide-react';

interface CheckoutSimulatorProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackageId?: string;
}

export default function CheckoutSimulator({ isOpen, onClose, selectedPackageId }: CheckoutSimulatorProps) {
  const [activePkgId, setActivePkgId] = useState<string>(selectedPackageId || 'pkg-pro');
  const [email, setEmail] = useState<string>('');
  const [cardName, setCardName] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardExpiry, setCardExpiry] = useState<string>('');
  const [cardCVC, setCardCVC] = useState<string>('');
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Sync state with parent props dynamically
  React.useEffect(() => {
    if (selectedPackageId) {
      setActivePkgId(selectedPackageId);
    }
  }, [selectedPackageId]);

  const activePackage = packages.find(pkg => pkg.id === activePkgId) || packages[0];

  if (!isOpen) return null;

  // Format Card Number
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 16) value = value.slice(0, 16);
    const formatted = value.match(/.{1,4}/g)?.join(' ') || value;
    setCardNumber(formatted);
  };

  // Format Card Expiry
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    setCardExpiry(value);
  };

  // Format CVC
  const handleCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setCardCVC(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText('CBD-8893-X921-PL08');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300">
      {/* Container */}
      <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden relative border border-slate-100 flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
          aria-label="Close checkout modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* SUCCESS PANEL */}
        {isSuccess ? (
          <div className="w-full p-8 md:p-12 text-center flex flex-col items-center justify-center bg-slate-50">
            <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600 mb-6 animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>
            
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold font-mono text-emerald-700 bg-emerald-50 rounded-full border border-emerald-100 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> CHECKOUT COMPLETED SIMULATION
            </span>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Welcome to the Conversion Elite
            </h3>
            <p className="text-slate-500 text-sm max-w-lg mt-3">
              Your transaction was simulated successfully! If this was a live client environment, your purchase would be logged, payment finalized via Stripe, and your direct files dispatched automatically.
            </p>

            {/* Simulated Receipt details */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-5 mt-8 max-w-md w-full text-left space-y-4 shadow-sm">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <div>
                  <p className="text-xs text-slate-400 uppercase font-mono font-bold">Product</p>
                  <p className="text-sm font-semibold text-slate-800">{activePackage.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400 uppercase font-mono font-bold">Total</p>
                  <p className="text-sm font-mono font-bold text-slate-900">${activePackage.price}.00</p>
                </div>
              </div>

              {/* License key */}
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-mono font-bold mb-1">Your Access License Key</p>
                <div className="flex items-center bg-slate-50 border border-slate-100 rounded-lg p-2.5 justify-between">
                  <code className="text-xs font-mono font-semibold text-slate-800">CBD-8893-X921-PL08</code>
                  <button
                    onClick={handleCopyKey}
                    className="p-1 rounded-md text-slate-400 hover:text-slate-600 transition-colors bg-white border border-slate-200 cursor-pointer"
                    title="Copy License Key"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Assets list */}
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase font-mono font-bold">Download Your Files Now</p>
                
                <div className="space-y-1.5 text-xs text-slate-700">
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); alert('Simulated Download: Conversion_by_Design_eBook.pdf initiated!'); }}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors"
                  >
                    <span className="flex items-center gap-2"><Download className="w-3.5 h-3.5 text-blue-600" /> Complete Guide PDF & EPUB (215 pages)</span>
                    <span className="text-[10px] font-mono text-slate-400">14.8 MB</span>
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-8 px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors cursor-pointer shadow-sm"
            >
              Back to Landing Page
            </button>
          </div>
        ) : (
          <>
            {/* Left Column: Order Summary */}
            <div className="w-full md:w-5/12 bg-slate-50 p-6 md:p-8 flex flex-col justify-between border-r border-slate-100 overflow-y-auto">
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-6">
                  Order Summary
                </h4>

                {/* Package selection buttons */}
                <div className="space-y-3 mb-6">
                  {packages.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setActivePkgId(pkg.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex justify-between items-start ${
                        activePkgId === pkg.id
                          ? 'bg-white border-blue-600 ring-1 ring-blue-600 shadow-sm'
                          : 'bg-slate-100/50 hover:bg-slate-100 border-slate-100 text-slate-600'
                      }`}
                    >
                      <div className="pr-2">
                        <p className={`font-semibold text-xs md:text-sm ${activePkgId === pkg.id ? 'text-slate-900' : 'text-slate-700'}`}>
                          {pkg.name}
                        </p>
                        <p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                          {pkg.tagline}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="font-mono font-bold text-slate-900 block text-xs md:text-sm">
                          ${pkg.price}
                        </span>
                        <span className="text-[9px] line-through text-slate-400 block font-mono">
                          ${pkg.originalPrice}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="bg-white rounded-xl p-4 border border-slate-200/60 shadow-xs space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Selected Product</span>
                    <span className="font-medium text-slate-800">{activePackage.name}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Simulated VAT (0%)</span>
                    <span className="font-mono text-slate-800">$0.00</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-blue-600 font-medium">
                    <span>Discount / Savings</span>
                    <span>{activePackage.savings}</span>
                  </div>
                  <div className="border-t border-slate-100 pt-3 flex justify-between items-center">
                    <span className="text-xs font-semibold text-slate-700">Total Due Today</span>
                    <span className="text-lg font-mono font-bold text-slate-900">${activePackage.price}.00</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 hidden md:block">
                <div className="flex items-center gap-2.5 text-slate-400 text-[10px]">
                  <Lock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>256-bit Secure simulated transaction. No actual funds are charged or processed.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Simulated Stripe Form */}
            <div className="w-full md:w-7/12 p-6 md:p-8 overflow-y-auto">
              <div className="flex items-center gap-1.5 text-xs text-blue-700 font-semibold mb-4 bg-blue-50 rounded-full px-3 py-1 border border-blue-100 w-fit">
                <ShieldCheck className="w-3.5 h-3.5" /> Simulated Sandboxed Environment
              </div>

              <h3 className="font-display text-xl font-bold text-slate-900 mb-1">
                Secure Simulated Billing
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in any simulated credentials to complete your test checkout.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email address */}
                <div>
                  <label htmlFor="checkout-email" className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    id="checkout-email"
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs md:text-sm focus:outline-hidden focus:border-blue-600 transition-colors"
                  />
                  <p className="text-[10px] text-slate-400 mt-1 leading-normal">
                    This is where your simulated download files and access credentials will be delivered.
                  </p>
                </div>

                {/* Card Name */}
                <div>
                  <label htmlFor="checkout-name" className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Cardholder Name
                  </label>
                  <input
                    id="checkout-name"
                    type="text"
                    required
                    placeholder="Julian Vane"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs md:text-sm focus:outline-hidden focus:border-blue-600 transition-colors"
                  />
                </div>

                {/* Card Number */}
                <div>
                  <label htmlFor="checkout-card" className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Card Information
                  </label>
                  <div className="relative">
                    <input
                      id="checkout-card"
                      type="text"
                      required
                      placeholder="4242 4242 4242 4242"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      className="w-full p-2.5 pl-9 bg-white border border-slate-200 rounded-xl text-xs md:text-sm focus:outline-hidden focus:border-blue-600 transition-colors font-mono"
                    />
                    <CreditCard className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  </div>
                </div>

                {/* Expiry and CVC */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="checkout-expiry" className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      Expiry Date
                    </label>
                    <input
                      id="checkout-expiry"
                      type="text"
                      required
                      placeholder="MM/YY"
                      value={cardExpiry}
                      onChange={handleExpiryChange}
                      className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs md:text-sm focus:outline-hidden focus:border-blue-600 transition-colors font-mono text-center"
                    />
                  </div>
                  <div>
                    <label htmlFor="checkout-cvc" className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      CVC
                    </label>
                    <input
                      id="checkout-cvc"
                      type="password"
                      required
                      placeholder="•••"
                      maxLength={4}
                      value={cardCVC}
                      onChange={handleCVCChange}
                      className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs md:text-sm focus:outline-hidden focus:border-blue-600 transition-colors font-mono text-center"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs md:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:bg-slate-300 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Simulating Payment...
                      </>
                    ) : (
                      <>
                        Pay ${activePackage.price}.00 & Download Playbook <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-6 flex justify-center items-center gap-6 text-slate-400 text-[10px] border-t border-slate-100 pt-4">
                <span>✓ Lifetime Access</span>
                <span>✓ Money-back Guarantee</span>
                <span>✓ DRM-free Downloads</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
