import { motion } from 'motion/react';

export default function Legal() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gold">Mentions Légales</h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-3xl space-y-8 text-white/80 font-light leading-relaxed"
        >
          <section>
            <h2 className="text-xl font-serif text-white mb-4">1. Éditeur du site</h2>
            <p>
              Le présent site est édité par la société <strong>Elite Mobility & Art Business (EMAB)</strong>.<br/>
              Siège social : Antananarivo, Madagascar<br/>
              Téléphone : +261 34 95 242 64<br/>
              Email : razafindranaivoarifidy4@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4">2. Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc.<br/>
              340 S Lemon Ave #4133<br/>
              Walnut, CA 91789<br/>
              États-Unis
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation malgache et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4">4. Responsabilité</h2>
            <p>
              EMAB s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, EMAB décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
