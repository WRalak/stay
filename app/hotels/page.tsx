'use client';

import { useState } from "react";
import Link from "next/link";
import rooms from "../data/rooms"; // assuming data now includes county info as 'location'

export default function Hotels() {
  const [filterCounty, setFilterCounty] = useState("all");
  const [maxPrice, setMaxPrice] = useState("");

  // Filter hotels based on selected county and max price
  const filteredHotels = rooms.filter(hotel => {
    const matchesCounty = filterCounty === "all" || hotel.location === filterCounty;
    const matchesPrice = maxPrice === "" || hotel.pricePerNight <= Number(maxPrice);
    return matchesCounty && matchesPrice;
  });

  // Get unique counties for the dropdown
  const counties = ["all", ...new Set(rooms.map(hotel => hotel.location))];

  return (
    <main className="container mx-auto py-16 px-6 md:px-10 xl:px-32 2xl:px-44">
      <h1 className="text-2xl font-bold mb-3 text-center md:text-left">Hotels in Kenya</h1>
      <p className="text-[13px]">
        Explore the best hotel deals across counties in Kenya. Filter by county and price to find your ideal stay.
      </p>

      {/* Filters */}
      <div className="flex flex-col py-6 sm:flex-row gap-4 mb-10 items-center justify-center md:justify-start">
        <select
          value={filterCounty}
          onChange={e => setFilterCounty(e.target.value)}
          className="border rounded px-3 py-2"
        >
          {counties.map(county => (
            <option key={county} value={county}>
              {county === "all" ? "All Counties" : county}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
          className="border rounded px-3 py-2 w-32"
          min="0"
        />
      </div>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-8">
        {filteredHotels.length === 0 ? (
          <p className="col-span-full text-center text-gray-600">No hotels match your criteria.</p>
        ) : (
          filteredHotels.map(hotel => (
            <Link
              key={hotel.id}
              href={`/rooms/${hotel.id}`}
              className="block rounded-lg overflow-hidden"
            >
              <img
                src={hotel.imageUrl}
                alt={hotel.hotelName}
                className="w-full h-48 object-cover"
              />
              <div className="p-1 bg-white">
                <h2 className="font-semibold text-lg mb-1">{hotel.hotelName}</h2>
                <p className="text-sm text-gray-500">{hotel.location}</p>
                <p className="text-gray-700">Ksh {hotel.pricePerNight} / night</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}

