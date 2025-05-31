'use client'

import { useState } from "react";
import Link from "next/link";
import rooms from "../data/rooms";

export default function Rooms() {
  const [filterType, setFilterType] = useState("all");
  const [maxPrice, setMaxPrice] = useState("");

  // Filter rooms based on selected type and max price
  const filteredRooms = rooms.filter(room => {
    const matchesType = filterType === "all" || room.type === filterType;
    const matchesPrice = maxPrice === "" || room.pricePerNight <= Number(maxPrice);
    return matchesType && matchesPrice;
  });

  // Get unique room types from data for the dropdown
  const roomTypes = ["all", ...new Set(rooms.map(room => room.type))];

  return (
    <main className="container mx-auto py-16 px-6 md:px-10 xl:px-32 2xl:px-44">
      <h1 className="text-2xl font-bold mb-3 text-center md:text-left">Hotel Rooms</h1>
      <p className="text-[13px">Take advantage of our limited-time offers and special packages to enhance <br /> your stay and create unforgettable memories.</p>

      {/* Filters */}
      <div className="flex flex-col py-6 sm:flex-row gap-4 mb-10 items-center justify-center md:justify-start">
        <select
          value={filterType}
          onChange={e => setFilterType(e.target.value)}
          className="border rounded px-3 py-2"
        >
          {roomTypes.map(type => (
            <option key={type} value={type}>
              {type === "all" ? "All Types" : type.charAt(0).toUpperCase() + type.slice(1)}
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

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredRooms.length === 0 ? (
          <p className="col-span-full text-center text-gray-600">No rooms match your criteria.</p>
        ) : (
          filteredRooms.map(room => (
            <Link
              key={room.id}
              href={`/rooms/${room.id}`}
              className="block rounded-lg overflow-hidden "
            >
              <img
                src={room.imageUrl}
                alt={room.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-1 bg-white">
                <h2 className="font-semibold text-lg mb-1">{room.name}</h2>
                <p className="text-gray-700">${room.pricePerNight} / night</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}
