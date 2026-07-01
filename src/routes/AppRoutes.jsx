import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import PlaceDetails from "../pages/PlaceDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/place/:placeName"
          element={<PlaceDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}