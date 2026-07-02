export default function GalleryModal({
  images,
  current,
  setCurrent,
  onClose,
}) {
  return (
    <div
      className="
        fixed
        inset-0
        bg-black/90
        z-50
        flex
        flex-col
        items-center
        justify-center
        p-6
      "
    >
      {/* CLOSE */}
      <button
        onClick={onClose}
        className="
          absolute
          top-6
          right-6
          text-white
          text-4xl
        "
      >
        ×
      </button>

      {/* PREVIOUS */}
      <button
        onClick={() =>
          setCurrent(
            current === 0
              ? images.length - 1
              : current - 1
          )
        }
        className="
          absolute
          left-6
          text-white
          text-5xl
        "
      >
        ←
      </button>

      {/* IMAGE */}
      <img
        src={images[current]}
        alt=""
        className="
          max-h-[80vh]
          max-w-[90vw]
          rounded-xl
        "
      />

      {/* NEXT */}
      <button
        onClick={() =>
          setCurrent(
            current === images.length - 1
              ? 0
              : current + 1
          )
        }
        className="
          absolute
          right-6
          text-white
          text-5xl
        "
      >
        →
      </button>

      {/* THUMBNAILS */}
      <div
        className="
          flex
          gap-3
          mt-6
          overflow-x-auto
        "
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            onClick={() =>
              setCurrent(index)
            }
            className="
              w-24
              h-16
              object-cover
              rounded-lg
              cursor-pointer
            "
          />
        ))}
      </div>
    </div>
  );
}