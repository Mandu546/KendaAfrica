import { Link } from "react-router-dom";
import { FaUserCircle, FaCog, FaSearch } from "react-icons/fa";
import MainLayout from "../layouts/MainLayout";

import nairobiImg from "../assets/image/cities/nairobi.jpg";
import mombasaImg from "../assets/image/cities/mombasa.jpg";
import naivashaImg from "../assets/image/cities/naivasha.jpg";
import nakuruImg from "../assets/image/cities/nakuru.jpg";
import kisumuImg from "../assets/image/cities/kisumu.jpg";
import dianiImg from "../assets/image/cities/Diani.jpg";
import nanyukiImg from "../assets/image/cities/nanyuki.jpg";
import eldoretImg from "../assets/image/cities/eldoret.jpg";
import malindiImg from "../assets/image/cities/malindi.jpg";

export default function Home() {

  const cities = [
  {
    name: "Nairobi",
    description: "Kenya's vibrant capital city.",
    image: nairobiImg,
  },
  {
    name: "Mombasa",
    description: "Historic coastal city with beautiful beaches.",
    image: mombasaImg,
  },
  {
    name: "Naivasha",
    description: "Beautiful freshwater lake destination.",
    image: naivashaImg,
  },
  {
    name: "Nakuru",
    description: "Home to flamingos and wildlife.",
    image: nakuruImg,
  },
  {
    name: "Kisumu",
    description: "Largest city on Lake Victoria.",
    image: kisumuImg,
  },
  {
    name: "Diani",
    description: "Famous white sand beach destination.",
    image: dianiImg,
  },
  {
    name: "Nanyuki",
    description: "Gateway to Mount Kenya.",
    image: nanyukiImg,
  },
  {
    name: "Eldoret",
    description: "Kenya's athletics capital.",
    image: eldoretImg,
  },
  {
    name: "Malindi",
    description: "Historic coastal tourism town.",
    image: malindiImg,
  },
];
return (
  <MainLayout>
    <div className="bg-[#EEF7E8]">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-4">

        <div>
          <h1 className="text-3xl font-bold text-[#3D4F2B]">
            KendaAfrica
          </h1>
        </div>

        <div className="relative w-[500px]">

          <FaSearch
            className="absolute left-4 top-4 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search destinations, hotels, attractions..."
            className="
            w-full
            py-3
            pl-12
            rounded-full
            border
            "
          />
        </div>

        <div className="flex gap-5 text-2xl text-[#3D4F2B]">
          <FaCog />
          <FaUserCircle />
        </div>

      </nav>

      {/* HERO SECTION */}

      <section className="px-8 py-10">

        <div
          className="
          h-[450px]
          rounded-3xl
          bg-[#3D4F2B]
          flex
          items-center
          justify-center
          "
        >
          <div className="text-center">

            <h1
              className="
              text-6xl
              font-bold
              text-white
              "
            >
              Explore Kenya
            </h1>

            <p
              className="
              text-white
              text-xl
              mt-4
              "
            >Discover amazing destinations, book unforgettable experiences,
  connect with trusted local businesses, and explore the beauty of Kenya.
            </p>

          </div>
        </div>

      </section>

      {/* DESTINATIONS */}

      <section className="px-8">

        <h2
          className="
          text-4xl
          font-bold
          mb-6
          text-[#3D4F2B]
          "
        >
          Popular Attractions
        </h2>
<div
  className="
  flex
  gap-6
  overflow-x-auto
  pb-5
  "
>
  {cities.map((city, index) => (
    <div
      key={index}
      className="
      min-w-[300px]
      bg-white
      rounded-xl
      shadow-md
      "
    >
      <img
        src={city.image}
        alt={city.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-xl">
          {city.name}
        </h3>

        <p>
          {city.description}
        </p>
<Link to={`/place/${city.name.toLowerCase()}`}>
  <button
    className="
    mt-4
    bg-[#3D4F2B]
    text-white
    px-4
    py-2
    rounded-full
    "
  >
    Explore Now
  </button>
</Link>
      </div>
    </div>
  ))}
</div>

      </section>

    

        </div>
  </MainLayout>

  );
}