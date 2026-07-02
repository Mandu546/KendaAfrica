import { Link } from "react-router-dom";

export default function Card({
  image,
  title,
  description,
  link,
}) {
  return (
    <Link to={link}>
      <div
        className="
          min-w-[300px]
          bg-white
          rounded-2xl
          shadow-lg
          overflow-hidden
          hover:shadow-xl
          hover:scale-[1.02]
          transition
          cursor-pointer
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
    </Link>
  );
}