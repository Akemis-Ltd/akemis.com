import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/images/logo.png"
                alt="Akemis Logo"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#services" className="text-slate-600 hover:text-[#003366] font-medium">Services</a>
              <a href="#about" className="text-slate-600 hover:text-[#003366] font-medium">About</a>
              <a href="#contact" className="bg-[#CD2653] text-white px-6 py-2 rounded-full font-medium hover:bg-[#A11D40] transition-colors shadow-md">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Carousel */}
      <section className="pt-20">
        <HeroCarousel />
      </section>

      {/* "What we do" Bar */}
      <section className="bg-[#003366] py-8 text-center">
        <h2 className="text-3xl text-white font-light tracking-wide">What we do</h2>
      </section>

      {/* Intro Text */}
      <section className="py-16 max-w-4xl mx-auto px-6 text-center">
        <p className="text-lg text-slate-600 leading-relaxed">
          Established in 2003 in Hong Kong, <span className="font-bold text-[#003366]">Akemis</span> global consulting helps clients to address their critical challenges and become high-performance businesses. At <span className="font-bold text-[#003366]">Akemis</span> we ensure that our clients get a competitive advantage and lasting results. Our service offer includes: Consulting, Project management, Solution Integration, Web developments, Lead Generation and Business Process Outsourcing.
        </p>
      </section>

      {/* Z-Pattern Services */}
      <div id="services">
        {/* Service 1: Consulting (Text Left, Image Right) */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-[#003366] mb-4">Consulting, Project Management and Solution Integration.</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Focuses on the industry of ERP (SAP, Oracle PeopleSoft), CRM (PeopleSoft CRM), Saas, BI. As ERP specialists, our experience goes beyond providing resources on your project. We also build teams, implement and manage projects. We find ad-hoc solutions for our customers and ensure their satisfaction in terms of cost and quality.
                </p>
                <a href="#contact" className="inline-block text-[#CD2653] font-semibold hover:underline">
                  Get a Consultation &rarr;
                </a>
              </div>
              <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/OUR-FIRMS_CONSULTING2_1000x667.jpg"
                  alt="Consulting Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: Web Dev (Image Left, Text Right) */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Objava36.jpg"
                  alt="Web Development"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#003366] mb-4">Web development, Lead Generation and BPO.</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Our outsourcing center in the Philippines provides website and applications developments, lead generation, web marketing and business process outsourcing.
                </p>
                <a href="#contact" className="inline-block text-[#CD2653] font-semibold hover:underline">
                  Request a Quote &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Know Us More / About */}
      <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-black/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-[#003366] mb-6">Know us more</h3>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            We are founded on principles that success can be measure through the financial growth of our clients. We want our clients to outperform their competitors in the market. We have a strong record of providing quality services on consulting, outsourcing and invoicing for our diverse clients. We are fully committed to provide high quality of work that ensures a high degree of accountability. We do not only provide a cheaper service but we find solutions for your very specific needs.
          </p>
        </div>
      </section>

      {/* Contact Section (Restored at bottom) */}
      <section id="contact" className="py-20 bg-[#003366] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Contact us today to discuss how we can help you achieve your goals.
          </p>
          <div className="bg-white rounded-xl p-8 max-w-md mx-auto shadow-2xl text-slate-900">
            <form className="space-y-4 text-left">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#CD2653] focus:border-transparent"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">How can we help?</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#CD2653] focus:border-transparent"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#CD2653] text-white font-bold py-3 rounded-lg hover:bg-[#A11D40] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-center">
        <p>&copy; 2025 Akemis Limited. All rights reserved.</p>
      </footer>
    </main>
  );
}
