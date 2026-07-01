import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
        bg-[#EEF7E8]
      "
    >
      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}