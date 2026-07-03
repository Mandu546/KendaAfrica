export default function ReviewStatistics({
  stats,
}) {
  if (!stats) return null;

  const categories = [
    {
      label: "Cleanliness",
      value: stats.cleanliness,
    },
    {
      label: "Location",
      value: stats.location,
    },
    {
      label: "Service",
      value: stats.service,
    },
    {
      label: "Value",
      value: stats.value,
    },
    {
      label: "Facilities",
      value: stats.facilities,
    },
  ];

  return (
    <section className="mb-10">

      <h2 className="text-2xl font-bold mb-6">
        Guest Rating Summary
      </h2>

      <div className="bg-white rounded-2xl p-6 shadow">

        <div className="mb-8">

          <h3 className="text-5xl font-bold">
            ⭐ {stats.overall}
          </h3>

          <p className="text-gray-500">
            {stats.totalReviews} reviews
          </p>

        </div>

        <div className="space-y-5">

          {categories.map((item) => (

            <div key={item.label}>

              <div className="flex justify-between mb-2">

                <span>
                  {item.label}
                </span>

                <span>
                  {item.value}
                </span>

              </div>

              <div className="bg-gray-200 h-3 rounded-full">

                <div
                  className="
                    bg-[#3D4F2B]
                    h-3
                    rounded-full
                  "
                  style={{
                    width:
                      `${(item.value / 5) * 100}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}