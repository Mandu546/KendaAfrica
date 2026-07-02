import Card from "./Card";

export default function HorizontalSection({
  title,
  items,
}) {
  return (
    <section className="px-8 mt-14">

      <h2
        className="
          text-3xl
          font-bold
          text-[#3D4F2B]
          mb-6
        "
      >
        {title}
      </h2>

      <div
        className="
          flex
          gap-6
          overflow-x-auto
          pb-6
        "
      >
        {items.map((item) => (
          <Card
            key={item.id}
            image={
              item.heroImage ||
              item.thumbnail ||
              item.image
            }
            title={item.name}
            description={item.description}
            link={`/service/${item.city}/${item.category}/${item.slug}`}
          />
        ))}
      </div>

    </section>
  );
}