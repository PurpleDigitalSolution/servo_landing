import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Service";
import HowItWorks from "../components/HowItWork";
import WhyChoose from "../components/WhyChoose";
import MobileApp from "../components/AppPreview";
import ForBusiness from "../components/ForBusiness";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import { Fuel } from "lucide-react";

const Footer = () => {
  // Dynamic footer data structure
  const footerData = {
    // services: {
    //   title: "Services",
    //   links: [
    //     { label: "Petrol Delivery", url: "#" },
    //     { label: "Diesel Delivery", url: "#" },
    //     { label: "Cooking Gas", url: "#" },
    //   ]
    // },
    // company: {
    //   title: "Company",
    //   links: [
    //     { label: "About", url: "#" },
    //     { label: "Careers", url: "#" },
    //     { label: "Blog", url: "/blog" },
    //   ]
    // },
    support: {
      title: "Support",
      links: [
        // { label: "Help Center", url: "#" },
        { label: "Privacy Policy", url: "/privacy" },
        // { label: "Terms of Service", url: "/terms" },
      ]
    }
  };

  // Footer bottom links
  const bottomLinks = [
    { label: "Privacy Policy", url: "/privacy" },
    { label: "Terms", url: "/terms" },
  ];

  return (
    <footer className="bg-text-primary px-10 dark:bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Fuel className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Servo</span>
            </div>
            <p className="text-gray-400 text-sm">
              Premium fuel delivery service for homes, businesses, and
              generators.
            </p>
          </div>

          {/* Dynamic Footer Sections */}
          {Object.values(footerData).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm text-gray-400">
            {bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons (commented out but can be added dynamically) */}
          {/* <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div> */}

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Servo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

function Landing() {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      <Navbar />
      <Hero />
      {/* <Metrics /> */}
      <Services />
      <HowItWorks />
      <WhyChoose />
      <MobileApp />
      <ForBusiness />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Landing;