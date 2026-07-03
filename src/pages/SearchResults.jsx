import { useSearchParams } from "react-router-dom";
import searchData from "../data/searchData";
import Card from "../components/Card";
import MainLayout from "../layouts/MainLayout";

export default function SearchResults() {
  const [params] = useSearchParams();

  const query =
    params.get("q") || "";

  const results =
    searchData.filter((item) =>
      (
        item.name +
        " " +
        (item.description || "")
      )
        .toLowerCase()
        .includes(
          query.toLowerCase()
        )
    );

  return (
    <MainLayout>
      <div className="px-8 py-8">

        <h1 className="text-3xl font-bold mb-8">
          Search Results for "{query}"
        </h1>

        {results.length === 0 ? (
          <p>
            No results found.
          </p>
        ) : (
          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >
            {results.map((item) => (
              <Card
                key={
                  item.id ||
                  item.name
                }
                image={
                  item.heroImage ||
                  item.thumbnail ||
                  item.image
                }
                title={item.name}
                description={
                  item.description
                }
                link={
                  item.type === "city"
                    ? `/place/${item.slug}`
                    : `/service/${item.city}/${item.category}/${item.slug}`
                }
              />
            ))}
          </div>
        )}

      </div>
    </MainLayout>
  );
}