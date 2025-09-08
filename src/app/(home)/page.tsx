"use client";
import { CareerSection } from "./CareerSection";
import ProjectSection from "./ProjectSection";
import TwoColumnGrid from "./TwoColumnGrid";
import { NavBarSection } from "./NavBarSection";
import { SignupForm } from "./SignupForm";
import { Globe } from "./Globe";
import { SkillSection } from "./SkillSection";
import BottomBrand from "./BottomBrand";
import { CardForResume } from "./CardForResume";
import { ParagraphSection } from "./ParagraphSection";
import { LightText } from "./LighText";
import { ChatBot } from "@/components/ui/ChatBot";
import { CertificationSection } from "@/components/ui/CertificationSection";
import { EducationExperience } from "@/components/ui/EducationExperience";
import { EducationSection } from "@/components/ui/EducationSection";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { KitAI } from "@/components/ui/KitAI";
import { AboutSection } from "@/components/ui/AboutSection";
import { Footer } from "@/components/ui/Footer";
import { SaaSCards } from "@/components/ui/SaaSCards";
import { NeonEffects } from "@/components/ui/NeonEffects";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { FuturisticSlideDeck } from "@/components/ui/FuturisticSlideDeck";
import { OpenToWork } from "@/components/ui/OpenToWork";
import { RakshaAIWidget } from "@/components/ui/RakshaAIWidget";

import React from "react";

export default function Home() {
  return (
    <>
      <NavBarSection />
      <TwoColumnGrid cellClassName="bg-black py-30 rounded-lg">
        <CardForResume />
        <ParagraphSection />
      </TwoColumnGrid>

      <AboutSection />
      <EducationSection />
      <FuturisticSlideDeck />
      <CertificationSection />
      <EducationExperience />
      <SaaSCards />
      <OpenToWork />
      <LightText />
      <ProjectSection />
      {/* <TestimonialsSection /> */}
      <BottomBrand />
      <TwoColumnGrid cellClassName="bg-black p-4 rounded-lg">
        <SignupForm />
        <Globe />
      </TwoColumnGrid>
      <Footer />
      <RakshaAIWidget />
      <ThemeToggle />
      <NeonEffects />
      <ScrollToTop />
    </>
  );
}