import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, FlaskConical, Microscope, PhoneCall, CheckCircle2, ShieldCheck } from 'lucide-react';

const FarmersCorner = () => {
    const medicineCategories = [
        {
            name: "Broad Spectrum Insecticides",
            desc: "Effective control against a wide range of crop-damaging pests.",
            icon: <Leaf className="text-brand-green-500" />,
            image: "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&fit=crop&q=80&w=400"
        },
        {
            name: "Systemic Fungicides",
            desc: "Internal protection for plants against fungal infections and rots.",
            icon: <Microscope className="text-brand-green-500" />,
            image: "https://images.unsplash.com/photo-1592819410151-234dd0494444?auto=format&fit=crop&q=80&w=400"
        },
        {
            name: "Organic Bio-Boosters",
            desc: "Natural solutions to enhance soil fertility and plant vigor.",
            icon: <FlaskConical className="text-brand-green-500" />,
            image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=400"
        },
        {
            name: "Selective Herbicides",
            desc: "Targeted weed control without harming your valuable crops.",
            icon: <Leaf className="text-brand-green-500" />,
            image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&q=80&w=400"
        },
        {
            name: "NPK Liquid Fertilizers",
            desc: "Balanced nutrition for rapid growth and high-quality yield.",
            icon: <FlaskConical className="text-brand-green-500" />,
            image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=400"
        },
        {
            name: "Micronutrient Mix",
            desc: "Essential trace elements to prevent deficiency diseases.",
            icon: <Microscope className="text-brand-green-500" />,
            image: "https://images.unsplash.com/photo-1622383529984-78326757c2bd?auto=format&fit=crop&q=80&w=400"
        },
        {
            name: "Plant Growth Regulators",
            desc: "Hormonal balance for better flowering and fruit setting.",
            icon: <Leaf className="text-brand-green-500" />,
            image: "https://images.unsplash.com/photo-1530836361283-2b92cca17d3a?auto=format&fit=crop&q=80&w=400"
        },
        {
            name: "Seed Treatment Care",
            desc: "Early stage protection to ensure high germination rates.",
            icon: <ShieldCheck className="text-brand-green-500" />,
            image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=400"
        },
        {
            name: "Soil Conditioners",
            desc: "Improving soil structure and water retention capabilities.",
            icon: <FlaskConical className="text-brand-green-500" />,
            image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=400"
        },
        {
            name: "Biological Pesticides",
            desc: "Eco-friendly pest management using natural predators.",
            icon: <Microscope className="text-brand-green-500" />,
            image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=400"
        },
        {
            name: "Root Developers",
            desc: "Specialized formulas for deep and strong root systems.",
            icon: <Leaf className="text-brand-green-500" />,
            image: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&q=80&w=400"
        },
        {
            name: "Fruit Finish Shine",
            desc: "enhancing the visual appeal and shelf life of your harvest.",
            icon: <FlaskConical className="text-brand-green-500" />,
            image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&q=80&w=400"
        }
    ];

    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="glass-morphism rounded-3xl p-12 mb-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green-500/10 blur-[100px]-z-10" />
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl md:text-6xl mb-6">Farmer's <span className="text-brand-green-500">Corner</span></h1>
                            <p className="text-stone-400 text-xl font-light mb-8">
                                "Sahi Dawai, Sahi Salah" — Providing Muzaffarnagar's farmers with the best quality pesticides, fertilizers, and expert guidance.
                            </p>
                            <div className="flex items-center space-x-4 text-brand-green-500">
                                <PhoneCall />
                                <span className="text-2xl font-bold font-display">+91 9012583808</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex items-start space-x-4">
                                <CheckCircle2 className="text-brand-green-500 shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1 italic text-brand-green-400">Expert Consultancy</h4>
                                    <p className="text-sm text-stone-500">Free advice on crop diseases and medicine usage.</p>
                                </div>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex items-start space-x-4">
                                <CheckCircle2 className="text-brand-green-500 shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold mb-1 italic text-brand-green-400">Trusted Brands</h4>
                                    <p className="text-sm text-stone-500">Authorized dealer for premium agricultural products.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="mb-24">
                    <h2 className="text-3xl mb-12 text-center underline decoration-brand-green-500 underline-offset-8">Our Product Verticals</h2>
                    <div className="grid md:grid-cols-3 gap-8 items-stretch">
                        {medicineCategories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-stone-900 border border-white/5 rounded-3xl overflow-hidden hover:border-brand-green-500/30 transition-all group flex flex-col h-full shadow-2xl"
                            >
                                <div className="h-56 overflow-hidden relative">
                                    <img
                                        src={`/src/assets/images/s${idx === 0 ? '' : idx}.jpeg`}
                                        alt={cat.name}
                                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-stone-950/10 transition-colors" />
                                    <div className="absolute top-6 left-6 w-12 h-12 bg-stone-950/60 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-brand-green-500/50 transition-colors">
                                        {cat.icon}
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-xl mb-4 font-display font-bold text-white leading-tight underline decoration-transparent group-hover:decoration-brand-green-500/50 underline-offset-4 transition-all">{cat.name}</h3>
                                    <p className="text-stone-500 text-sm leading-relaxed mb-8 flex-1">
                                        {cat.desc}
                                    </p>
                                    <button className="text-brand-green-500 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3 group/btn mt-auto">
                                        View Details <div className="w-8 h-[1px] bg-brand-green-500 group-hover/btn:w-12 transition-all" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Shop Showcase */}
                <div className="text-center py-20 border-t border-white/5">
                    <h2 className="text-4xl mb-8">Visit Our Physical Shop</h2>
                    <p className="text-stone-400 mb-12 max-w-2xl mx-auto">
                        Located in the heart of Muzaffarnagar (Jansath), our shop serves as a hub for local farmers seeking genuine medicines and honest advice.
                    </p>
                    <button className="bg-brand-green-600 hover:bg-brand-green-700 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-xl shadow-brand-green-500/20">
                        Get Directions on Map
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FarmersCorner;
