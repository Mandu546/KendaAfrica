import { useParams } from "react-router-dom";

import MainLayout
from "../layouts/MainLayout";

import PlaceNavbar
from "../components/PlaceNavbar";

import HotelTemplate
from "../templates/HotelTemplate";

import { getService }
from "../lib/serviceLoader";

export default function ServiceDetails() {

  const {
    city,
    category,
    id,
  } = useParams();

  const service =
    getService(
      city,
      category,
      id
    );

  if (!service) {
    return (
      <div className="p-10">
        Service not found
      </div>
    );
  }

  return (
    <MainLayout>

      <PlaceNavbar
        cityName={city}
        currentCity={city}
      />

      {category === "hotel" && (
        <HotelTemplate
          service={service}
        />
      )}

    </MainLayout>
  );
}