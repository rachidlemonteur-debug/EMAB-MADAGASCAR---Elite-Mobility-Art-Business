import { motion, useScroll, useTransform } from 'motion/react';
import { Star, Clock, Shield, MapPin, Phone, ChevronRight, MessageCircle, Car, Plane } from 'lucide-react';
import { useRef } from 'react';

const WHATSAPP_LINK = "https://wa.me/261349524264";

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5 backdrop-blur-xl bg-dark/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="font-serif text-2xl font-bold tracking-wider cursor-pointer"
        >
          EMAB<span className="text-gold">.</span>
        </motion.div>
        <motion.a 
          whileHover={{ scale: 1.05, backgroundColor: "#C9A84C", color: "#0a0a0a" }}
          whileTap={{ scale: 0.95 }}
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full border border-gold/50 text-gold transition-colors duration-300 text-xs sm:text-sm font-medium tracking-wide bg-gold/10 sm:bg-transparent"
        >
          Réserver
        </motion.a>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with slow zoom and parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 origin-center"
      >
        <motion.img 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Black SUV" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 text-xs font-medium tracking-widest uppercase text-gold border-gold/20"
          >
            <MapPin size={14} />
            <span>Antananarivo, Madagascar</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] mb-6">
            L'excellence du <br />
            <span className="text-gold italic font-light">transport VIP</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-xl font-light leading-relaxed">
            Elite Mobility & Art Business. Votre partenaire de confiance pour des déplacements premium et un accompagnement sur-mesure 24h/24.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-dark rounded-full font-medium hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(201,168,76,0.3)]"
            >
              <MessageCircle size={20} />
              Réserver sur WhatsApp
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 glass rounded-full font-medium transition-colors duration-300"
            >
              Nos services
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {[
            { value: "5/5", label: "Excellence", icon: <Star className="fill-gold text-gold" size={24} /> },
            { value: "24/7", label: "Disponibilité" },
            { value: "8", label: "Avis Google" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.8, type: "spring", bounce: 0.4 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0 cursor-default"
            >
              <div className="text-4xl font-serif text-gold mb-2 flex items-center gap-2">
                {stat.value} {stat.icon}
              </div>
              <div className="text-sm text-white/50 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Car size={32} strokeWidth={1.5} />,
      title: "Transport VIP",
      desc: "Déplacements professionnels et personnels dans un confort absolu avec notre flotte de véhicules premium."
    },
    {
      icon: <Shield size={32} strokeWidth={1.5} />,
      title: "Chauffeur Privé",
      desc: "Des chauffeurs expérimentés, discrets et professionnels à votre entière disposition pour tous vos trajets."
    },
    {
      icon: <Plane size={32} strokeWidth={1.5} />,
      title: "Transfert Aéroport",
      desc: "Accueil personnalisé et transfert fluide depuis ou vers l'aéroport international d'Ivato."
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative z-20 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Nos Services</h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            className="h-0.5 bg-gold mx-auto"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 + idx * 0.15, duration: 0.8, type: "spring", bounce: 0.4 }}
              whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.08)" }}
              className="glass p-8 rounded-2xl transition-colors duration-500 group cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-dark transition-colors duration-500 shadow-[0_0_15px_rgba(201,168,76,0.1)] group-hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-serif mb-4">{service.title}</h3>
              <p className="text-white/60 font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-dark relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Pourquoi choisir <br/><span className="text-gold italic">EMAB ?</span></h2>
            <p className="text-white/60 font-light mb-10 text-lg">
              Nous redéfinissons les standards du transport privé à Madagascar en alliant luxe, sécurité et ponctualité.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: <Clock size={24} />, title: "Disponibilité 24h/24", desc: "Un service continu pour répondre à vos besoins de mobilité à toute heure du jour et de la nuit." },
                { icon: <Car size={24} />, title: "Flotte Premium", desc: "Des SUV et berlines noirs, rigoureusement entretenus pour garantir votre confort et sécurité." },
                { icon: <Star size={24} />, title: "Service 5 Étoiles", desc: "Une attention particulière aux détails et un accompagnement personnalisé pour chaque client." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.15, duration: 0.6, type: "spring" }}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 group cursor-default"
                >
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="mt-1 text-gold group-hover:text-white transition-colors duration-300"
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 group-hover:text-gold transition-colors duration-300">{item.title}</h4>
                    <p className="text-white/50 font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="relative h-[600px] rounded-3xl overflow-hidden group"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1974&auto=format&fit=crop" 
              alt="Luxury Car Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border border-white/10 rounded-3xl z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500 z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      name: "Jean-Marc D.",
      role: "Voyageur d'affaires",
      text: "Un service impeccable. Le chauffeur m'attendait à l'aéroport malgré le retard de mon vol. Véhicule très propre et conduite sécurisante."
    },
    {
      name: "Sophie L.",
      role: "Expatriée",
      text: "Je fais appel à EMAB pour tous mes déplacements professionnels à Tana. La ponctualité et le professionnalisme sont toujours au rendez-vous."
    },
    {
      name: "Rakoto M.",
      role: "Client régulier",
      text: "Le meilleur service de transport VIP de la capitale. Discrétion absolue et véhicules haut de gamme. Je recommande vivement."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white/[0.02] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Avis Clients</h2>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", bounce: 0.5 }}
              >
                <Star className="fill-gold text-gold" size={20} />
              </motion.div>
            ))}
          </div>
          <p className="text-white/50 font-light">Basé sur nos avis Google</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 + idx * 0.15, duration: 0.8, type: "spring", bounce: 0.4 }}
              whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.08)" }}
              className="glass p-8 rounded-2xl cursor-default transition-colors duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-gold text-gold" size={16} />
                ))}
              </div>
              <p className="text-white/80 font-light italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <div className="font-medium text-gold">{review.name}</div>
                <div className="text-sm text-white/40">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      className="border-t border-white/10 bg-black pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="font-serif text-3xl font-bold tracking-wider mb-6">
              EMAB<span className="text-gold">.</span>
            </div>
            <p className="text-white/50 font-light max-w-sm mb-8">
              Elite Mobility & Art Business. L'excellence du transport VIP à Madagascar.
            </p>
            <div className="space-y-4 text-white/70 font-light">
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 cursor-default">
                <MapPin size={18} className="text-gold" />
                <span>Antananarivo, Madagascar</span>
              </motion.div>
              <motion.a 
                whileHover={{ x: 5, color: "#C9A84C" }} 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-fit"
              >
                <Phone size={18} className="text-gold" />
                <span>+261 34 95 242 64</span>
              </motion.a>
            </div>
          </div>
          
          <div className="flex md:justify-end items-end">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-dark rounded-full font-medium hover:bg-gold transition-colors duration-300"
            >
              Contactez-nous
              <ChevronRight size={18} />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 font-light">
          <div>© {new Date().getFullYear()} EMAB Madagascar. Tous droits réservés.</div>
          <div>Design premium minimaliste</div>
        </div>
      </div>
    </motion.footer>
  );
}

function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5 mt-0.5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </motion.a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-gold/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Reviews />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
