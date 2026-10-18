import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Sparkles, ShieldCheck, CheckCircle2, Star, Truck, RefreshCw, 
  ChevronDown, Flame, Zap, Clock, Snowflake, Award, ChevronRight, 
  HelpCircle, Eye, ShoppingBag, Heart, ArrowRight, Check, X
} from 'lucide-react';
import './styles.css';

const IMAGES = {
  hero: "https://sc02.alicdn.com/kf/Ab755b4ff911c4d51af54cf5e3a638e63P.png",
  lifestyle: "https://sc02.alicdn.com/kf/Af53248cfd4624b0b85f43a6846875f194.png",
  unboxing: "https://sc02.alicdn.com/kf/A1d54b9767b92480d9a932db02534301c2.png"
};

function App() {
  const [selectedImg, setSelectedImg] = useState('hero');
  const [selectedPack, setSelectedPack] = useState('solo');
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 28, seconds: 45 });
  const [formData, setFormData] = useState({ name: '', email: '', address: '', city: '', postal: '' });

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 4, minutes: 30, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    setOrderSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-800">
      
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 text-white text-xs sm:text-sm font-medium py-2 px-4 text-center flex items-center justify-center gap-2">
        <Flame className="w-4 h-4 text-amber-200 animate-bounce" />
        <span><strong>OFFRE FLASH : -50%</strong> + Lunettes UV & Rasoir de précision offerts !</span>
        <span className="hidden sm:inline-block bg-black/20 px-2 py-0.5 rounded text-xs font-mono ml-2">
          Fin dans {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 font-serif">LumiaSkin<span className="text-rose-500 font-sans text-xs uppercase ml-1 px-1.5 py-0.5 bg-rose-50 rounded">PRO</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#technologie" className="hover:text-rose-600 transition">Technologie Ice-Cooling</a>
            <a href="#resultats" className="hover:text-rose-600 transition">Résultats en 4 sem.</a>
            <a href="#comparatif" className="hover:text-rose-600 transition">Comparatif</a>
            <a href="#avis" className="hover:text-rose-600 transition">Avis Clients (4.9★)</a>
            <a href="#faq" className="hover:text-rose-600 transition">FAQ</a>
          </nav>

          <a 
            href="#commander" 
            className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Commander (-50%)</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Product Gallery (Left) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl border border-rose-100/60 aspect-square sm:aspect-[4/3] flex items-center justify-center">
              <img 
                src={IMAGES[selectedImg]} 
                alt="Épilateur Lumière Pulsée LumiaSkin Pro" 
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-rose-600 text-white font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wider shadow">
                  N°1 Élu Meilleur IPL 2026
                </span>
                <span className="bg-sky-500 text-white font-semibold text-xs px-3 py-1.5 rounded-full flex items-center gap-1 shadow">
                  <Snowflake className="w-3.5 h-3.5" /> Ice-Cooling 5°C Indolore
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'hero', label: 'Packshot Studio', img: IMAGES.hero },
                { id: 'lifestyle', label: 'Utilisation Réelle', img: IMAGES.lifestyle },
                { id: 'unboxing', label: 'Coffret Complet', img: IMAGES.unboxing }
              ].map(thumb => (
                <button
                  key={thumb.id}
                  onClick={() => setSelectedImg(thumb.id)}
                  className={`relative rounded-2xl overflow-hidden border-2 transition-all p-1 bg-white ${selectedImg === thumb.id ? 'border-rose-600 shadow-md ring-2 ring-rose-200' : 'border-slate-200 opacity-75 hover:opacity-100'}`}
                >
                  <img src={thumb.img} alt={thumb.label} className="w-full h-20 sm:h-24 object-cover rounded-xl" />
                  <span className="block text-[11px] font-medium text-slate-700 mt-1 truncate">{thumb.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info & Buy Box (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <span className="text-xs font-semibold text-slate-700">4.9/5 (2 840+ avis vérifiés)</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 leading-tight">
              LumiaSkin Pro™ <span className="block text-rose-600 font-serif italic text-2xl sm:text-3xl font-normal mt-1">L'épilation d'institut, sans douleur chez vous.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Dites adieu aux séances de laser hors de prix et aux brûlures de la cire. Grâce à notre technologie exclusive <strong>Ice-Cooling™ 5°C</strong>, profitez d'une peau douce et sans poils en toute sérénité.
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-medium text-slate-800 bg-rose-50/70 p-3.5 rounded-2xl border border-rose-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span>999 999 flashs (10+ ans)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span>100% Indolore (effet froid)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span>Séance corps en 10 min</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span>Résultats dès 3 semaines</span>
              </div>
            </div>

            {/* Package Selector */}
            <div className="space-y-3" id="commander">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Choisissez votre offre :</label>

              {/* Solo Pack */}
              <div 
                onClick={() => setSelectedPack('solo')}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition flex items-center justify-between ${selectedPack === 'solo' ? 'border-rose-600 bg-rose-50/40 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPack === 'solo' ? 'border-rose-600 bg-rose-600' : 'border-slate-300'}`}>
                    {selectedPack === 'solo' && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm sm:text-base">Pack Solo LumiaSkin Pro</div>
                    <div className="text-xs text-slate-500">1x Épilateur + Coffret Cadeau & Accessoires</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-rose-600">89,00 €</span>
                  <span className="block text-xs text-slate-400 line-through">179,00 €</span>
                </div>
              </div>

              {/* Duo Pack */}
              <div 
                onClick={() => setSelectedPack('duo')}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition relative flex items-center justify-between ${selectedPack === 'duo' ? 'border-rose-600 bg-rose-50/40 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'}`}
              >
                <span className="absolute -top-2.5 right-4 bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase px-2.5 py-0.5 rounded-full tracking-wider shadow">
                  Offre Partage • -60%
                </span>
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPack === 'duo' ? 'border-rose-600 bg-rose-600' : 'border-slate-300'}`}>
                    {selectedPack === 'duo' && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm sm:text-base">Pack Duo (2x LumiaSkin Pro)</div>
                    <div className="text-xs text-slate-500">Idéal à partager (soit 74,50 € / unité)</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-rose-600">149,00 €</span>
                  <span className="block text-xs text-slate-400 line-through">358,00 €</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setOrderModalOpen(true)}
              className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 px-6 rounded-2xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
            >
              <span>PROFITER DE L'OFFRE MAINTENANT</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center text-[11px] font-medium text-slate-600">
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-rose-600" />
                <span>Livraison 48h Gratuite</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RefreshCw className="w-4 h-4 text-rose-600" />
                <span>30 Jours d'Essai</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-rose-600" />
                <span>Garantie 2 Ans France</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="bg-white border-y border-rose-100 py-6 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-rose-600 font-serif">45 000+</div>
            <div className="text-xs sm:text-sm text-slate-600 mt-0.5">Femmes conquises en Europe</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">96 %</div>
            <div className="text-xs sm:text-sm text-slate-600 mt-0.5">Réduction des poils en 4 sem.</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-rose-600 font-serif">0 €</div>
            <div className="text-xs sm:text-sm text-slate-600 mt-0.5">Frais de recharge à vie</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">4.9 / 5</div>
            <div className="text-xs sm:text-sm text-slate-600 mt-0.5">Note moyenne des avis</div>
          </div>
        </div>
      </section>

      {/* Technology & Benefits Section */}
      <section id="technologie" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-rose-600 bg-rose-50 px-3 py-1 rounded-full">Innovation 2026</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-serif">
            Pourquoi LumiaSkin Pro surpasse tous les autres épilateurs ?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Nous avons combiné la puissance du laser clinique et le confort d'un soin spa pour éliminer définitivement la douleur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6">
              <Snowflake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Technologie Ice-Cooling™ 5°C</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              La tête en saphir refroidit instantanément la surface de la peau au moment précis du flash lumineux. Zéro picotement, zéro rougeur, même sur les zones les plus sensibles (maillot & visage).
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Mode Flash Ultra-Rapide</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Glissez simplement l'appareil sur vos jambes : le flash automatique se déclenche toutes les 0.8 secondes. Réalisez une séance corps complet en moins de 10 minutes devant votre série préférée.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">999 999 Flashs à Vie</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Un investissement unique sans aucun consommable à racheter. Avec 1 million de flashs, votre appareil dure plus de 15 ans pour vous et votre famille.
            </p>
          </div>

        </div>
      </section>

      {/* Results Timeline */}
      <section id="resultats" className="bg-rose-50/60 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-rose-600">Progression Clinique</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 font-serif">Des résultats visibles dès les premières semaines</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100">
              <span className="inline-block bg-rose-100 text-rose-700 font-extrabold text-xs px-3 py-1 rounded-full mb-3">Semaines 1 - 2</span>
              <h4 className="font-bold text-slate-900 text-lg mb-2">Ralentissement net</h4>
              <p className="text-slate-600 text-sm">Les follicules pileux commencent à s'endormir sous l'effet de l'IPL. La repousse devient plus lente et clairsemée.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100">
              <span className="inline-block bg-rose-600 text-white font-extrabold text-xs px-3 py-1 rounded-full mb-3">Semaines 3 - 4</span>
              <h4 className="font-bold text-slate-900 text-lg mb-2">70% de poils en moins</h4>
              <p className="text-slate-600 text-sm">Les poils tombent naturellement. La peau devient visiblement plus lisse et les poils incarnés disparaissent.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100">
              <span className="inline-block bg-emerald-600 text-white font-extrabold text-xs px-3 py-1 rounded-full mb-3">Semaines 5 - 8</span>
              <h4 className="font-bold text-slate-900 text-lg mb-2">Peau soyeuse permanente</h4>
              <p className="text-slate-600 text-sm">Plus de 92 % de réduction permanente de la pilosité. Une simple séance d'entretien tous les 2 mois suffit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparatif" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-rose-600">Le Comparatif</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2 font-serif">Pourquoi choisir LumiaSkin Pro ?</h2>
        </div>

        <div className="overflow-x-auto bg-white rounded-3xl shadow-sm border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-4 font-bold text-slate-900">Méthode</th>
                <th className="p-4 font-bold text-rose-600 bg-rose-50/50">LumiaSkin Pro™</th>
                <th className="p-4 font-bold text-slate-500">Laser en Institut</th>
                <th className="p-4 font-bold text-slate-500">Cire Chaude</th>
                <th className="p-4 font-bold text-slate-500">Rasoir Jetable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-4 font-semibold">Douleur</td>
                <td className="p-4 bg-rose-50/30 text-emerald-600 font-bold flex items-center gap-1">
                  <Check className="w-4 h-4" /> 100% Indolore (5°C)
                </td>
                <td className="p-4 text-red-500">Élevée (Brûlure)</td>
                <td className="p-4 text-red-500">Très douloureuse</td>
                <td className="p-4 text-amber-600">Coupures & Démangeaisons</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Coût sur 3 ans</td>
                <td className="p-4 bg-rose-50/30 font-black text-rose-600">89 € (Achat unique)</td>
                <td className="p-4 text-slate-500">1 200 € à 2 500 €</td>
                <td className="p-4 text-slate-500">~600 €</td>
                <td className="p-4 text-slate-500">~250 €</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Lieu & Confort</td>
                <td className="p-4 bg-rose-50/30 font-semibold text-slate-900">Chez soi (10 min)</td>
                <td className="p-4 text-slate-500">Déplacement & RDV</td>
                <td className="p-4 text-slate-500">En institut / Salissant</td>
                <td className="p-4 text-slate-500">Sous la douche tous les 2j</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Poils incarnés</td>
                <td className="p-4 bg-rose-50/30 text-emerald-600 font-bold">Éliminés</td>
                <td className="p-4 text-emerald-600">Éliminés</td>
                <td className="p-4 text-red-500">Fréquents</td>
                <td className="p-4 text-red-500">Très fréquents</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="avis" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400" />)}
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 font-serif">Plus de 2 840 avis 5 étoiles</h2>
          <p className="text-slate-600 text-sm mt-1">Découvrez les retours authentiques de nos clientes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-slate-700 text-sm italic mb-4">
                "J'avais une peur bleue de la douleur comme en institut laser... Mais avec l'effet froid de cet appareil, on ne sent absolument rien ! Après 4 semaines sur les jambes, je n'ai presque plus rien. Une révolution !"
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div className="w-9 h-9 rounded-full bg-rose-200 text-rose-800 font-bold flex items-center justify-center text-sm">
                CL
              </div>
              <div>
                <div className="font-bold text-xs text-slate-900">Camille L. — Lyon</div>
                <div className="text-[10px] text-emerald-600 font-medium">Achat vérifié • Pack Solo</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-slate-700 text-sm italic mb-4">
                "Le meilleur achat beauté de mon année. Ultra maniable, l'écran qui compte les flashs est super pratique. J'ai pris le pack duo avec ma sœur et nous sommes toutes les deux ravies !"
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div className="w-9 h-9 rounded-full bg-amber-200 text-amber-800 font-bold flex items-center justify-center text-sm">
                SD
              </div>
              <div>
                <div className="font-bold text-xs text-slate-900">Sarah D. — Bordeaux</div>
                <div className="text-[10px] text-emerald-600 font-medium">Achat vérifié • Pack Duo</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-slate-700 text-sm italic mb-4">
                "Livré en 48h dans une jolie boîte avec les lunettes et le rasoir. Très facile à utiliser, 10 minutes chrono pour les aisselles et les demi-jambes. Adieu les poils incarnés !"
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div className="w-9 h-9 rounded-full bg-sky-200 text-sky-800 font-bold flex items-center justify-center text-sm">
                MB
              </div>
              <div>
                <div className="font-bold text-xs text-slate-900">Manon B. — Paris</div>
                <div className="text-[10px] text-emerald-600 font-medium">Achat vérifié • Pack Solo</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-rose-600">Questions Fréquentes</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2 font-serif">Tout ce que vous devez savoir</h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "Est-ce que l'épilation est vraiment indolore ?",
              a: "Oui, à 100 %. Contrairement aux anciens appareils IPL ou au laser classique qui picotent, LumiaSkin Pro intègre une tête réfrigérée en saphir qui maintient la peau à 5 °C. Vous ressentez seulement une agréable sensation de fraîcheur."
            },
            {
              q: "Sur quelles zones du corps puis-je l'utiliser ?",
              a: "Vous pouvez l'utiliser en toute sécurité sur l'ensemble du corps : jambes, bras, aisselles, maillot classique/intégral, ainsi que sur le bas du visage (lèvre supérieure, menton)."
            },
            {
              q: "Combien de temps avant de voir les premiers résultats ?",
              a: "La majorité des utilisatrices constatent un ralentissement visible de la repousse dès 3 semaines. Après 6 à 8 semaines d'utilisation hebdomadaire, la réduction de pilosité atteint plus de 90 %."
            },
            {
              q: "Comment fonctionne la garantie 30 jours Satisfait ou Remboursé ?",
              a: "Si pour n'importe quelle raison vous n'êtes pas entièrement satisfaite de votre LumiaSkin Pro, renvoyez-le simplement dans les 30 jours suivant la réception pour un remboursement intégral."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <button 
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full text-left p-5 font-bold text-slate-900 flex justify-between items-center text-sm sm:text-base hover:text-rose-600 transition"
              >
                <span>{item.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition transform ${activeFaq === idx ? 'rotate-180 text-rose-600' : ''}`} />
              </button>
              {activeFaq === idx && (
                <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-50">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-800 pb-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-rose-500 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-white font-serif">LumiaSkin Pro</span>
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-slate-400">
            <span>Paiement Sécurisé SSL 256-bit</span>
            <span>Garantie 2 ans constructeur</span>
            <span>Service Client 7j/7 : support@lumiaskin.fr</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-6 text-center text-xs text-slate-500">
          © 2026 LumiaSkin™ France. Tous droits réservés. L'appareil IPL LumiaSkin Pro est certifié CE & RoHS.
        </div>
      </footer>

      {/* Order Modal (Simulated Checkout) */}
      {orderModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => { setOrderModalOpen(false); setOrderSuccess(false); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2"
            >
              <X className="w-5 h-5" />
            </button>

            {!orderSuccess ? (
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-serif mb-1">Finalisez votre commande</h3>
                <p className="text-xs text-slate-500 mb-6">
                  {selectedPack === 'solo' ? 'Pack Solo (1x LumiaSkin Pro) • 89,00 €' : 'Pack Duo (2x LumiaSkin Pro) • 149,00 €'} • Livraison 48h Gratuite
                </p>

                <form onSubmit={handleOrderSubmit} className="space-y-4 text-sm">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Nom complet</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Camille Dupont" 
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Adresse e-mail</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="camille@example.fr" 
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Adresse de livraison</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="12 rue de la Paix" 
                      value={formData.address}
                      onChange={e => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Ville</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Paris" 
                        value={formData.city}
                        onChange={e => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Code Postal</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="75001" 
                        value={formData.postal}
                        onChange={e => setFormData({ ...formData, postal: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3.5 rounded-xl font-bold text-base shadow-lg transition"
                    >
                      Confirmer la commande ({selectedPack === 'solo' ? '89,00 €' : '149,00 €'})
                    </button>
                    <p className="text-[11px] text-center text-slate-400 mt-2">
                      🔒 Paiement 100% sécurisé • 30 jours satisfait ou remboursé
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-serif mb-2">Commande confirmée !</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Merci <strong>{formData.name || 'chère cliente'}</strong> ! Votre colis LumiaSkin Pro sera expédié sous 24h avec numéro de suivi.
                </p>
                <button
                  onClick={() => { setOrderModalOpen(false); setOrderSuccess(false); }}
                  className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-semibold text-sm"
                >
                  Fermer
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
