import { createElement } from "react";
import { Link } from "react-router-dom";
import {
    FaCodepen,
    FaCoffee,
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaGlobe,
    FaHandHoldingHeart,
    FaLinkedin,
    FaPatreon,
    FaYoutube,
} from "react-icons/fa";
import { Styled } from "./styled";

const externalLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aashishranjan",
        icon: FaLinkedin,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/theash.ashish/",
        icon: FaFacebook,
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",
        icon: FaYoutube,
    },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FaEnvelope },
    {
        label: "Support",
        href: "https://a2rp-donation-page.netlify.app/",
        icon: FaHandHoldingHeart,
    },
    {
        label: "Buy Me a Coffee",
        href: "https://buymeacoffee.com/a2rp",
        icon: FaCoffee,
    },
    {
        label: "Patreon",
        href: "https://www.patreon.com/a2rp",
        icon: FaPatreon,
    },
];

const Footer = () => {
    const year = new Date().getFullYear();
    const buildTime =
        typeof __BUILD_TIME__ !== "undefined"
            ? new Date(__BUILD_TIME__).toLocaleString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
              })
            : "Development build";

    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.Top>
                    <Styled.BrandSection>
                        <Styled.BrandTitle>React Sales Kanban</Styled.BrandTitle>
                        <Styled.Description>
                            A frontend sales pipeline board for managing deals,
                            tracking stages, and reviewing revenue forecasts.
                        </Styled.Description>
                        <span style={{ opacity: 0.7 }}>
                            Build: {buildTime}
                        </span>
                    </Styled.BrandSection>

                    <Styled.NavSection>
                        <Styled.SectionTitle>Navigation</Styled.SectionTitle>
                        <Styled.NavLinks>
                            <Link to="/pipeline">Pipeline</Link>
                            <Link to="/reports">Reports</Link>
                            <Link to="/settings">Settings</Link>
                        </Styled.NavLinks>
                    </Styled.NavSection>

                    <Styled.SocialSection>
                        <Styled.SectionTitle>Connect</Styled.SectionTitle>
                        <Styled.SocialLinks>
                            {externalLinks.map(({ label, href, icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={
                                        href.startsWith("http")
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        href.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    aria-label={label}
                                    title={label}
                                >
                                    {createElement(icon)}
                                </a>
                            ))}
                        </Styled.SocialLinks>
                    </Styled.SocialSection>
                </Styled.Top>

                <Styled.Bottom>
                    <Styled.Copy>
                        Copyright © {year}{" "}
                        <a
                            href="https://www.ashishranjan.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ashish Ranjan
                        </a>
                    </Styled.Copy>

                    <Styled.LegalLinks>
                        <Link to="/privacy">Privacy</Link>
                        <Link to="/terms">Terms</Link>
                        <Link to="/legal">Legal</Link>
                        <Link to="/cookies">Cookies</Link>
                    </Styled.LegalLinks>
                </Styled.Bottom>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default Footer;
