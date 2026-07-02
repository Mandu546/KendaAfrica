import { useParams } from "react-router-dom";
import { hotels } from "../data/services/hotels";
import { attractions } from "../data/services/attractions";
import { bnbs } from "../data/services/bnbs";
import { emergency } from "../data/services/emergency";
import PlaceNavbar from "../components/PlaceNavbar";
import MainLayout from "../layouts/MainLayout";
import HorizontalSection from "../components/HorizontalSection";
import ServiceSidebar from "../components/ServiceSidebar";

import {
  FaTree,
  FaHotel,
  FaBed,
  FaUtensils,
  FaGlassCheers,
  FaDumbbell,
  FaShoppingBag,
  FaTaxi,
  FaHospital,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function PlaceDetails() {
  const { placeName } = useParams();
  const cityHotels = hotels.filter(
  hotel => hotel.city === placeName
);

const cityAttractions = attractions.filter(
  attraction => attraction.city === placeName
);

const cityBnbs = bnbs.filter(
  bnb => bnb.city === placeName
);

const cityEmergency = emergency.filter(
  item => item.city === placeName
);

  // SAMPLE DATA
  // Later these will come from Django API

 

  const restaurants = [];
  const nightlife = [];
  const gyms = [];
  const shopping = [];
  const transport = [];
  const hospitals = [];

  // SIDEBAR SERVICES
  const services = [
    {
      id: 1,
      key: "attractions",
      title: "Tourist Attractions",
      icon: <FaTree />,
      items: cityAttractions,
    },
    {
      id: 2,
      key: "hotels",
      title: "Hotels",
      icon: <FaHotel />,
      items: cityHotels,   
    },
    {
      id: 3,
      key: "bnbs",
      title: "BNBs",
      icon: <FaBed />,
      items: cityBnbs,
    },
    {
      id: 4,
      key: "restaurants",
      title: "Restaurants",
      icon: <FaUtensils />,
      items: restaurants,
    },
    {
      id: 5,
      key: "nightlife",
      title: "Nightlife",
      icon: <FaGlassCheers />,
      items: nightlife,
    },
    {
      id: 6,
      key: "gyms",
      title: "Gyms",
      icon: <FaDumbbell />,
      items: gyms,
    },
    {
      id: 7,
      key: "shopping",
      title: "Shopping",
      icon: <FaShoppingBag />,
      items: shopping,
    },
    {
      id: 8,
      key: "transport",
      title: "Transport",
      icon: <FaTaxi />,
      items: transport,
    },
    {
      id: 9,
      key: "hospitals",
      title: "Hospitals",
      icon: <FaHospital />,
      items: hospitals,
    },
    {
      id: 10,
      key: "emergency",
      title: "Emergency",
      icon: <FaExclamationTriangle />,
      items: cityEmergency,
    },
  ];

  return (
    <MainLayout>
      <div className="bg-[#EEF7E8] min-h-screen">

        <PlaceNavbar
          cityName={placeName}
          currentCity={placeName}
        />

        <div className="flex">

          {/* LEFT SIDEBAR */}
<ServiceSidebar
  services={services}
  onServiceClick={(key) => {
    document
      .getElementById(key)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
/>
          {/* RIGHT CONTENT */}
<div className="space-y-10 lg:ml-[320px]">
            {services.map(
              (service) =>
                service.items.length > 0 && (
                  <div
                    key={service.id}
                    id={service.key}
                  >
                    <HorizontalSection
                      title={service.title}
                      items={service.items}
                    />
                  </div>
                )
            )}

          </div>

        </div>

      </div>
    </MainLayout>
  );
}