// pages/about.tsx or pages/about.jsx

import React from "react";

const About = () => {
  return (
    <main className="mx-auto px-6 py-16 md:px-10 xl:px-32 2xl:px-44 max-w-8xl">
      <h1 className="text-xl font-bold mb-6">About StayCation</h1>
      <p className="mb-4 text-sm leading-relaxed text-gray-800">
        Welcome to StayCation. We have been dedicated to providing quality
        service since day one. Our commitment to excellence and customer
        satisfaction has never wavered.
      </p>
      <p className="mb-4 text-sm leading-relaxed text-gray-800">
        Our team consists of experienced professionals who value traditional
        principles and time-tested methods. We believe that hard work, integrity,
        and attention to detail are the keys to success.
      </p>
      <p className="mb-4 text-sm leading-relaxed text-gray-800">
        Over the years, we have served thousands of customers with consistent
        results. We strive to maintain the standards that have made us reliable
        and respected in our field.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">Our Mission</h2>
      <p className="mb-4 text-sm leading-relaxed text-gray-800">
        To provide high-quality hospitality services while upholding
        traditional values that foster trust and long-term relationships.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">Our Vision</h2>
      <p className="mb-4 text-sm leading-relaxed text-gray-800">
        To be the trusted name in the hospitality industry, known for quality,
        professionalism, and respect for the craft.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">Contact Us</h2>
      <p className="mb-4 text-sm leading-relaxed text-gray-800">
        If you have any questions or want to know more, please reach out
        via email at{" "}
        <a href="mailto:info@staycation.com" className="text-blue-600 underline">
          info@staycation.com
        </a>.
      </p>
    </main>
  );
};

export default About;

