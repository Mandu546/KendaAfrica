export default function BookingPanel({
  service,
}) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-lg
        p-6
        sticky
        top-28
      "
    >
      {/* PRICE */}
      <div className="mb-6">

        <h2 className="text-2xl font-bold">
          {service.priceRange}
        </h2>

        <p className="text-gray-500">
          per night
        </p>

      </div>

      {/* RATING */}
      <div className="mb-6">

        <p className="text-xl">
          ⭐ {service.rating}
        </p>

      </div>

      {/* CALL */}
      <a
        href={`tel:${service.contacts.phone}`}
        className="
          block
          w-full
          bg-[#3D4F2B]
          text-white
          text-center
          py-3
          rounded-lg
          mb-3
        "
      >
        Call Property
      </a>

      {/* EMAIL */}
      <a
        href={`mailto:${service.contacts.email}`}
        className="
          block
          w-full
          bg-blue-600
          text-white
          text-center
          py-3
          rounded-lg
          mb-3
        "
      >
        Email
      </a>

      {/* WEBSITE */}
      <a
        href={`https://${service.contacts.website}`}
        target="_blank"
        rel="noreferrer"
        className="
          block
          w-full
          bg-black
          text-white
          text-center
          py-3
          rounded-lg
          mb-3
        "
      >
        Website
      </a>

      {/* DIRECTIONS */}
      <a
        href={service.location.googleMaps}
        target="_blank"
        rel="noreferrer"
        className="
          block
          w-full
          bg-green-600
          text-white
          text-center
          py-3
          rounded-lg
        "
      >
        Directions
      </a>

    </div>
  );
}