import { useState } from "react";

export default function ServiceSidebar({
  services,
  onServiceClick,
}) {
  const [search, setSearch] = useState("");
  const filteredServices = services.filter((service) =>
  service.title
    .toLowerCase()
    .includes(search.toLowerCase())
);
  return (
    <div
      className="
        hidden
        lg:block
        fixed
        left-5
        top-44
        w-[260px]
        bg-white
        rounded-xl
        shadow-lg
        p-4
        z-40
        max-h-[70vh]
        overflow-y-auto
      "
    >
      {/* Search header */}
      <div className="mb-4">
        <input
  type="text"
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
  placeholder="Search services..."
  className="
    w-full
    border
    rounded-lg
    px-3
    py-2
    outline-none
  "
/>
      </div>

      {/* Service list */}
      <div className="space-y-2">

      {filteredServices.map((service) => (
        

          <button
  key={service.id}
  onClick={() => onServiceClick(service.key)}
  className="
    w-full
    flex
    items-center
    gap-4
    px-3
    py-3
    rounded-lg
    hover:bg-gray-100
    transition
    text-left
  "
>
  <div className="text-[#3D4F2B] text-lg">
    {service.icon}
  </div>

  <span className="text-gray-700 font-medium">
  {service.title}

  </span>
</button>
        ))}
        
        {filteredServices.length === 0 && (
  <div className="p-3 text-gray-400">
    No services found
  </div>
)}

      </div>
    </div>
  );
}