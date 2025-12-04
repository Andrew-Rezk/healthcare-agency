import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Monitor, 
  Server, 
  Wrench, 
  Activity, 
  ShieldCheck, 
  Clock, 
  Stethoscope, 
  Pill,
  ChevronRight,
  Send,
  CheckCircle2,
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.target);
    
    // YOUR REAL FORMSPREE LINK
    const endpoint = "https://formspree.io/f/myzrpwep";

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset(); // Clears the form inputs
      } else {
        // Formspree rejected it (usually spam protection)
        console.error("Formspree error");
        setFormStatus('idle');
        alert("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      console.error("Network error", error);
      setFormStatus('idle');
      alert("Error submitting form. Please check your internet connection.");
    }
    
    // Reset success message after 3 seconds
    setTimeout(() => setFormStatus('idle'), 3000);
  };
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Expertise', href: '#expertise' },
    // { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="font-sans text-slate-800 antialiased bg-slate-50 min-h-screen selection:bg-teal-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
<img 
  src="/logo.jpg" 
  alt="Logo" 
  className="h-10 w-auto rounded-lg object-contain" 
/>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Medi<span className="text-teal-600">Web</span> Solutions
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-teal-600 font-medium transition-colors text-sm uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-teal-600 hover:bg-slate-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-100/40 via-slate-50 to-slate-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                Accepting New Clinic Partners
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Digital Excellence for <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  Modern Healthcare
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We build, host, and maintain high-performance websites specifically designed for clinics, pharmacies, and medical practices. Secure, fast, and patient-focused.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-full text-white bg-teal-600 hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/30"
                >
                  Schedule a Consult
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#expertise"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-300 text-base font-semibold rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
                >
                  Why Us?
                </a>
              </div>
            </div>
            
            {/* Hero Visual Abstract */}
            <div className="lg:col-span-5 mt-12 lg:mt-0 relative">
              <div className="relative rounded-2xl bg-white shadow-2xl border border-slate-100 p-6 z-10">
                <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">secure-connection://clinic.com</div>
                </div>
                <div className="space-y-4">
                  <div className="h-32 bg-slate-100 rounded-lg w-full flex items-center justify-center">
                    <Activity className="h-10 w-10 text-teal-500 opacity-50" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-slate-50 rounded-lg w-full"></div>
                    <div className="h-20 bg-slate-50 rounded-lg w-full"></div>
                  </div>
                  <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                </div>
                
                {/* Floating Badges */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">Security</div>
                    <div className="text-sm font-bold text-slate-800">100% Compliant</div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">Uptime</div>
                    <div className="text-sm font-bold text-slate-800">99.99%</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-teal-200/30 blur-3xl rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-slate-900 sm:text-4xl">
              Everything Your Practice Needs Online
            </p>
            <p className="mt-4 text-lg text-slate-600">
              We handle the entire digital lifecycle so you can focus on patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Development</h3>
              <p className="text-slate-600 leading-relaxed">
                Tailored websites built on modern frameworks. We create patient portals, appointment booking integrations, and mobile-responsive designs that look great on any device.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="h-12 w-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Server className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Secure Hosting</h3>
              <p className="text-slate-600 leading-relaxed">
                Fast, reliable, and secure cloud hosting optimized for healthcare. We ensure your site loads instantly and data remains protected with SSL encryption and regular backups.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ongoing Maintenance</h3>
              <p className="text-slate-600 leading-relaxed">
                Never worry about updates again. We provide 24/7 monitoring, content updates, security patches, and technical support whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise / Why Us Section */}
      <section id="expertise" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Specialized for the <br />
                <span className="text-teal-400">Healthcare Industry</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                General web agencies don't understand the unique constraints of the medical field. We do. We build trust through design and ensure your digital presence reflects the professionalism of your practice.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Stethoscope className="h-8 w-8 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Clinic-First Approach</h4>
                    <p className="text-slate-400">Layouts optimized for patient conversion, from finding directions to booking appointments.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Pill className="h-8 w-8 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Pharmacy Solutions</h4>
                    <p className="text-slate-400">Integration with prescription refill request forms</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <ShieldCheck className="h-8 w-8 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Privacy Focused</h4>
                    <p className="text-slate-400">We prioritize data minimization and security best practices in every line of code.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
               <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <Activity className="h-5 w-5 text-teal-400" />
                 Our Impact
               </h3>
               <div className="grid grid-cols-2 gap-6">
                 <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                    <div className="text-3xl font-bold text-white mb-1">40%</div>
                    <div className="text-sm text-slate-400">Avg. Increase in Patient Inquiries</div>
                 </div>
                 <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                    <div className="text-3xl font-bold text-white mb-1">0.5s</div>
                    <div className="text-sm text-slate-400">Average Page Load Time</div>
                 </div>
                 <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                    <div className="text-sm text-slate-400">Uptime & Support Monitoring</div>
                 </div>
                 <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                    <div className="text-3xl font-bold text-white mb-1">50+</div>
                    <div className="text-sm text-slate-400">Clinics Served</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

