import { motion } from 'motion/react';
import { Car, Shield, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TransportVIP() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
            Transport VIP d'Excellence à <br/>
            <span className="text-gold italic">Antananarivo avec EMAB</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Découvrez le service de transport VIP d'EMAB à Antananarivo. Berlines et SUV noirs, chauffeurs professionnels pour vos déplacements de luxe à Madagascar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.img 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070&auto=format&fit=crop" 
            alt="Transport VIP Antananarivo" 
            className="rounded-2xl object-cover h-full w-full"
            referrerPolicy="no-referrer"
          />
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h2 className="text-2xl font-serif text-gold">Un Service Sur-Mesure</h2>
            <p className="text-white/70 font-light leading-relaxed">
              Que ce soit pour un rendez-vous d'affaires, une soirée de gala ou un événement privé, notre service de transport VIP s'adapte à vos exigences. Nous mettons à votre disposition des véhicules haut de gamme, conduits par des chauffeurs expérimentés et discrets.
            </p>
            <ul className="space-y-4">
              {[
                "Véhicules premium (SUV et berlines noirs)",
                "Chauffeurs bilingues et professionnels",
                "Discrétion et confidentialité absolues",
                "Disponibilité 24h/24 et 7j/7"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl text-center mb-16"
        >
          <h2 className="text-2xl font-serif mb-4">Réservez votre trajet VIP</h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour obtenir un devis personnalisé. Nos tarifs sont calculés sur mesure en fonction de vos besoins spécifiques (trajet simple, mise à disposition horaire ou journalière).
          </p>
          <Link 
            to="/reservation" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-dark rounded-full font-medium hover:bg-white transition-colors duration-300"
          >
            Demander un devis
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
