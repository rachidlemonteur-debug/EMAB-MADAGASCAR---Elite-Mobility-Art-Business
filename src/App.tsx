import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { ReactLenis } from 'lenis/react';
import { Star, Clock, Shield, MapPin, Phone, ChevronRight, MessageCircle, Car, Plane, ChevronDown, Mail, User, Menu, X, ArrowUp } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import TransportVIP from './pages/TransportVIP';
import About from './pages/About';
import FAQPage from './pages/FAQPage';
import Reservation from './pages/Reservation';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';

const WHATSAPP_LINK = "https://wa.me/261349524264";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5 backdrop-blur-xl bg-dark/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link to="/" onClick={closeMenu}>
          <motion.div 
            whileHover="hover"
            className="font-serif text-2xl font-bold tracking-wider cursor-pointer flex items-center"
          >
            EMAB
            <motion.span 
              variants={{
                hover: { 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                  transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }
              }}
              className="text-gold inline-block origin-bottom"
            >
              .
            </motion.span>
          </motion.div>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/80">
          <Link to="/" className="hover:text-gold transition-colors">Accueil</Link>
          <a href="/#services" className="hover:text-gold transition-colors">Services</a>
          <a href="/#flotte" className="hover:text-gold transition-colors">Notre Flotte</a>
          <a href="/#avantages" className="hover:text-gold transition-colors">Pourquoi EMAB</a>
          <a href="/#avis" className="hover:text-gold transition-colors">Avis Clients</a>
          <Link to="/reservation" className="hover:text-gold transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:flex items-center gap-2 text-gold font-medium text-sm">
            <Phone size={16} />
            <a href="tel:+261349524264" className="hover:text-white transition-colors">+261 34 95 242 64</a>
          </div>
          <Magnetic>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "#C9A84C", color: "#0a0a0a" }}
              whileTap={{ scale: 0.95 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full border border-gold/50 text-gold transition-colors duration-300 text-xs sm:text-sm font-medium tracking-wide bg-gold/10 sm:bg-transparent"
            >
              Réserver
            </motion.a>
          </Magnetic>
          <button 
            className="lg:hidden text-white p-1 hover:text-gold transition-colors"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
    </motion.nav>

    <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[60] bg-dark flex flex-col"
        >
          <div className="h-20 px-4 sm:px-6 flex items-center justify-between border-b border-white/10">
        <Link to="/" onClick={closeMenu}>
          <motion.div 
            whileHover="hover"
            className="font-serif text-2xl font-bold tracking-wider cursor-pointer flex items-center"
          >
            EMAB
            <motion.span 
              variants={{
                hover: { 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                  transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }
              }}
              className="text-gold inline-block origin-bottom"
            >
              .
            </motion.span>
          </motion.div>
        </Link>
            <button 
              className="text-white p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              onClick={closeMenu}
              aria-label="Fermer le menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6 text-lg font-medium">
            <Link to="/" onClick={closeMenu} className="hover:text-gold transition-colors">Accueil</Link>
            <a href="/#services" onClick={closeMenu} className="hover:text-gold transition-colors">Services</a>
            <a href="/#flotte" onClick={closeMenu} className="hover:text-gold transition-colors">Notre Flotte</a>
            <a href="/#avantages" onClick={closeMenu} className="hover:text-gold transition-colors">Pourquoi EMAB</a>
            <a href="/#avis" onClick={closeMenu} className="hover:text-gold transition-colors">Avis Clients</a>
            <div className="h-px bg-white/10 my-2"></div>
            <Link to="/a-propos" onClick={closeMenu} className="hover:text-gold transition-colors">À Propos d'EMAB</Link>
            <Link to="/services/transport-vip" onClick={closeMenu} className="hover:text-gold transition-colors">Transport VIP</Link>
            <Link to="/faq" onClick={closeMenu} className="hover:text-gold transition-colors">FAQ</Link>
            <Link to="/reservation" onClick={closeMenu} className="hover:text-gold transition-colors text-gold">Contact & Réservation</Link>
          </div>
          <div className="p-6 border-t border-white/10 mt-auto">
            <div className="flex items-center gap-3 text-gold mb-4">
              <Phone size={20} />
              <a href="tel:+261349524264" className="text-lg">+261 34 95 242 64</a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

function TextReveal({ text, className }: { text: string, className?: string }) {
  const words = text.split(" ");
  return (
    <motion.div className={className} style={{ display: "inline-block", overflow: "hidden" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: "100%", rotate: 5 },
            visible: { 
              opacity: 1, 
              y: 0, 
              rotate: 0,
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
            }
          }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
}

function Magnetic({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
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
          src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2064&auto=format&fit=crop" 
          alt="Luxury Black SUV" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4
              }
            }
          }}
          className="max-w-3xl"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 text-xs font-medium tracking-widest uppercase text-gold border-gold/20"
          >
            <MapPin size={14} />
            <span>Antananarivo, Madagascar</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
          >
            <TextReveal text="EMAB Madagascar : Votre Partenaire de Confiance pour un" />
            <br />
            <motion.span 
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="text-gold italic font-light inline-block"
            >
              Transport VIP d'Excellence à Antananarivo
            </motion.span>
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="text-lg sm:text-xl text-white/70 mb-10 max-w-xl font-light leading-relaxed"
          >
            Découvrez le luxe, la sécurité et la ponctualité avec nos chauffeurs privés et notre flotte de véhicules haut de gamme à Madagascar. Service 24h/24 pour vos déplacements professionnels et personnels.
          </motion.p>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Magnetic>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-dark rounded-full font-medium hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(201,168,76,0.3)] w-full sm:w-auto"
              >
                <Car size={20} />
                Réserver un Chauffeur Privé
              </motion.a>
            </Magnetic>
            <Magnetic>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass rounded-full font-medium transition-colors duration-300 w-full sm:w-auto"
              >
                Découvrir nos Services VIP
              </motion.a>
            </Magnetic>
          </motion.div>
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
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
      desc: "Voyagez en toute sérénité. Nos berlines et SUV noirs, impeccablement entretenus, vous garantissent un confort et une discrétion absolus pour tous vos trajets de transport VIP à Madagascar.",
      link: "/services/transport-vip"
    },
    {
      icon: <Shield size={32} strokeWidth={1.5} />,
      title: "Chauffeur Privé",
      desc: "Profitez d'un service sur-mesure avec nos chauffeurs professionnels à Antananarivo. Ponctuels, discrets et connaissant parfaitement la ville, ils sont à votre disposition 24h/24.",
      link: "/reservation"
    },
    {
      icon: <Plane size={32} strokeWidth={1.5} />,
      title: "Transfert Aéroport",
      desc: "Arrivez et partez sans stress. Bénéficiez d'un accueil VIP à l'aéroport d'Ivato et d'un transfert rapide et confortable vers votre destination. Suivi des vols inclus.",
      link: "/reservation"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative z-20 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Nos Services de Transport VIP à Madagascar</h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="h-0.5 bg-gold mx-auto"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: 0.1 + idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
              <p className="text-white/60 font-light leading-relaxed mb-6">
                {service.desc}
              </p>
              {service.link && (
                <Link to={service.link} className="text-gold font-medium text-sm hover:text-white transition-colors flex items-center gap-1 w-fit">
                  En savoir plus <ChevronRight size={16} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} id="avantages" className="py-24 md:py-32 bg-dark relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Pourquoi Choisir EMAB pour votre <br/><span className="text-gold italic">Transport VIP à Madagascar ?</span></h2>
            <p className="text-white/60 font-light mb-10 text-lg">
              Nous redéfinissons les standards du transport privé à Madagascar en alliant luxe, sécurité et ponctualité pour votre transport à Madagascar.
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
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5, ease: "easeOut" }}
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
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[600px] rounded-3xl overflow-hidden group"
          >
            <motion.img 
              style={{ y, scale: 1.1 }}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop" 
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
    <section id="avis" className="py-24 md:py-32 bg-white/[0.02] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Avis Clients sur nos Services de Chauffeur Privé à Antananarivo</h2>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 0.2 + i * 0.05, duration: 0.4, ease: "backOut" }}
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
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: 0.1 + idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

