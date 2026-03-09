import React from "react";

const Homepage = () => {
  const whatsappLink =
    "https://wa.me/917428091729?text=Hello%20PosterBabu%20I%20need%20a%20poster";

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <img
          src="/logo.png"
          className="h-20 mx-auto mb-6"
          alt="PosterBabu"
        />

        <h1 className="text-5xl font-black mb-6">
          Professional Posters for Local Businesses
        </h1>

        <p className="text-lg text-slate-500 mb-6">
          Your Fast Creative Partner
        </p>

        <div className="flex justify-center gap-6 text-sm mb-10">

          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-bold">
            ⚡ Delivery in 15 minutes
          </span>

          <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-bold">
            💰 Posters starting at ₹49
          </span>

          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-bold">
            📱 Order via WhatsApp
          </span>

        </div>

        <a
          href={whatsappLink}
          target="_blank"
          className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition"
        >
          Order Poster on WhatsApp
        </a>

        <p className="mt-10 text-sm text-slate-400">
          Helping Local Businesses Grow
        </p>

      </div>
    </section>
  );
};

export default Homepage;