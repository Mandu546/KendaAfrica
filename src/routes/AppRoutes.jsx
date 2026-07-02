import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import PlaceDetails from "../pages/PlaceDetails";
import ServiceDetails from "../pages/ServiceDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Destination Page */}
        <Route
          path="/place/:placeName"
          element={<PlaceDetails />}
        />

        {/* Service Details Page */}
        <Route
          path="/service/:city/:category/:id"
          element={<ServiceDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}