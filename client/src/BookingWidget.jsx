export default function BookingWidget({ place }) {
  return (
    <>
      <div className="bg-white shadow p-4 rounded-2xl">
        <div className="text-2xl text-center">
          Price: ${place.price} / per night
        </div>
        <div className="border rounded-2xl mt-4">
          <div className="flex">
            <div className="px-4 py-3">
              <label>Check in:</label>
              <input type="date" />
            </div>
            <div className="px-4 py-3 border-l">
              <label>Check in:</label>
              <input type="date" />
            </div>
          </div>
          <div className="px-4 py-3 border-l">
            <label>Number of guests:</label>
            <input type="number" value={1} />
          </div>
        </div>
        <button className="primary mt-4">Book this place</button>
      </div>
    </>
  );
}