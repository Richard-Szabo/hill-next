import AboutUs from "@/components/About/AboutUs";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer/Footer";
import Reviews from "@/components/Review/Reviews";
import HeroSliderWrapper from "@/components/Slider/Hero/HeroSliderWrapper";
import ServicesSliderWrapper from "@/components/Slider/Services/ServicesSliderWrapper";
import { HeroSliderData, ServiceSliderData } from "@/data/Static/sliderdata";

export default function Home() {
  return (
    <>
      {/* Hero slider */}
        <HeroSliderWrapper data={HeroSliderData} time={5000} />
        {/* Services slider  */}
      <ServicesSliderWrapper data={ServiceSliderData} />
      {/* About us */}
      <AboutUs />
      
      {/* XXXx */}
      <ContactSection />
      {/* Reviews */}
      <Reviews />
      {/* Footer */}
      <Footer />
    </>

  );
}
