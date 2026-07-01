export default function Card({
  image,
  title,
  description
}) {
  return (
    <div
      className="
      min-w-[300px]
      bg-white
      rounded-2xl
      shadow-lg
      overflow-hidden
      "
    >
      <img
        src={image}
        alt={title}
        className="
        w-full
        h-48
        object-cover
        "
      />

      <div className="p-4">

        <h3 className="text-xl font-bold">
          {title}
        </h3>

        <p className="mt-2 text-gray-600">
          {description}
        </p>

      </div>
    </div>
  );
}