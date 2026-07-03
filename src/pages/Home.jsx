import { Link } from "react-router-dom";
import { FaUserCircle, FaCog, FaSearch } from "react-icons/fa";
import MainLayout from "../layouts/MainLayout";
import useFavorites from "../hooks/useFavorites";
import useRecent from "../hooks/useRecent";
import HorizontalSection from "../components/HorizontalSection";

import nairobiImg from "../assets/image/cities/nairobi.jpg";
import mombasaImg from "../assets/image/cities/mombasa.jpg";
import naivashaImg from "../assets/image/cities/naivasha.jpg";
import nakuruImg from "../assets/image/cities/nakuru.jpg";
import kisumuImg from "../assets/image/cities/kisumu.jpg";
import dianiImg from "../assets/image/cities/Diani.jpg";
import nanyukiImg from "../assets/image/cities/nanyuki.jpg";
import eldoretImg from "../assets/image/cities/eldoret.jpg";
import malindiImg from "../assets/image/cities/malindi.jpg";
import cities from "../data/cities";

export default function Home() {

const { favorites } = useFavorites();

const { recent } = useRecent();


console.log(nairobiImg);
console.log(cities);
return (
  <MainLayout>
    <div className="bg-[#EEF7E8]">

      {/* NAVBAR */}
      <nav
  className="
    sticky
    top-0
    z-50
    bg-[#EEF7E8]
    flex
    items-center
    justify-between
    px-4
    md:px-8
    py-4
    shadow-sm
  "
>
        <div>
          <h1 className="text-3xl font-bold text-[#3D4F2B]">
            KendaAfrica
          </h1>
        </div>

        <div
  className="
    relative
    w-[150px]
    sm:w-[250px]
    md:w-[400px]
    lg:w-[500px]
  "
>
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
    min-h-[180px]
    md:min-h-[320px]
    lg:min-h-[420px]
    rounded-3xl
    bg-[#3D4F2B]
    flex
    items-center
    justify-center
    px-6
  "
>
          <div className="text-center">
<h1
  className="
    text-3xl
    md:text-5xl
    lg:text-6xl
    font-bold
    text-white
  "
>
              Explore Kenya
            </h1>

           <p
  className="
    text-sm
    md:text-lg
    lg:text-xl
    mt-4
    text-white
    max-w-4xl
  "
>Discover amazing destinations, book unforgettable experiences,
  connect with trusted local businesses, and explore the beauty of Kenya.
            </p>

          </div>
        </div>
      
      <br></br>


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

{/*Saved Locations*/}
      </section>
      {favorites.length > 0 && (
  <section className="px-8 mb-12">

    <HorizontalSection
      title="Saved Places"
      items={favorites}
    />

  </section>
)}
        {/*recently viewed*/}
      </section>
      {recent.length > 0 && (
  <section className="px-8 mb-12">

    <HorizontalSection
      title="Recently Viewed"
      items={recent}
    />

  </section>
)}
    
        </div>
  </MainLayout>

  );
}