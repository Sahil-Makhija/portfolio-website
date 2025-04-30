import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "About",
  };
}

const AboutPage = () => {
  return (
    <span className="hidden">
      About Sahil Makhija. Web Developer. Full-Stack Developer, Software
      Engineer, Cybersecurity
    </span>
  );
};

export default AboutPage;
