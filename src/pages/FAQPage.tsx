import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search } from 'lucide-react';
import { useState, useMemo } from 'react';

const faqs = [
  { category: "Véhicules", q: "Quels types de véhicules proposez-vous ?", a: "Notre flotte est composée de SUV et de berlines haut de gamme, de couleur noire, parfaitement entretenus pour garantir votre confort et sécurité." },
  { category: "Chauffeurs", q: "Vos chauffeurs parlent-ils des langues étrangères ?", a: "Oui, nos chauffeurs professionnels sont bilingues (Français, Anglais) pour assurer une communication fluide avec notre clientèle internationale." },
  { category: "Réservation", q: "Comment réserver un transfert aéroport ?", a: "Vous pouvez réserver directement via WhatsApp ou notre formulaire de contact en nous indiquant les détails de votre vol. Notre chauffeur vous attendra avec une pancarte à votre nom." },
  { category: "Disponibilité", q: "Êtes-vous disponibles la nuit ?", a: "Absolument. Nos services de chauffeur privé et de transport VIP sont disponibles 24h/24 et 7j/7 sur réservation." },
  { category: "Réservation", q: "Proposez-vous des mises à disposition à la journée ?", a: "Oui, nous proposons des forfaits de mise à disposition à l'heure, à la demi-journée ou à la journée complète selon vos besoins." },
  { category: "Paiement", q: "Quels sont les modes de paiement acceptés ?", a: "Nous acceptons les paiements en espèces, par virement bancaire et via les services de mobile money locaux (Mvola, Airtel Money, Orange Money)." }
];

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

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");

  const categories = ["Tous", ...Array.from(new Set(faqs.map(faq => faq.category)))];

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || faq.a.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "Tous" || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            Questions Fréquentes sur les <br/>
            <span className="text-gold italic">Services EMAB Madagascar</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed mb-10">
            Retrouvez les réponses à vos questions sur les services de transport VIP, chauffeur privé et transfert aéroport d'EMAB à Antananarivo.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            <input 
              type="text" 
              placeholder="Rechercher une question..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white focus:outline-none focus:border-gold focus:bg-white/10 transition-all"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category ? 'bg-gold text-dark' : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <FAQItem key={faq.q} question={faq.q} answer={faq.a} idx={idx} />
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 text-white/50"
              >
                Aucune question ne correspond à votre recherche.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
