'use client';

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import rooms from "../../data/rooms"; // adjust path based on your structure

interface Hotel {
  id: number;
  hotelName: string;
  description: string;
  pricePerNight: number;
  maxGuests: number;
  imageUrl: string;
  county: string;
  location: string;
  amenities?: string[];
  rating?: number;
  phone?: string;
  email?: string;
}

export default function HotelDetail() {
  const [hotel, setHotel] = useState<Hotel | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    // Get hotel ID from params
    const hotelId = params?.id;
    
    if (hotelId) {
      // Find the hotel by ID
      const foundHotel = rooms.find(room => room.id === parseInt(hotelId as string));
      setHotel(foundHotel);
    }
    setLoading(false);
  }, [params]);

  if (loading) {
    return (
      <div className="container mx-auto py-16 px-6 md:px-10 xl:px-32 2xl:px-44">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="container mx-auto py-16 px-6 md:px-10 xl:px-32 2xl:px-44">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Hotel Not Found</h1>
          <p className="mb-4">The hotel you're looking for doesn't exist.</p>
          <Link href="/hotels" className="text-blue-600 hover:underline">
            Back to Hotels
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto py-16 px-6 md:px-10 xl:px-32 2xl:px-44">
      {/* Back Button */}
      <Link 
        href="/hotels" 
        className="inline-flex items-center text-blue-600 hover:underline mb-6"
      >
        ← Back to Hotels
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hotel Image */}
        <div>
          <img
            src={hotel.imageUrl}
            alt={hotel.hotelName}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Hotel Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{hotel.hotelName}</h1>
          
          <div className="mb-6">
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Location:</span> {hotel.location}, {hotel.county}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Max Guests:</span> {hotel.maxGuests}
            </p>
            <p className="text-2xl font-bold text-green-600">
              Ksh {hotel.pricePerNight.toLocaleString()} / night
            </p>
          </div>

          {/* Additional Details */}
          <div className="space-y-4">
            {hotel.description && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700">{hotel.description}</p>
              </div>
            )}

            {hotel.amenities && hotel.amenities.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Amenities</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {hotel.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
            )}

            {hotel.rating && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Rating</h3>
                <div className="flex items-center">
                  <span className="text-yellow-500 text-xl">
                    {'★'.repeat(Math.floor(hotel.rating))}
                    {'☆'.repeat(5 - Math.floor(hotel.rating))}
                  </span>
                  <span className="ml-2 text-gray-600">({hotel.rating}/5)</span>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Book Now
            </button>
            <button className="w-full sm:w-auto border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Add to Favorites
            </button>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Hotel Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Check-in/Check-out</h3>
            <p className="text-gray-700">Check-in: 2:00 PM</p>
            <p className="text-gray-700">Check-out: 11:00 AM</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
            {hotel.phone ? (
              <p className="text-gray-700">Phone: {hotel.phone}</p>
            ) : (
              <p className="text-gray-700">Phone: +254-XXX-XXXXXX</p>
            )}
            {hotel.email ? (
              <p className="text-gray-700">Email: {hotel.email}</p>
            ) : (
              <p className="text-gray-700">Email: info@{hotel.hotelName.toLowerCase().replace(/\s+/g, '')}.co.ke</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}