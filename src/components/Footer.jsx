export default function Footer() {
  return (
    <footer
      className="
        bg-[#3D4F2B]
        text-white
        mt-20
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-12
        "
      >
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-10
          "
        >
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              About
            </h3>

            <p className="mb-2">Our Story</p>
            <p className="mb-2">Careers</p>
            <p>Privacy Policy</p>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Contacts
            </h3>

            <p className="mb-2">Email</p>
            <p className="mb-2">Social Media</p>
            <p>Support</p>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Help
            </h3>

            <p className="mb-2">FAQs</p>
            <p className="mb-2">Refund Policy</p>
            <p>Emergency</p>
          </div>

          {/* Partner */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Partnership
            </h3>

            <p className="mb-2">
              Become a Partner
            </p>

            <p className="mb-2">
              Business Listing
            </p>

            <p>
              Advertise
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="
            border-t
            border-green-700
            mt-10
            pt-6
            text-center
            text-sm
          "
        >
          © 2026 KendaAfrica •
          Explore • Discover • Experience
        </div>
      </div>
    </footer>
  );
}