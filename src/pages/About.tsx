import { motion } from 'motion/react';
import { Shield, Star, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
            Notre Histoire : L'Engagement d'EMAB pour le <br/>
            <span className="text-gold italic">Transport VIP à Madagascar</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Découvrez l'histoire, la mission et les valeurs d'EMAB, leader du transport VIP et chauffeur privé à Antananarivo, Madagascar.
          </p>
        </motion.div>

        <div className="space-y-16">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-2xl font-serif text-gold mb-4">Notre Vision</h2>
            <p className="text-white/80 leading-relaxed font-light">
              Fondée sur l'exigence et la passion du service, Elite Mobility & Art Business (EMAB) s'impose comme la référence du transport VIP à Antananarivo. Notre mission est de vous offrir bien plus qu'un simple trajet : une expérience de voyage exceptionnelle, alliant discrétion, ponctualité et confort absolu. Nous visons à redéfinir les standards du transport privé à Madagascar.
            </p>
          </motion.section>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Shield size={32} />, title: "Sécurité", desc: "La sécurité de nos passagers est notre priorité absolue. Nos véhicules sont rigoureusement entretenus." },
              { icon: <Star size={32} />, title: "Excellence", desc: "Un service 5 étoiles, avec une attention particulière aux moindres détails pour votre confort." },
              { icon: <Users size={32} />, title: "Discrétion", desc: "Nos chauffeurs sont formés pour garantir une confidentialité totale lors de vos déplacements." }
            ].map((valeur, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-2xl text-center"
              >
                <div className="text-gold flex justify-center mb-4">{valeur.icon}</div>
                <h3 className="text-xl font-serif mb-3">{valeur.title}</h3>
                <p className="text-white/60 font-light text-sm">{valeur.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
