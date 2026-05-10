import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white shadow-sm py-6">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Akemis"
              width={450}
              height={55}
              priority
              className="h-10 w-auto"
            />
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="font-medium text-gray-700 hover:text-[#CD2653] transition"
            >
              Services
            </a>
            <a
              href="#about"
              className="font-medium text-gray-700 hover:text-[#CD2653] transition"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-[#CD2653] text-white font-medium hover:bg-[#A11D40] transition shadow-lg"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero */}
        <HeroCarousel />

        {/* About */}
        <section
          id="about"
          className="py-24 bg-gray-50 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#CD2653]/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#003366]/5 blur-3xl" />
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold text-[#003366] mb-4">
                Know Us More
              </h2>
              <div className="w-24 h-1 bg-[#CD2653] mx-auto mb-10 rounded" />
              <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl shadow-gray-200/50 text-left border border-gray-100">
                <p className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed mb-6">
                  Established in 2003 in Hong Kong,{" "}
                  <span className="text-[#CD2653] font-bold">Akemis</span>{" "}
                  global consulting helps clients to address their critical
                  challenges and become high-performance businesses.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are founded on principles that success can be measured
                  through the financial growth of our clients. We want our
                  clients to outperform their competitors in the market. We have
                  a strong record of providing quality services on consulting,
                  outsourcing, and invoicing for our diverse clients.
                  <br />
                  <br />
                  We are fully committed to provide high quality of work that
                  ensures a high degree of accountability. We do not only
                  provide a cheaper service, but we find targeted solutions for
                  your very specific needs to ensure you get a competitive
                  advantage and lasting results.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                {[
                  { value: "20+", label: "Years Exp" },
                  { value: "50+", label: "Projects" },
                  { value: "Global", label: "Reach" },
                  { value: "100%", label: "Commitment" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center"
                  >
                    <span className="text-4xl font-black text-[#003366] mb-2">
                      {stat.value}
                    </span>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-extrabold text-[#003366] mb-4">
                Our Services
              </h2>
              <div className="w-24 h-1 bg-[#CD2653] mx-auto mb-6 rounded" />
              <p className="text-xl text-gray-600">
                We deliver comprehensive solutions tailored to optimize your
                operations, expand your reach, and drive measurable results.
              </p>
            </div>

            <div className="space-y-24">
              <ServiceRow
                imgSrc="/images/OUR-FIRMS_CONSULTING2_1000x667.jpg"
                imgAlt="Consulting, Project Management & Integration"
                reverse={false}
                title="Consulting, Project Management & Integration"
                body="Focuses on the industry of ERP (SAP, Oracle PeopleSoft), CRM (PeopleSoft CRM), SaaS, and BI. As experts, our experience goes beyond providing resources on your project. We also build teams, implement, and manage projects to find ad-hoc solutions for our customers and ensure complete satisfaction in quality and cost."
              />
              <ServiceRow
                imgSrc="/images/Objava36.jpg"
                imgAlt="Web Development, Lead Generation & BPO"
                reverse={true}
                title="Web Development, Lead Generation & BPO"
                body="Our dedicated outsourcing center in the Philippines provides professional website and applications development, targeted lead generation, strategic web marketing, and comprehensive business process outsourcing (BPO). We leverage modern technologies to build digital experiences that drive your business growth."
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-24 bg-[#003366] text-white relative"
        >
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/2 space-y-8 flex flex-col justify-center">
                <div>
                  <h2 className="text-4xl font-extrabold mb-4">
                    Ready to accelerate your business?
                  </h2>
                  <div className="w-24 h-1 bg-[#CD2653] mb-6 rounded" />
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Get in touch with our experts today. Whether you need an ERP
                    upgrade, targeted lead generation, or a robust new web
                    presence, Akemis delivers results.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#CD2653]/20 rounded-full flex items-center justify-center text-[#CD2653]">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Email Us</h4>
                    <a
                      href="mailto:contact@akemis.com"
                      className="text-gray-400 hover:text-[#CD2653] transition"
                    >
                      contact@akemis.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-slate-900">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Request a Free Consultation
                  </h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        id="name"
                        label="Full Name *"
                        type="text"
                        placeholder="John Doe"
                        required
                      />
                      <FormField
                        id="email"
                        label="Work Email *"
                        type="email"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                    <FormField
                      id="company"
                      label="Company Name"
                      type="text"
                      placeholder="Your Company Ltd"
                    />
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        How can we help you? *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell us about your project..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#CD2653] focus:border-[#CD2653] outline-none transition-all resize-none text-gray-900"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-bold text-lg transition-all bg-[#CD2653] hover:bg-[#A11D40] text-white shadow-lg"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#003366] text-white pt-16 pb-8 border-t border-slate-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2 space-y-4">
              <a href="/" className="inline-block bg-white p-4 rounded-xl">
                <Image
                  src="/images/logo.png"
                  alt="Akemis"
                  width={450}
                  height={55}
                  className="h-10 w-auto"
                />
              </a>
              <p className="text-gray-400 max-w-sm leading-relaxed">
                Global consulting firm helping clients address critical
                challenges and become high-performance businesses through
                tailored solutions.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#CD2653] transition"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-[#CD2653] transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-[#CD2653] transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white mb-6">Connect</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Hong Kong Office</li>
                <li className="pt-2">
                  <a
                    href="mailto:contact@akemis.com"
                    className="hover:text-[#CD2653] transition"
                  >
                    contact@akemis.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
            <p>
              Copyright &copy; {new Date().getFullYear()} : All Rights Reserved
              by Akemis Limited
            </p>
            <div className="flex space-x-6">
              <a
                href="/creators/privacy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </a>
              <a
                href="/creators/terms"
                className="hover:text-white transition"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceRow({
  imgSrc,
  imgAlt,
  title,
  body,
  reverse,
}: {
  imgSrc: string;
  imgAlt: string;
  title: string;
  body: string;
  reverse: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-12 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-full md:w-1/2">
        <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl group">
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#003366]/10 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-6">
        <h3 className="text-3xl font-bold text-gray-900 leading-tight">
          {title}
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

function FormField({
  id,
  label,
  type,
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#CD2653] focus:border-[#CD2653] outline-none transition-all text-gray-900"
      />
    </div>
  );
}
