import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  TruckIcon,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
  ArrowRightIcon,
  CheckIcon,
} from 'lucide-react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-in-out' });
  }, []);
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      console.log('Subscribed with:', email)
      setSubscribed(true)
      setEmail('')
      // Reset the subscribed message after 5 seconds
      setTimeout(() => {
        setSubscribed(false)
      }, 5000)
    }
  }
  return (
    <footer className="bg-[#0a2c5e] text-white" data-aos="fade-up">
      {/* Pre-Footer CTA */}
      <div className="bg-[#072347] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to transport your heavy load?
              </h3>
              <p className="text-white/80 text-lg">
                Let's discuss your transportation needs today.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/contact"
                className="bg-[#e6c200] hover:bg-[#ffda22] text-[#0a2c5e] font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center"
              >
                Get a Quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:5551234567"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                (234) 906-0475-561
              </a>
            </div>
          </div>
        </div>
      </div>
     <br />
      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-5">
              <div className="bg-[#dad8cc] rounded-md p-2">
              <img src='https://brij.ng/logo.png' alt="Logo" className="h-20 w-20 object-contain" />
              </div>
            </div>
            <p className="mb-6 text-white/80 leading-relaxed">
              Our team of seasoned professionals understands the unique challenges of heavy load transportation and works diligently to ensure your cargo arrives safely and on time, every time.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-[#e6c200] hover:text-[#0a2c5e] h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#e6c200] hover:text-[#0a2c5e] h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#e6c200] hover:text-[#0a2c5e] h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 flex items-center">
              <span className="inline-block h-5 w-1 bg-[#e6c200] mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-[#e6c200] transition-colors flex items-center"
                >
                  <ArrowRightIcon className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/80 hover:text-[#e6c200] transition-colors flex items-center"
                >
                  <ArrowRightIcon className="h-4 w-4 mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/fleet"
                  className="text-white/80 hover:text-[#e6c200] transition-colors flex items-center"
                >
                  <ArrowRightIcon className="h-4 w-4 mr-2" />
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-[#e6c200] transition-colors flex items-center"
                >
                  <ArrowRightIcon className="h-4 w-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-[#e6c200] transition-colors flex items-center"
                >
                  <ArrowRightIcon className="h-4 w-4 mr-2" />
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5 flex items-center">
              <span className="inline-block h-5 w-1 bg-[#e6c200] mr-3"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-white/10 p-2 rounded-md mr-3 mt-0.5">
                  <MapPinIcon className="h-5 w-5 text-[#e6c200]" />
                </div>
                <div>
                  <p className="text-white/80">
                    5 Tunde Abimbola Street,
                    <br />
                   Magodo Phase 2, Lagos, Nigeria
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="bg-white/10 p-2 rounded-md mr-3">
                  <PhoneIcon className="h-5 w-5 text-[#e6c200]" />
                </div>
                <a
                  href="tel:5551234567"
                  className="text-white/80 hover:text-[#e6c200] transition-colors"
                >
                  (234) 906-0475-561
                </a>
              </li>
              <li className="flex items-center">
                <div className="bg-white/10 p-2 rounded-md mr-3">
                  <MailIcon className="h-5 w-5 text-[#e6c200]" />
                </div>
                <a
                  href="mailto:info@heavyloadlogistics.com"
                  className="text-white/80 hover:text-[#e6c200] transition-colors"
                >
                  info@Brij.ng
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-5 flex items-center">
              <span className="inline-block h-5 w-1 bg-[#e6c200] mr-3"></span>
              Newsletter
            </h3>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for industry insights and company
              updates.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              {subscribed ? (
                <div className="bg-green-600/20 text-green-400 py-3 px-4 rounded-md flex items-center">
                  <CheckIcon className="h-5 w-5 mr-2" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-md py-2 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#e6c200]"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 bg-[#e6c200] hover:bg-[#ffda22] text-[#0a2c5e] font-medium px-4 rounded-md transition-colors"
                  >
                    Subscribe
                  </button>
                </>
              )}
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Brij.ng. All rights
            reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-6">
            <a
              href="#"
              className="text-white/60 hover:text-[#e6c200] text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-[#e6c200] text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-[#e6c200] text-sm transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
