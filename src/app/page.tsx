import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import MenCategories from "@/components/MenCategories";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <HomePage />
      <MenCategories />
      <Footer />
    </div>
  );
}
