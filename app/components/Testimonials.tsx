// components/Testimonials.tsx
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    name: "Donald Jackman",
    title: "Content Creator",
    image: "/sid.jpg", // put your own image here
    text: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: "Richard Nelson",
    title: "Instagram Influencer",
    image: "/sid.jpg", // put your own image here
    text: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: "Mikel Smith",
    title: "Web Developer",
    image: "/sid.jpg", // use your image here
    text: "Imagify has helped me optimize all media on my site without losing quality. It's a must-have for any developer.",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        width="18"
        height="18"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
          fill="#FF532E"
        />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ name, title, image, text }: any) => (
  <div className="w-full sm:w-80 border border-gray-300 pb-6 rounded-lg bg-white shadow-md relative mt-16">
    <div className="flex flex-col items-center px-5 py-4 relative">
      <div className="absolute -top-14">
        <Image
          src={image}
          width={96}
          height={96}
          alt={name}
          className="rounded-full object-cover"
        />
      </div>
      <div className="pt-12 text-center">
        <h1 className="text-lg font-medium text-gray-800">{name}</h1>
        <p className="text-gray-600">{title}</p>
      </div>
    </div>
    <p className="text-gray-500 px-6 text-center">{text}</p>
    <div className="flex justify-center pt-4">
      <StarRating />
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
          What Our Users Say
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