function Fleet() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  const images = [
    { src: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?q=80&w=2072&auto=format&fit=crop", alt: "Toyota Land Cruiser EMAB Madagascar", title: "Toyota Land Cruiser" },
    { src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop", alt: "Mercedes-Maybach EMAB", title: "Mercedes-Maybach" },
    { src: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop", alt: "Porsche Cayenne VIP", title: "Porsche Cayenne" },
  ];

  return (
    <section ref={targetRef} id="flotte" className="relative h-[300vh] bg-black/50">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-32 left-0 w-full px-6 z-10 pointer-events-none">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Notre Flotte d'Excellence</h2>
            <div className="w-12 h-0.5 bg-gold mb-6"></div>
          </div>
        </div>
        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-24 w-[300vw] items-center">
          {images.map((img, idx) => (
            <div key={idx} className="relative w-[85vw] md:w-[60vw] h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden flex-shrink-0 group">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex items-end p-8 md:p-12">
                <div>
                  <div className="text-gold font-serif text-2xl md:text-4xl mb-2">{img.title}</div>
                  <div className="text-white/60 font-light text-lg">Service VIP Madagascar</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="py-24 md:py-32 bg-dark relative z-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Découvrez EMAB : Votre Partenaire de <span className="text-gold italic">Transport de Luxe à Madagascar</span></h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            Fondée sur l'exigence et la passion du service, Elite Mobility & Art Business (EMAB) s'impose comme la référence du transport VIP à Antananarivo. Notre mission est de vous offrir bien plus qu'un simple trajet : une expérience de voyage exceptionnelle, alliant discrétion, ponctualité et confort absolu.
          </p>
          <Link 
            to="/a-propos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white rounded-full font-medium hover:bg-white/10 transition-colors duration-300"
          >
            En savoir plus
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Quels types de véhicules proposez-vous ?", a: "Notre flotte est composée de SUV et de berlines haut de gamme, de couleur noire, parfaitement entretenus pour garantir votre confort et sécurité." },
    { q: "Vos chauffeurs parlent-ils des langues étrangères ?", a: "Oui, nos chauffeurs professionnels sont bilingues (Français, Anglais) pour assurer une communication fluide avec notre clientèle internationale." },
    { q: "Comment réserver un transfert aéroport ?", a: "Vous pouvez réserver directement via WhatsApp ou notre formulaire de contact en nous indiquant les détails de votre vol. Notre chauffeur vous attendra avec une pancarte à votre nom." },
    { q: "Êtes-vous disponibles la nuit ?", a: "Absolument. Nos services de chauffeur privé et de transport VIP sont disponibles 24h/24 et 7j/7 sur réservation." }
  ];

  return (
    <section className="py-24 md:py-32 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Questions Fréquentes sur nos <span className="text-gold italic">Services VIP à Antananarivo</span></h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} idx={idx} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/faq" className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white rounded-full font-medium hover:bg-white/10 transition-colors duration-300">
            Voir toutes les FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, idx }: { question: string, answer: string, idx: number, key?: string | number }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ delay: idx * 0.05, duration: 0.5, ease: "easeOut" }}
      className={`glass rounded-2xl overflow-hidden transition-all duration-500 border ${isOpen ? 'bg-white/10 border-gold/30 shadow-[0_0_15px_rgba(201,168,76,0.1)]' : 'border-white/5'}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`font-medium text-lg transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-white group-hover:text-gold/80'}`}>{question}</span>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }} 
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`flex-shrink-0 ml-4 transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-white/50 group-hover:text-gold/80'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-5 text-white/70 font-light leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-dark relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Contactez EMAB pour votre <span className="text-gold italic">Réservation de Transport VIP</span></h2>
            <p className="text-white/60 font-light mb-10 text-lg">
              Notre équipe est à votre disposition 24h/24 pour répondre à vos demandes de devis et organiser vos déplacements sur-mesure à Madagascar.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">Téléphone / WhatsApp</div>
                  <div className="font-medium">+261 34 95 242 64</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">Email</div>
                  <div className="font-medium">contact@emab-madagascar.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">Adresse</div>
                  <div className="font-medium">Antananarivo, Madagascar</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass p-8 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Nom complet</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gold transition-colors" placeholder="Votre nom" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Téléphone</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gold transition-colors" placeholder="Votre numéro" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70">Service souhaité</label>
                <div className="relative">
                  <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                    <option value="vip" className="bg-dark">Transport VIP</option>
                    <option value="chauffeur" className="bg-dark">Chauffeur Privé</option>
                    <option value="aeroport" className="bg-dark">Transfert Aéroport</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70">Message ou détails du trajet</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Dates, lieux, nombre de passagers..."></textarea>
              </div>
              <button className="w-full py-4 bg-gold text-dark rounded-xl font-medium hover:bg-white transition-colors duration-300">
                Demander un devis
              </button>
            </form>
          </motion.div>
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
            <Magnetic>
              <Link 
                to="/reservation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-dark rounded-full font-medium hover:bg-gold transition-colors duration-300"
              >
                Contactez-nous
                <ChevronRight size={18} />
              </Link>
            </Magnetic>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 font-light">
          <div>© {new Date().getFullYear()} EMAB Madagascar. Tous droits réservés.</div>
          <div className="flex gap-6">
            <Link to="/mentions-legales" className="hover:text-gold transition-colors">Mentions Légales</Link>
            <Link to="/politique-confidentialite" className="hover:text-gold transition-colors">Politique de Confidentialité</Link>
          </div>
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

function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-gold py-4 flex items-center border-y border-white/10 z-20">
      <motion.div
        className="flex whitespace-nowrap text-dark font-serif text-2xl md:text-4xl font-bold tracking-widest uppercase"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        <span className="px-8">LUXE</span>
        <span className="px-8">•</span>
        <span className="px-8">SÉCURITÉ</span>
        <span className="px-8">•</span>
        <span className="px-8">PONCTUALITÉ</span>
        <span className="px-8">•</span>
        <span className="px-8">DISCRÉTION</span>
        <span className="px-8">•</span>
        <span className="px-8">EXCELLENCE</span>
        <span className="px-8">•</span>
        {/* Duplicate for seamless loop */}
        <span className="px-8">LUXE</span>
        <span className="px-8">•</span>
        <span className="px-8">SÉCURITÉ</span>
        <span className="px-8">•</span>
        <span className="px-8">PONCTUALITÉ</span>
        <span className="px-8">•</span>
        <span className="px-8">DISCRÉTION</span>
        <span className="px-8">•</span>
        <span className="px-8">EXCELLENCE</span>
        <span className="px-8">•</span>
      </motion.div>
    </div>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Fleet />
      <WhyUs />
      <Reviews />
      <AboutPreview />
      <FAQ />
      <Contact />
    </main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const cursorXSpringSlow = useSpring(cursorX, { damping: 20, stiffness: 200, mass: 0.8 });
  const cursorYSpringSlow = useSpring(cursorY, { damping: 20, stiffness: 200, mass: 0.8 });

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('select') || 
        target.closest('input') || 
        target.closest('textarea')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block">
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-gold rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-gold/50 rounded-full pointer-events-none z-[99]"
        style={{
          x: cursorXSpringSlow,
          y: cursorYSpringSlow,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(201,168,76,0.1)" : "transparent"
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/50 to-gold origin-left z-[100]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

function BackToTop() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsVisible(latest > 400);
    });
  }, [scrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#0a0a0a" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 md:bottom-8 md:right-24 z-50 w-12 h-12 rounded-full bg-gold text-dark flex items-center justify-center shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-colors"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function NoiseOverlay() {
  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[150] h-full w-full opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-dark flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-4xl md:text-6xl font-bold tracking-wider flex items-center"
          >
            EMAB
            <motion.span
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-gold inline-block origin-bottom"
            >
              .
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} className="flex-1 flex flex-col">
        <Routes location={location}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/services/transport-vip" element={<PageWrapper><TransportVIP /></PageWrapper>} />
          <Route path="/a-propos" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><FAQPage /></PageWrapper>} />
          <Route path="/reservation" element={<PageWrapper><Reservation /></PageWrapper>} />
          <Route path="/mentions-legales" element={<PageWrapper><Legal /></PageWrapper>} />
          <Route path="/politique-confidentialite" element={<PageWrapper><Privacy /></PageWrapper>} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <div className="min-h-screen bg-dark text-white selection:bg-gold/30 selection:text-white cursor-none lg:cursor-auto">
        <Preloader />
        <NoiseOverlay />
        <CustomCursor />
        <ScrollProgress />
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </div>
    </ReactLenis>
  );
}
