import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Loader2, 
  CheckCircle2,
  Github,
  Twitter,
  Linkedin
} from "lucide-react";


export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "Web Development",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);


  const services = ["Web Development", "UI/UX Design", "Mobile App", "Consulting"];


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleServiceSelect = (service: string) => {
    setFormData({ ...formData, service });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating a network request
    setTimeout(() => {
      setSuccess(true);
      setFormData({ firstName: "", lastName: "", email: "", service: "Web Development", message: "" });
      setIsSubmitting(false);
      
      // Auto-hide success message
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };


  return (
    <section id="contact" className="relative py-24 bg-zinc-950 text-zinc-100 font-sans min-h-screen flex items-center">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-violet-500 opacity-20 blur-[100px]"></div>


      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <h2 className="text-3xl lg:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let's build something <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">
                extraordinary.
              </span>
            </h2>
            <p className="text-zinc-400 text-base mb-12 max-w-md leading-relaxed">
              We're currently accepting new projects. Fill out the form and our team will get back to you within 24 hours.
            </p>


            {/* Contact Info */}
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="p-4 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 transition-colors">
                  <Mail className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-zinc-500 mb-1">Email us at</p>
                  <a href="mailto:sandramalilo21@gmail.com" className="text-base font-semibold text-zinc-200 group-hover:text-violet-400 transition-colors">
                    sandramalilo21@gmail.com
                  </a>
                </div>
              </div>


              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="p-4 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 transition-colors">
                  <Phone className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-zinc-500 mb-1">Call us at</p>
                  <a href="tel:+254750050171" className="text-base font-semibold text-zinc-200 group-hover:text-violet-400 transition-colors">
                    +254 706825758
                  </a>
                </div>
              </div>


              <div className="flex items-start gap-4 group">
                <div className="p-4 rounded-full bg-zinc-900 border border-zinc-800">
                  <MapPin className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-zinc-500 mb-1">Find us at</p>
                  <p className="text-base font-semibold text-zinc-200">
                    Nairobi, Kiambu County<br />Kenya
                  </p>
                </div>
              </div>
            </div>


            <div className="mt-auto pt-8 border-t border-zinc-800/50 flex gap-4">
              <a href="#" className="p-2.5 bg-zinc-900 rounded-lg text-zinc-400 hover:text-white hover:bg-violet-600 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-zinc-900 rounded-lg text-zinc-400 hover:text-white hover:bg-violet-600 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-zinc-900 rounded-lg text-zinc-400 hover:text-white hover:bg-violet-600 transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </motion.div>


          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900/50 backdrop-blur-xl p-6 md:p-8 rounded-[2.5rem] border border-zinc-800 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-400">First Name</label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-zinc-950/50 border border-zinc-800 text-zinc-100 px-4 py-3 rounded-xl focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all text-sm"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-400">Last Name</label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-zinc-950/50 border border-zinc-800 text-zinc-100 px-4 py-3 rounded-xl focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all text-sm"
                    required
                  />
                </div>
              </div>


              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-400">Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-950/50 border border-zinc-800 text-zinc-100 px-4 py-3 rounded-xl focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all text-sm"
                  required
                />
              </div>


              {/* Service Selection */}
              <div className="space-y-2.5">
                <label className="text-xs font-medium text-zinc-400">What are you interested in?</label>
                <div className="flex flex-wrap gap-2.5">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceSelect(service)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-300 border ${
                        formData.service === service 
                          ? 'bg-violet-500/10 border-violet-500 text-violet-300' 
                          : 'bg-zinc-950/50 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>


              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-400">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-zinc-950/50 border border-zinc-800 text-zinc-100 px-4 py-3 rounded-xl focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all resize-none text-sm"
                  required
                />
              </div>


              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-violet-600 hover:bg-violet-500 text-white font-medium py-3.5 px-7 rounded-xl transition-all duration-300 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)] text-sm"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  <>
                    Send Request
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>


              <AnimatePresence>
                {success && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-x-8 bottom-8 flex items-center justify-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 py-3 rounded-xl backdrop-blur-md"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="font-medium text-xs">Thanks! We'll be in touch shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>


            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}