import "./index.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomeBanner from "./components/HomeSection/HomeBanner";
import ProjectCard from "./components/MyProjects/ProjectCard";
import AboutMe from "./components/AboutMe/AboutMe";
import SkillCard from "./components/Skills/SkillCard";
import ContactForm from "./components/ContactForm/ContactForm";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: "#ffffff",
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "#F94892",
        }}
      />
      <div>
        <Navbar />
        <HomeBanner id="home" />
        <ProjectCard
          id="project"
          className="odd"
          projectTitle="Wiggles: Pet Care Made Easy"
          projectDesc="A one-stop solution for pet data management, automated vaccinations, QR-based lost pet recovery, and organizing pet playdates."
          projectLink="https://github.com/DevanshSahni/Wiggles"
          deployedProjectLink="https://wiggles.vercel.app"
          projectImg={"./images/projectWiggles.jpg"}
        />
        <ProjectCard
          projectTitle="Animated Card: featuring the latest glassmorphism trend"
          projectDesc="React JS provided me the flexibility needed to create an interactive card with a glass-like effect, which adds a sense of depth and dimension to the user interface"
          projectLink="https://github.com/Deepajha14/Touch-me-not-Card"
          deployedProjectLink="https://deepajha14.github.io/Touch-me-not-Card/"
          projectImg={"./images/projectGlassmorphism.png"}
        />
        <ProjectCard
          className="odd"
          projectTitle="Rog-free: accessible anytime, anywhere"
          projectDesc="An approach to target and heal specific health conditions by transforming the living room into a yoga studio"
          projectLink="https://github.com/Deepajha14/Rog-Free"
          deployedProjectLink="https://deepajha14.github.io/Rog-Free/"
          projectImg={"./images/projectRogfree.png"}
        />
        <AboutMe id="about" />
        <SkillCard id="skills" />
        <ContactForm id="contact" />
        <Footer />
      </div>
    </>
  );
}

export default App;
