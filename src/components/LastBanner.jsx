import React from 'react'

const LastBanner = () => {
  return (
    <section className="py-20 text-center bg-linear-to-l from-[#9514FA] to-[#4F39F6]">
      <div className="w-full mx-auto px-6 lg:px-20 flex flex-col items-center gap-6">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-base text-white/80 max-w-xl">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <a
            href="#products"
            className="px-6 py-3 rounded-full text-sm font-bold bg-white text-purple-700 hover:opacity-90 transition-all shadow-lg"
          >
            Explore Products
          </a>
          <a
            href="#products"
            className="px-6 py-3 rounded-full text-sm border-2 border-white font-bold text-white hover:bg-white hover:text-purple-700 transition-all"
          >
            View Pricing
          </a>
        </div>

        <p className="text-xs text-white/60 mt-2">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}

export default LastBanner