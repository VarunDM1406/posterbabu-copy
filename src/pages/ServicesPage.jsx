import React from "react";

const ServicesPage = () => (
  <section className="py-16 px-4">
    <div className="max-w-6xl mx-auto">

      <div className="text-center mb-16">

        <h2 className="text-4xl font-black mb-4">
          What We Design for You
        </h2>

        <div className="flex justify-center mb-6">

          <div className="relative group">

            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-full blur opacity-60 animate-pulse"></div>

            <div className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              ⚡ Posters starting at just ₹49
            </div>

          </div>

        </div>

        <p className="text-slate-500 max-w-xl mx-auto">
          From street banners to viral social media posts, we handle every visual need of your business.
        </p>

      </div>

    </div>
  </section>
);

export default ServicesPage;