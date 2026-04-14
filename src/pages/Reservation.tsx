import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, User, Car, ChevronDown, Calendar, Clock, Map, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export default function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRoundTrip, setIsRoundTrip] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = {
      nom: formData.get('nom'),
      telephone: formData.get('telephone'),
      service: formData.get('service'),
      passagers: formData.get('passagers'),
      depart: formData.get('depart'),
      arrivee: formData.get('arrivee'),
      date: formData.get('date'),
      heure: formData.get('heure'),
      message: formData.get('message'),
    };

    const text = `*Nouvelle demande de devis* 🚕
*Nom:* ${data.nom}
*Téléphone:* ${data.telephone}
*Service:* ${data.service}
*Passagers:* ${data.passagers}
*Départ:* ${data.depart || 'Non spécifié'}
*Arrivée:* ${data.arrivee || 'Non spécifié'}
*Date:* ${data.date || 'Non spécifiée'} à ${data.heure || 'Non spécifiée'}
*Aller-retour:* ${isRoundTrip ? 'Oui' : 'Non'}
*Message:* ${data.message || 'Aucun'}`;

    const whatsappUrl = `https://wa.me/261349524264?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
            Demande de Devis & <br/>
            <span className="text-gold italic">Réservation VIP</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Contactez EMAB pour réserver votre chauffeur privé ou demander un devis sur-mesure pour vos déplacements à Madagascar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <h2 className="text-2xl font-serif mb-6 text-gold">Nos Coordonnées</h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark transition-colors duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">Téléphone / WhatsApp</div>
                  <div className="font-medium">+261 34 95 242 64</div>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">Email</div>
                  <div className="font-medium">razafindranaivoarifidy4@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark transition-colors duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">Adresse</div>
                  <div className="font-medium">Antananarivo, Madagascar</div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              <h3 className="font-serif text-xl mb-4 text-white">Horaires d'ouverture</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Notre service de réservation et nos chauffeurs sont disponibles <strong className="text-gold font-medium">24h/24 et 7j/7</strong> pour répondre à toutes vos demandes de transport VIP.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 glass p-8 md:p-10 rounded-3xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-serif mb-8 text-white">Détails de votre trajet</h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    
                    {/* Informations personnelles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-white/70 ml-1">Nom complet *</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                          <input required name="nom" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-gold focus:bg-white/10 transition-all" placeholder="Votre nom" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-white/70 ml-1">Téléphone / WhatsApp *</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                          <input required name="telephone" type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-gold focus:bg-white/10 transition-all" placeholder="Votre numéro" />
                        </div>
                      </div>
                    </div>

                    {/* Type de service */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-white/70 ml-1">Service souhaité *</label>
                        <div className="relative">
                          <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                          <select required name="service" defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-gold focus:bg-white/10 transition-all appearance-none cursor-pointer">
                            <option value="" disabled className="bg-dark text-white/50">Sélectionnez un service</option>
                            <option value="Transport VIP (Trajet simple)" className="bg-dark">Transport VIP (Trajet simple)</option>
                            <option value="Mise à disposition (Heure/Jour)" className="bg-dark">Mise à disposition (Heure/Jour)</option>
                            <option value="Transfert Aéroport" className="bg-dark">Transfert Aéroport</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={18} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-white/70 ml-1">Nombre de passagers</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                          <select name="passagers" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-gold focus:bg-white/10 transition-all appearance-none cursor-pointer">
                            <option value="1-2" className="bg-dark">1 à 2 passagers</option>
                            <option value="3-4" className="bg-dark">3 à 4 passagers</option>
                            <option value="5+" className="bg-dark">5 passagers ou plus</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={18} />
                        </div>
                      </div>
                    </div>

                    {/* Trajet */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-white/70 ml-1">Lieu de départ</label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                          <input name="depart" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-gold focus:bg-white/10 transition-all" placeholder="Adresse ou Aéroport" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-white/70 ml-1">Lieu d'arrivée</label>
                        <div className="relative">
                          <Map className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                          <input name="arrivee" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-gold focus:bg-white/10 transition-all" placeholder="Adresse de destination" />
                        </div>
                      </div>
                    </div>

                    {/* Date et Heure */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-white/70 ml-1">Date prévue</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                          <input name="date" type="date" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-gold focus:bg-white/10 transition-all [color-scheme:dark]" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-white/70 ml-1">Heure de prise en charge</label>
                        <div className="relative">
                          <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                          <input name="heure" type="time" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-gold focus:bg-white/10 transition-all [color-scheme:dark]" />
                        </div>
                      </div>
                    </div>

                    {/* Options supplémentaires */}
                    <div className="flex items-center gap-3 py-2">
                      <button 
                        type="button"
                        onClick={() => setIsRoundTrip(!isRoundTrip)}
                        className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${isRoundTrip ? 'bg-gold border-gold text-dark' : 'border-white/20 text-transparent'}`}
                      >
                        <CheckCircle2 size={16} strokeWidth={3} />
                      </button>
                      <span className="text-white/80 select-none cursor-pointer" onClick={() => setIsRoundTrip(!isRoundTrip)}>J'ai besoin d'un trajet aller-retour</span>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-sm text-white/70 ml-1">Besoins spécifiques ou message</label>
                      <textarea name="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-white focus:outline-none focus:border-gold focus:bg-white/10 transition-all resize-none" placeholder="Numéro de vol, bagages volumineux, siège auto enfant..."></textarea>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-4 bg-gold text-dark rounded-xl font-medium hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(201,168,76,0.2)]"
                    >
                      Demander mon devis gratuit
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="flex flex-col items-center justify-center text-center py-12 h-full"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-serif mb-4 text-white">Demande Envoyée !</h3>
                  <p className="text-white/70 leading-relaxed max-w-md mx-auto mb-8">
                    Merci pour votre confiance. Notre équipe a bien reçu votre demande et vous contactera dans les plus brefs délais avec une proposition sur-mesure.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-8 py-3 border border-white/20 rounded-full text-white/80 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    Faire une nouvelle demande
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