{/* Portfolio / Work Section - CURRENTLY HIDDEN
      <section id="work" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">Selected Work</h2>
              <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-slate-900 sm:text-4xl">
                Proven Results for Healthcare Providers
              </p>
            </div>
            <a href="#contact" className="hidden md:flex items-center gap-2 text-slate-600 hover:text-teal-600 font-medium transition-colors">
              View all case studies <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-48 bg-emerald-50 relative overflow-hidden flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                  <div className="w-3/4 h-3/4 bg-white rounded-t-xl shadow-sm border border-slate-100 p-4 transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                    <div className="flex gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                    </div>
                    <div className="space-y-2">
                        <div className="w-full h-2 bg-slate-100 rounded"></div>
                        <div className="w-2/3 h-2 bg-slate-100 rounded"></div>
                        <div className="flex gap-2 mt-4">
                          <div className="w-8 h-8 rounded bg-emerald-100"></div>
                          <div className="flex-1 space-y-1">
                              <div className="w-full h-1.5 bg-slate-100 rounded"></div>
                              <div className="w-3/4 h-1.5 bg-slate-100 rounded"></div>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm">
                    <Pill className="h-5 w-5 text-emerald-600" />
                  </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                    <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase bg-emerald-50 px-3 py-1 rounded-full">Pharmacy</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">City Central Pharmacy</h3>
                <p className="text-slate-600 mb-6 flex-1">
                  Automated prescription refill system that reduced phone call volume by 60% and improved inventory tracking.
                </p>
                <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                    <div className="text-sm font-medium text-slate-900">Custom Web App</div>
                    <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-teal-600 transition-colors" />
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-48 bg-blue-50 relative overflow-hidden flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <div className="w-3/4 h-3/4 bg-white rounded-t-xl shadow-sm border border-slate-100 p-4 transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                    <div className="flex justify-between items-center mb-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                        <div className="w-16 h-2 bg-slate-100 rounded"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 bg-slate-50 rounded border border-slate-100"></div>
                        <div className="h-16 bg-slate-50 rounded border border-slate-100"></div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm">
                    <Stethoscope className="h-5 w-5 text-blue-600" />
                  </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                    <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full">Cardiology Clinic</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">Oak Heart Specialists</h3>
                <p className="text-slate-600 mb-6 flex-1">
                  Secure patient portal integration allowing for HIPAA-compliant document sharing and appointment history.
                </p>
                <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                    <div className="text-sm font-medium text-slate-900">Portal Integration</div>
                    <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-teal-600 transition-colors" />
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-48 bg-indigo-50 relative overflow-hidden flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                  <div className="w-3/4 h-3/4 bg-white rounded-t-xl shadow-sm border border-slate-100 p-4 transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                      <div className="w-full h-8 bg-indigo-50 mb-3 rounded flex items-center px-2">
                        <div className="w-1/2 h-2 bg-indigo-200 rounded"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex gap-2 items-center">
                            <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                            <div className="w-full h-1.5 bg-slate-100 rounded"></div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                            <div className="w-full h-1.5 bg-slate-100 rounded"></div>
                        </div>
                      </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm">
                    <Monitor className="h-5 w-5 text-indigo-600" />
                  </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                    <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full">Multi-Location</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">Valley Dental Group</h3>
                <p className="text-slate-600 mb-6 flex-1">
                  A high-speed, SEO-optimized site unifying 5 locations, resulting in a 40% increase in organic local traffic.
                </p>
                <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                    <div className="text-sm font-medium text-slate-900">SEO & Identity</div>
                    <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-teal-600 transition-colors" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <a href="#contact" className="inline-flex items-center gap-2 text-slate-600 hover:text-teal-600 font-medium transition-colors">
              View all case studies <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      */}

      {/* Process Section */}
      <section id="process" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">The Workflow</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-slate-900">
              Simple, Transparent, Fast
            </h3>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { title: 'Discovery', desc: 'We learn about your practice and goals.' },
                { title: 'Design', desc: 'We create a mock-up tailored to your brand.' },
                { title: 'Development', desc: 'We build your site using the latest tech.' },
                { title: 'Launch', desc: 'We go live and handle the hosting.' }
              ].map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4 text-lg">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-teal-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="p-10 md:p-12 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Let's Elevate Your Practice</h2>
                  <p className="text-teal-100 mb-8 text-lg">
                    Ready to modernize your clinic or pharmacy? Fill out the form, and we'll get back to you within 24 hours.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-teal-50">
                      <div className="bg-teal-500/50 p-2 rounded-full">
                        <Monitor className="h-5 w-5" />
                      </div>
                      <span>Free Initial Consultation</span>
                    </div>
                    <div className="flex items-center gap-3 text-teal-50">
                      <div className="bg-teal-500/50 p-2 rounded-full">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <span>No Commitment Required</span>
                    </div>
                  </div>
                </div>
                <div className="mt-12 text-sm text-teal-200">
                  &copy; {new Date().getFullYear()} MediWeb Solutions.
                </div>
              </div>

              <div className="bg-white p-10 md:p-12">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
                      placeholder="Dr. Jane Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name='email'
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
                      placeholder="jane@clinic.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-1">Practice Type</label>
                    <select
                      id="type"
                      name="type"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
                    >
                      <option>General Practice Clinic</option>
                      <option>Pharmacy</option>
                      <option>Specialist Clinic</option>
                      <option>Dental Practice</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none resize-none"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    className={`w-full py-4 rounded-lg font-bold text-white transition-all transform flex items-center justify-center gap-2
                      ${formStatus === 'success' ? 'bg-green-500' : 'bg-slate-900 hover:bg-slate-800 hover:-translate-y-1 shadow-lg'}
                      disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
                    `}
                  >
                    {formStatus === 'idle' && (
                      <>
                        Send Request <Send className="h-4 w-4" />
                      </>
                    )}
                    {formStatus === 'submitting' && 'Processing...'}
                    {formStatus === 'success' && (
                      <>
                        Message Sent <CheckCircle2 className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
<img 
  src="/logo.jpg" 
  alt="Logo" 
  className="h-10 w-auto rounded-lg object-contain" 
/>
            <span className="font-bold text-lg text-slate-900">
              Medi<span className="text-teal-600">Web</span>
            </span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500">
            {/* <a href="#" className="hover:text-teal-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-teal-600 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Twitter</a> */}
          </div>
          <div className="text-slate-400 text-sm">
            Designed for Healthcare.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;