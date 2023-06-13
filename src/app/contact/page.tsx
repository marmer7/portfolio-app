"use client";

// Import dynamic from next/dynamic
import dynamic from "next/dynamic";
import Section from "../components/Section";
import TitleHeader from "../components/TitleHeader";

// dynamically import the ContactForm component with ssr set to false
const ContactForm = dynamic(() => import("../components/ContactForm"), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="w-full lg:max-w-2xl text-center">
      <TitleHeader id="contact" title="Contact" subtitle="Get in touch" />
      <Section id="contact" className="w-full lg:max-w-2xl">
        <ContactForm />
      </Section>
    </div>
  );
}
