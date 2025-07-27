import HeroSection from "../../../components/Hero";
import Banner from "../../../components/Banner";
import ServicesSection from "../../../components/ServiceSection";
import FadeInWhenVisible from "../../../Animations_HOC";
import Layout from "../../../Layouts/MAIN";
import TechServicesSection from "../../../components/TechServices";

const Home: React.FC = () => {
  return (
    <Layout>
      <FadeInWhenVisible delay={0.1}>
        <HeroSection />
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <Banner />
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.3}>
        <ServicesSection />
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.3}>
        <TechServicesSection />
      </FadeInWhenVisible>
    </Layout>
  );
};

export default Home;
