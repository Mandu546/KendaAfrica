import { FaUserCircle, FaCog, FaSearch } from "react-icons/fa";
import MainLayout from "../layouts/MainLayout";
import useFavorites from "../hooks/useFavorites";
import useRecent from "../hooks/useRecent";
import HorizontalSection from "../components/HorizontalSection";
import { useState } from "react";
import searchData from "../data/searchData";
import useSearchHistory
from "../hooks/useSearchHistory";
import { Link, useNavigate }
from "react-router-dom";

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
  
  const [search, setSearch] =
  useState("");

  const [showSearch, setShowSearch] =
  useState(false);


  const {
  history,
  addSearch,
  clearHistory,
} = useSearchHistory();

const navigate =
  useNavigate();

const filteredResults =
  search.length === 0
    ? []
    : searchData
        .filter((item) =>
          (
            item.name +
            " " +
            (item.description || "")
          )
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
        )
        .slice(0, 8);


  console.log(nairobiImg);
  console.log(cities);
  const handleSearch = (
  e
) => {

  if (e.key === "Enter") {

    addSearch(search);

    setShowSearch(false);

    navigate(
      `/search?q=${search}`
    );
  }
};
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
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
  onFocus={() =>
    setShowSearch(true)
  }
  placeholder="
    Search destinations,
    hotels,
    attractions...
  "
  className="
    w-full
    py-3
    pl-12
    rounded-full
    border
  "
/>
{/* SEARCH HISTORY */}
{showSearch &&
 search.length === 0 &&
 history.length > 0 && (
    <div
      className="
        absolute
        top-full
        left-0
        right-0
        bg-white
        rounded-xl
        shadow-xl
        mt-2
        z-50
      "
    >
      <div
        className="
          flex
          justify-between
          px-4
          py-3
          border-b
        "
      >
        <span className="font-bold">
          Recent Searches
        </span>

        <button
          onClick={clearHistory}
          className="text-red-500"
        >
          Clear
        </button>
      </div>

      {history.map((item) => (
        <div
          key={item}
          onClick={() =>
            setSearch(item)
          }
          className="
            px-4
            py-3
            cursor-pointer
            hover:bg-gray-100
          "
        >
          {item}
        </div>
      ))}
    </div>
)}


{/* SEARCH RESULTS */}
{showSearch &&
 filteredResults.length > 0 && (
  <div
    className="
      absolute
      top-full
      left-0
      right-0
      bg-white
      rounded-xl
      shadow-xl
      mt-2
      overflow-hidden
      z-50
    "
  >
    {filteredResults.map((item) => (
      <Link
        key={item.id || item.name}
        
       to={
  item.type === "city"
    ? `/place/${item.slug}`
    : `/service/${item.city}/${item.category}/${item.slug}`
}
        onClick={() => 
       {
          addSearch(item.name);

           setSearch("");

          setShowSearch(false);
        }} 
        className="
          block
          px-4
          py-3
          hover:bg-gray-100
        "
      >
        <div className="font-semibold">
          {item.name}
        </div>

        <div className="text-sm text-gray-500">
          {item.description}
        </div>
      </Link>
    ))}
  </div>
)}
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