export default function Hero() {
  return (
    <section
      className="
      relative
      h-[500px]
      rounded-xl
      overflow-hidden
      "
    >
      <img
        src="/hero.jpg"
        alt=""
        className="
        w-full
        h-full
        object-cover
        "
      />

      <div
        className="
        absolute
        inset-0
        bg-black/40
        flex
        flex-col
        justify-center
        pl-10
        "
      >
        <h1
          className="
          text-white
          text-6xl
          font-bold
          "
        >
          Explore Africa
        </h1>

        <p className="text-white text-xl mt-4">
          Discover cities, attractions,
          hotels and experiences.
        </p>
      </div>
    </section>
  )
}
