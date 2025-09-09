"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/navbarComp";
import { useState } from "react";
import HeroSection from "./HeroSection";


export function NavBarSection() {
    const navItems = [
        {
            name: "Welcome",
            link: "#welcome",
        },
        {
            name: "Journey",
            link: "#education",
        },
        {
            name: "Skills",
            link: "#skills",
        },
        {
            name: "Work",
            link: "#experience",
        },
        {
            name: "Creations",
            link: "#projects",
        },
        {
            name: "GitHub",
            link: "https://github.com/Krushna4142",
        },
        {
            name: "LinkedIn",
            link: "https://linkedin.com/in/krushna-nawale",
        }
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full">
            <Navbar className="m-0 p-0">
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">
                        <NavbarButton 
                            variant="secondary" 
                            href="/resume/Krushna_Nawale_Resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Resume
                        </NavbarButton>
                        <NavbarButton variant="primary" href="mailto:krushnanawale4142@gmail.com">E-Mail</NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            {/* <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Login
                            </NavbarButton> */}
                            <NavbarButton
                                href="/resume/Krushna_Nawale_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="secondary"
                                className="w-full"
                            >
                                Resume
                            </NavbarButton>
                            <NavbarButton
                                href="mailto:krushnanawale4142@gmail.com"
                                variant="primary"
                                className="w-full"
                            >
                                E-mail
                            </NavbarButton>

                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
            <HeroSection />
        </div>
    );
}
