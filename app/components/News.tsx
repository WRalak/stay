"use client";

import { useState } from "react";

export default function HotelNewsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle API call here
    alert(`Thanks for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-4 rounded-2xl w-full max-w-5xl mx-auto my-10">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold">Subscribe to Our Newsletter</h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base max-w-xl mx-auto">
          Be the first to know about special offers, exclusive packages, and events at our hotel.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 placeholder:text-gray-400 text-white outline-none"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 transition-colors px-6 py-3 rounded-md font-medium text-white"
        >
          Subscribe
        </button>
      </form>

      <p className="text-xs text-center text-gray-500 mt-6">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </section>
  );
}
