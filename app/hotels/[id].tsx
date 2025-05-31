import { useRouter } from "next/router";
import rooms from "../data/rooms";

export default function RoomDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Wait for the id to be available (it might be undefined on first render)
  if (!id) return <p>Loading...</p>;

  // Find the room by id (id comes as string, so convert if needed)
  const room = rooms.find(r => r.id === Number(id));

  if (!room) return <p>Room not found</p>;

  return (
    <main className="container mx-auto py-16 px-6 md:px-10 xl:px-32 2xl:px-44">
      <h1 className="text-3xl font-bold mb-6">{room.name}</h1>
      <img
        src={room.imageUrl}
        alt={room.name}
        className="w-full max-w-4xl h-64 object-cover rounded mb-6"
      />
      <p className="mb-4 text-gray-700">{room.description}</p>
      <p className="mb-4 font-semibold text-lg">
        Price per night: ${room.pricePerNight}
      </p>
      <button
        onClick={() => router.back()}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Back to Rooms
      </button>
    </main>
  );
}

