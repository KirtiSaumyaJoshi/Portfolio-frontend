"use client";
import DeveloperCLock from "./components/developerClock";
import Education from "./components/education";
import ProfessionalSummary from "./components/professionalSummary";
import Projects from "./components/projects";
import Landing from "./components/Landing";

export default function Main() {
  return (
    <>
        <Landing/>
        <ProfessionalSummary/>
        <Projects/>
        <Education/>
        <DeveloperCLock/>

    </>
        
  );
}
