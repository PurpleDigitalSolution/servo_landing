
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
  return (
    <footer className="bg-text-primary px-10 dark:bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
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
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Petrol Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Diesel Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cooking Gas
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
          {/* <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
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
