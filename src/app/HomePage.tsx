import OpeningScene from "@/sections/OpeningScene";
import DeveloperReveal from "@/sections/DeveloperReveal";
import DreamGarage from "@/sections/DreamGarage";
import SkillsCommandCenter from "@/sections/SkillsCommandCenter";
import NetworkEngineering from "@/sections/NetworkEngineering";
import Cybersecurity from "@/sections/Cybersecurity";
import CloudDevOps from "@/sections/CloudDevOps";
import ProjectsShowcase from "@/sections/ProjectsShowcase";
import AboutExperience from "@/sections/AboutExperience";
import ContactFinale from "@/sections/ContactFinale";

/**
 * Home page — stacks the ten sections in the order defined in the
 * master build prompt.
 */
export default function HomePage() {
  return (
    <>
      <OpeningScene />
      <DeveloperReveal />
      <DreamGarage />
      <SkillsCommandCenter />
      <NetworkEngineering />
      <Cybersecurity />
      <CloudDevOps />
      <ProjectsShowcase />
      <AboutExperience />
      <ContactFinale />
    </>
  );
}