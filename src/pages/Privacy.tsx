import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gold">Politique de Confidentialité</h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-3xl space-y-8 text-white/80 font-light leading-relaxed"
        >
          <section>
            <h2 className="text-xl font-serif text-white mb-4">1. Collecte des données</h2>
            <p>
              Dans le cadre de l'utilisation de nos services de réservation et de contact, EMAB est amené à collecter des données personnelles vous concernant (nom, numéro de téléphone, adresse email, détails de vos trajets).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4">2. Utilisation des données</h2>
            <p>
              Les données collectées sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Le traitement de vos demandes de devis et réservations.</li>
              <li>L'organisation et le suivi de vos trajets.</li>
              <li>La communication avec vous concernant nos services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4">3. Protection des données</h2>
            <p>
              EMAB s'engage à assurer la sécurité et la confidentialité de vos données personnelles. Elles ne sont en aucun cas vendues, louées ou cédées à des tiers à des fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4">4. Vos droits</h2>
            <p>
              Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ce droit, vous pouvez nous contacter à l'adresse email suivante : contact@emab-madagascar.com.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
