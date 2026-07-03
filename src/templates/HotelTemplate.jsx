import { useState } from "react";
import GalleryModal from "../components/GalleryModal";
import BookingPanel from "../components/BookingPanel";
import RelatedServices
from "../components/RelatedServices";
import ServiceMap
from "../components/ServiceMap";


export default function HotelTemplate({
  service,
}) {
  const [showGallery, setShowGallery] =
  useState(false);

const [currentImage, setCurrentImage] =
  useState(0);
const similarHotels = [
  {
    id: 2,
    slug: "sawela-lodge",
    city: "naivasha",
    category: "hotel",

    name: "Sawela Lodge",

    heroImage:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",

    description:
      "Luxury resort in Naivasha.",
  },

  {
    id: 3,
    slug: "great-rift-lodge",
    city: "naivasha",
    category: "hotel",

    name:
      "Great Rift Valley Lodge",

    heroImage:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",

    description:
      "Golf and safari resort.",
  },
];
  return (
    <div className="pb-20">

      {/* HERO IMAGE */}
      <div className="relative">

        <img
          src={service.heroImage}
          alt={service.name}
          className="
            w-full
            h-[400px]
            object-cover
          "
        />

      </div>

      {/* CONTENT */}
<div
  className="
    max-w-7xl
    mx-auto
    px-6
    py-8
    grid
    lg:grid-cols-[1fr_350px]
    gap-10
  "
>
{/* LEFT COLUMN */}
<div>
  

       {/* TITLE */}
<div className="mb-8">

  <h1 className="text-4xl font-bold">
    {service.name}
  </h1>

  <p className="text-gray-500 mt-2">
    {service.location.address}
  </p>

  <p className="mt-2 text-xl">
    ⭐ {service.rating}
  </p>
{/* SECTION NAVIGATION */}
<div
  className="
    sticky
    top-20
    bg-white
    z-20
    border-b
    mb-8
  "
>
  <div className="flex gap-6 overflow-x-auto py-4">

    <a href="#overview">
      Overview
    </a>

    <a href="#photos">
      Photos
    </a>

    <a href="#rooms">
      Rooms
    </a>

    <a href="#amenities">
      Amenities
    </a>

    <a href="#location">
      Location
    </a>

    <a href="#reviews">
      Reviews
    </a>

  </div>
</div>
  {/* ACTION BUTTONS */}
  <div className="flex flex-wrap gap-3 mt-6">

    <button
      className="
        bg-red-500
        text-white
        px-4
        py-2
        rounded-lg
      "
    >
      Save
    </button>

    <button
      className="
        bg-blue-500
        text-white
        px-4
        py-2
        rounded-lg
      "
    >
      Share
    </button>

    <a
      href={service.location.googleMaps}
      target="_blank"
      rel="noreferrer"
      className="
        bg-green-600
        text-white
        px-4
        py-2
        rounded-lg
      "
    >
      Directions
    </a>

    <a
      href={`https://${service.contacts.website}`}
      target="_blank"
      rel="noreferrer"
      className="
        bg-black
        text-white
        px-4
        py-2
        rounded-lg
      "
    >
      Website
    </a>

  </div>

</div>
{/* GALLERY */}
   <section
  id="photos"
  className="mb-10"
>

  <h2 className="text-2xl font-bold mb-4">
    Photos
  </h2>

  <div className="flex gap-4 overflow-x-auto">

    {service.gallery?.map(
      (image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          onClick={() => {
            setCurrentImage(index);
            setShowGallery(true);
          }}
          className="
            w-64
            h-44
            object-cover
            rounded-xl
            cursor-pointer
          "
        />
      )
    )}

  </div>

</section>

        {/* DESCRIPTION */}
        <section
  id="overview"
  className="mb-10"
>

          <h2 className="text-2xl font-bold mb-4">
            About
          </h2>

          <p>
            {service.description}
          </p>

        </section>

        {/* PRICE */}
        <section className="mb-10">

          <h2 className="text-2xl font-bold mb-4">
            Price Range
          </h2>

          <p>
            {service.priceRange}
          </p>

        </section>
        {/* ROOM TYPES */}
<section
  id="rooms"
  className="mb-10"
>

  <h2 className="text-2xl font-bold mb-4">
    Room Types
  </h2>

  <div className="flex flex-wrap gap-3">

        {service.roomTypes?.map(
        (room) => (
        <div
          key={room}
          className="
            bg-white
            border
            rounded-full
            px-4
            py-2
          "
        >
          {room}
        </div>
      )
    )}

  </div>

</section>
{/* BOOKING */}
<section className="mb-10">

  <h2 className="text-2xl font-bold mb-4">
    Booking Information
  </h2>

  <p>
    Check In:
    {" "}
    {service.booking?.checkIn}
  </p>

  <p>
    Check Out:
    {" "}
    {service.booking?.checkOut}
  </p>

</section>

        {/* AMENITIES */}
       <section
  id="amenities"
  className="mb-10"
>
          <h2 className="text-2xl font-bold mb-4">
            Amenities
          </h2>

          <div className="flex flex-wrap gap-3">

            {service.amenities?.map(
              (item) => (
                <div
                  key={item}
                  className="
                    bg-green-100
                    px-4
                    py-2
                    rounded-full
                  "
                >
                  {item}
                </div>
              )
            )}

          </div>

        </section>
        {/* FACILITIES */}
<section className="mb-10">

  <h2 className="text-2xl font-bold mb-4">
    Facilities
  </h2>

  <div className="flex flex-wrap gap-3">

    {service.facilities?.map(
      (facility) => (
        <div
          key={facility}
          className="
            border
            px-4
            py-2
            rounded-full
          "
        >
          {facility}
        </div>
      )
    )}

  </div>

</section>

        {/* CONTACTS */}
        <section className="mb-10">

          <h2 className="text-2xl font-bold mb-4">
            Contact
          </h2>

          <p>
            {service.contacts?.phone}
          </p>

          <p>
            {service.contacts?.email}
          </p>

        </section>
        {/* SOCIAL MEDIA */}
<section className="mb-10">

  <h2 className="text-2xl font-bold mb-4">
    Social Media
  </h2>

  <p>
    Instagram:
    {service.socials?.instagram}
  </p>

  <p>
    Facebook:
    {service.socials?.facebook}
  </p>

</section>
{/* LOCATION */}
<ServiceMap
  service={service}
/>
        {/* NEARBY */}
<section className="mb-10">

  <h2 className="text-2xl font-bold mb-4">
    Nearby Attractions
  </h2>

  {service.nearby?.map(
        (place) => (
      <div
        key={place.name}
        className="
          border-b
          py-3
        "
      >
        {place.name}
        {" "}
        —
        {" "}
        {place.distance}
      </div>
    )
  )}

</section>

                  {/* REVIEWS */}
        <section
  id="reviews"
>
          <h2 className="text-2xl font-bold mb-4">
            Reviews
          </h2>


          <div className="grid gap-4">
            {service.reviews?.map(
              (review, index) => (
                <div
                  key={index}
                  className="
                    bg-white
                    p-5
                    rounded-xl
                    shadow
                  "
                >
                  <h3 className="font-bold">
                    {review.user}
                  </h3>

                  <p>
                    ⭐ {review.rating}
                  </p>

                  <p className="mt-2">
                    {review.comment}
                  </p>
                </div>
              )
            )}
          </div>
        </section>

      </div>

      {/* RIGHT COLUMN */}
      <div>
        <BookingPanel
          service={service}
        />
      </div>

    </div>
          <RelatedServices
  title="Similar Hotels"
  items={similarHotels}
/>

    {showGallery && (
      <GalleryModal
        images={service.gallery}
        current={currentImage}
        setCurrent={setCurrentImage}
        onClose={() =>
          setShowGallery(false)
        }
      />
    )}

  </div>
);
}