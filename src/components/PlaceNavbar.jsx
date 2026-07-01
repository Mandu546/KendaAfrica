import {
  FaArrowLeft,
  FaArrowRight,
  FaHome,
  FaCog,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { cityOrder } from "../data/cityOrder";

export default function PlaceNavbar({
  cityName,
  currentCity,
}) {  const navigate = useNavigate();
    const currentIndex =
  cityOrder.indexOf(currentCity);

const nextCity =
  currentIndex < cityOrder.length - 1
    ? cityOrder[currentIndex + 1]
    : cityOrder[0];

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">

      {/* top row */}
     <div className="flex justify-between items-center px-6 py-4">

  {/* BACK */}
  <button
    onClick={() => navigate(-1)}
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
    style={{
      fontFamily:
        "'Segoe UI', 'Helvetica Neue', sans-serif",
    }}
  >
    {cityName}
  </h1>

  {/* NEXT */}
 <button
  onClick={() =>
    navigate(`/place/${nextCity}`)
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
      {/* second row */}
      <div className="flex items-center gap-4 px-6 pb-4">

        <button
          onClick={() => navigate("/")}
          className="text-2xl"
        >
          <FaHome />
        </button>

        <div className="relative flex-1">

          <FaSearch
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search destinations..."
            className="
              w-full
              border
              rounded-full
              py-3
              pl-12
            "
          />
        </div>

        <FaCog className="text-2xl" />

        <FaUserCircle className="text-3xl" />

      </div>

    </div>
  );
}