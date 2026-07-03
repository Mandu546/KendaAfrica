import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";

import markerIcon2x
from "leaflet/dist/images/marker-icon-2x.png";

import markerIcon
from "leaflet/dist/images/marker-icon.png";

import markerShadow
from "leaflet/dist/images/marker-shadow.png";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function ServiceMap({
  service,
}) {
  const position = [
    service.location.coordinates.lat,
    service.location.coordinates.lng,
  ];

  return (
    <div className="mb-10">

      <h2 className="text-2xl font-bold mb-4">
        Location
      </h2>

      <div className="rounded-2xl overflow-hidden shadow-lg">

        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{
            height: "450px",
            width: "100%",
          }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>
              {service.name}
            </Popup>
          </Marker>

        </MapContainer>

      </div>

    </div>
  );
}