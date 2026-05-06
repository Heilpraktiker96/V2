/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Version: 1.0.3 - Web3Forms Integration
 */

import React from "react";
import { motion } from "motion/react";
import { UserCheck, ShieldCheck, MoveHorizontal, CheckCircle2, Mail, MessageCircle, Phone } from "lucide-react";

export default function App() {
  const [formStatus, setFormStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("!!! CONTACT FORM SUBMISSION STARTED !!!");
    console.log("Provider: Web3Forms");
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);
    // Der access_key ist bereits im hidden input im Formular definiert.

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      console.log("Web3Forms response:", data);

      if (data.success) {
        setFormStatus("success");
      } else {
        console.error("Web3Forms error:", data);
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setFormStatus("error");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-[#1E88E5]/20">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <img 
                src="NTW%20Rail%20Logo.png" 
                alt="NTW Rail Logo" 
                className="h-16 w-auto object-contain"
              />
              <div className="hidden lg:block h-8 w-[1px] bg-slate-200"></div>
              <div className="hidden lg:block text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                Precision<br />Logistic
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 font-semibold">
              <a href="#about" className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-all nav-link">Über uns</a>
              <a href="#services" className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-all nav-link">Leistungen</a>
              <a href="#contact" className="px-6 py-2.5 bg-[#0A2442] text-white rounded-xl hover:bg-[#1E88E5] transition-all shadow-md active:scale-95">Kontakt</a>
            </div>
            <a href="mailto:dispo@ntw-rail.de" className="md:hidden text-[#1E88E5]">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 tech-grid opacity-30 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1598918231267-3c58223f669e?q=80&w=2670" 
            className="w-full h-full object-cover" 
            alt="Eisenbahn Logistik"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#1E88E5]/30 text-white font-semibold text-sm mb-6 border border-[#1E88E5]/50 backdrop-blur-sm">
              Deutschlandweit im Einsatz
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-xl">
              Netzwerk Triebfahrzeugführer & <br /><span className="text-[#E0E0E0]">Wagenmeister.</span> 
            </h1>
            <p className="text-xl text-white mb-10 leading-relaxed drop-shadow-lg max-w-2xl">
              NTW Rail - Ihr Partner für qualifiziertes Eisenbahnfachpersonal.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#services" 
                animate={{ 
                  backgroundColor: ["#1E88E5", "#0D47A1", "#1E88E5"],
                  scale: [1, 1.03, 1],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-[#1E88E5]/20 active:scale-95"
              >
                Mehr von uns
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#1E88E5] to-transparent"></div>
        </motion.div>
      </section>

      {/* Über uns Section */}
      <section id="about" className="relative py-24 bg-shared-tracks">
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px] z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3 bg-white/60 p-10 rounded-3xl border border-white/50 shadow-xl backdrop-blur-md"
            >
              <h2 className="text-sm font-bold text-[#1E88E5] uppercase tracking-widest mb-4">Über NTW Rail</h2>
              <h3 className="text-4xl font-bold mb-8 leading-snug text-[#0A2442]">NTW Rail – Wir halten Ihre Schienenlogistik auf Erfolgskurs</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                In unserer Branche kommt es auf Millimeter und Sekunden an – das wissen wir. Deshalb machen wir bei der Qualität keine Kompromisse. Sicherheit und Fachwissen sind für uns nicht nur Schlagworte, sondern die Basis für alles, was wir tun.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Wir sind ein junges, wachsendes Team und bringen genau die Energie mit, die es braucht, um Dinge voranzubringen.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Wo andere nur „Engpässe“ sehen, packen wir an: Wir überbrücken für Sie nicht einfach nur Lücken, sondern helfen Ihnen dabei, den Betrieb am Laufen zu halten und sogar noch eine Schippe draufzulegen. Bei NTW Rail trifft echte Logistik-Leidenschaft auf die Flexibilität eines modernen Unternehmens.
              </p>
            </motion.div>
            
            <div className="md:col-span-2 grid grid-cols-2 gap-6">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white/95 p-10 rounded-2xl border border-slate-100 shadow-lg text-center flex flex-col justify-center items-center"
              >
                <div className="text-sm font-semibold text-slate-700 uppercase tracking-wider leading-relaxed">
                  Präzision ohne Wenn und Aber
                </div>
              </motion.div>
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#0A2442] p-10 rounded-2xl text-white text-center shadow-2xl flex flex-col justify-center items-center"
              >
                <div className="text-[#E0E0E0] font-bold text-4xl mb-2">24/7</div>
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Einsatzbereitschaft</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen Section */}
      <section id="services" className="relative py-24 bg-shared-tracks">
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px] z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6 text-[#0A2442]">Unsere Kernkompetenzen</h2>
            <p className="text-slate-800 text-lg font-medium">Maßgeschneiderte Personallösungen für den modernen Schienenverkehr.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { 
                icon: <UserCheck className="w-8 h-8" />, 
                title: "Triebfahrzeugführer", 
                desc: "Erfahrene Lokführer für den Güterverkehr. Jahrelange Praxiserfahrung in diversen Baureihen und umfassende Streckenkenntnisse." 
              },
              { 
                icon: <ShieldCheck className="w-8 h-8" />, 
                title: "Wagenmeister", 
                desc: "Präzision bei jeder Prüfung. Unsere Wagenmeister gewähren durch technische Kontrollen die Betriebssicherheit Ihrer Züge." 
              },
              { 
                icon: <MoveHorizontal className="w-8 h-8" />, 
                title: "Rangierbegleiter", 
                desc: "Sicheres Rangieren und fachgerechte Zugbildung. Wir stellen qualifiziertes Personal für die Last-Mile-Logistik." 
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white/95 p-10 rounded-3xl shadow-xl border border-white hover:shadow-2xl transition-all group card-hover"
              >
                <div className="w-16 h-16 bg-[#1E88E5]/10 text-[#1E88E5] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1E88E5] group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0A2442]">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="contact" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0A2442] rounded-[3rem] p-10 md:p-16 text-white relative shadow-2xl overflow-hidden"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E88E5] opacity-10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-5xl font-bold mb-6 tracking-tight">Wir sind für Sie da</h2>
                <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-md">
                  Haben Sie Fragen zu unseren Leistungen oder interessieren Sie sich für eine Zusammenarbeit? Kontaktieren Sie uns direkt über Ihren bevorzugten Kanal.
                </p>
                
                <div className="grid grid-cols-1 gap-4 mb-8">
                  <a 
                    href="https://wa.me/491624681721" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group bg-[#25D366]/10 hover:bg-[#25D366] p-5 rounded-2xl transition-all duration-300 border border-[#25D366]/20"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#25D366] text-white rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-[#25D366] transition-colors">
                        <MessageCircle size={22} />
                      </div>
                      <div>
                        <div className="font-bold text-lg group-hover:text-white transition-colors">WhatsApp</div>
                        <div className="text-xs text-slate-400 group-hover:text-white/80 transition-colors">Direkter Chat</div>
                      </div>
                    </div>
                    <MoveHorizontal size={20} className="text-[#25D366] group-hover:text-white transition-colors" />
                  </a>

                  <a 
                    href="tel:+491624681721" 
                    className="flex items-center justify-between group bg-[#1E88E5]/10 hover:bg-[#1E88E5] p-5 rounded-2xl transition-all duration-300 border border-[#1E88E5]/20"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#1E88E5] text-white rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-[#1E88E5] transition-colors">
                        <Phone size={22} />
                      </div>
                      <div>
                        <div className="font-bold text-lg group-hover:text-white transition-colors">Telefon</div>
                        <div className="text-xs text-slate-400 group-hover:text-white/80 transition-colors">+49 (0) 162 4681721</div>
                      </div>
                    </div>
                    <MoveHorizontal size={20} className="text-[#1E88E5] group-hover:text-white transition-colors" />
                  </a>

                  <a 
                    href="mailto:dispo@ntw-rail.de" 
                    className="flex items-center justify-between group bg-white/5 hover:bg-white p-5 rounded-2xl transition-all duration-300 border border-white/10 hover:border-white"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white text-[#0A2442] rounded-xl flex items-center justify-center group-hover:bg-[#0A2442] group-hover:text-white transition-colors">
                        <Mail size={22} />
                      </div>
                      <div>
                        <div className="font-bold text-lg group-hover:text-[#0A2442] transition-colors">E-Mail</div>
                        <div className="text-xs text-slate-400 group-hover:text-[#0A2442]/60 transition-colors">dispo@ntw-rail.de</div>
                      </div>
                    </div>
                    <MoveHorizontal size={20} className="text-white group-hover:text-[#0A2442] transition-colors" />
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/10"
              >
                {formStatus === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 bg-[#1E88E5] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#1E88E5]/30">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Vielen Dank!</h3>
                    <p className="text-slate-300 text-lg">
                      Ihre Nachricht wurde erfolgreich übermittelt. Wir werden uns in Kürze bei Ihnen melden.
                    </p>
                    <button 
                      onClick={() => setFormStatus("idle")}
                      className="mt-8 text-sm text-[#1E88E5] hover:underline font-semibold"
                    >
                      Weitere Nachricht senden
                    </button>
                  </motion.div>
                ) : (
                  <form 
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                  >
                    <input type="hidden" name="access_key" value="4adc4fe8-1349-442d-8678-1ab17178f81c" />
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-400 ml-1">Name</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          required
                          placeholder="Ihr Name"
                          className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-400 ml-1">E-Mail</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          required
                          placeholder="ihre@email.de"
                          className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-400 ml-1">Betreff</label>
                      <input 
                        type="text" 
                        id="subject"
                        name="subject"
                        placeholder="Wie können wir helfen?"
                        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-400 ml-1">Nachricht</label>
                      <textarea 
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Ihre Nachricht an uns..."
                        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] transition-all resize-none"
                      ></textarea>
                    </div>

                    {formStatus === "error" && (
                      <p className="text-red-400 text-sm font-medium">Es gab einen Fehler. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.</p>
                    )}

                    <button 
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full bg-[#1E88E5] hover:bg-[#1976D2] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#1E88E5]/20 flex items-center justify-center gap-2 group active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formStatus === "submitting" ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>Nachricht senden</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <MoveHorizontal size={20} />
                          </motion.div>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center">
              <img 
                src="NTW%20Rail%20Logo.png" 
                alt="NTW Rail Logo" 
                className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            
            <div className="flex gap-10 text-sm font-semibold text-slate-500">
              <a href="impressum.html" className="hover:text-[#1E88E5] transition-colors">Impressum</a>
              <a href="datenschutz.html" className="hover:text-[#1E88E5] transition-colors">Datenschutz</a>
            </div>
            
            <div className="text-slate-400 text-sm font-medium">
              © {new Date().getFullYear()} NTW Rail GmbH. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
