import {
  FaArrowLeft,
  FaArrowRight,
  FaHome,
  FaCog,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";

import { cityOrder } from "../data/cityOrder";

import searchData from "../data/searchData";

import useSearchHistory
from "../hooks/useSearchHistory";

export default function PlaceNavbar({
  cityName,
  currentCity,
}) {

  /*
  ===================================
  SEARCH STATE
  ===================================
  */

  const [search, setSearch] =
    useState("");

  // controls whether dropdown is visible
  const [
    showDropdown,
    setShowDropdown,
  ] = useState(false);

  const navigate =
    useNavigate();

  const {
    history,
    addSearch,
    clearHistory,
  } = useSearchHistory();

  /*
  ===================================
  FILTER SEARCH RESULTS
  ===================================
  */

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

  /*
  ===================================
  ENTER SEARCH
  ===================================
  */

  const handleSearch = (
    e
  ) => {

    if (e.key === "Enter") {

      addSearch(search);

      navigate(
        `/search?q=${search}`
      );

      // close dropdown
      setShowDropdown(false);

      // clear input
      setSearch("");
    }
  };

  /*
  ===================================
  CITY NAVIGATION
  ===================================
  */

  const currentIndex =
    cityOrder.indexOf(
      currentCity
    );

  const nextCity =
    currentIndex <
    cityOrder.length - 1
      ? cityOrder[
          currentIndex + 1
        ]
      : cityOrder[0];

  return (

    <div className="bg-white shadow-md sticky top-0 z-50">

      {/* ===================================
          TOP ROW
      =================================== */}

      <div className="flex justify-between items-center px-6 py-4">

        {/* BACK */}
        <button
          onClick={() =>
            navigate(-1)
          }
          className="
            text-2xl
            hover:scale-110
            transition
          "
        >
          <FaArrowLeft />
        </button>

        {/* CITY NAME */}
        <h1
          className="
            text-3xl
            md:text-4xl
            font-semibold
            tracking-wide
            text-[#3D4F2B]
            uppercase
          "
        >
          {cityName}
        </h1>

        {/* NEXT CITY */}
        <button
          onClick={() =>
            navigate(
              `/place/${nextCity}`
            )
          }
          className="
            text-2xl
            hover:scale-110
            transition
          "
        >
          <FaArrowRight />
        </button>

      </div>

      {/* ===================================
          SEARCH BAR ROW
      =================================== */}

      <div className="flex items-center gap-4 px-6 pb-4">

        {/* HOME */}
        <button
          onClick={() =>
            navigate("/")
          }
          className="text-2xl"
        >
          <FaHome />
        </button>

        {/* SEARCH CONTAINER */}
        <div className="relative flex-1">

          <FaSearch
            className="
              absolute
              left-4
              top-4
              text-gray-400
            "
          />

          {/* SEARCH INPUT */}
          <input
            type="text"

            value={search}

            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }

            // show dropdown
            onFocus={() =>
              setShowDropdown(
                true
              )
            }

            onKeyDown={
              handleSearch
            }

            placeholder="
              Search destinations...
            "

            className="
              w-full
              py-3
              pl-12
              rounded-full
              border
            "
          />

          {/* ===================================
              SEARCH HISTORY
          =================================== */}

          {showDropdown &&
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
                  onClick={
                    clearHistory
                  }
                  className="
                    text-red-500
                  "
                >
                  Clear
                </button>

              </div>

              {history.map(
                (item) => (

                <div
                  key={item}

                  onClick={() =>
                    setSearch(
                      item
                    )
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

          {/* ===================================
              SEARCH RESULTS
          =================================== */}

          {showDropdown &&
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

              {filteredResults.map(
                (item) => (

                <Link
                  key={
                    item.id ||
                    item.name
                  }

                  to={
                    item.type ===
                    "city"
                      ? `/place/${item.slug}`
                      : `/service/${item.city}/${item.category}/${item.slug}`
                  }

                  onClick={() => {

                    addSearch(
                      item.name
                    );

                    // hide dropdown
                    setShowDropdown(
                      false
                    );

                    // clear search
                    setSearch("");
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
                    {
                      item.description
                    }
                  </div>

                </Link>

              ))}
            </div>
          )}

        </div>

        {/* SETTINGS */}
        <FaCog className="text-2xl" />

        {/* PROFILE */}
        <FaUserCircle className="text-3xl" />

      </div>

    </div>
  );
}