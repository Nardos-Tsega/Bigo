import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="bg-[#111112]">
      <div className="flex flex-col max-w-7xl container mx-auto">
        <div className="border-b-4 border-[#F7E733]">
          <Header />
        </div>
        <div className="mt-20 bg-[#3F425F] px-8 py-12 shadow-lg">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
