import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, ShieldCheck, Heart, Info } from 'lucide-react';

const HoneyCollection = () => {
    const honeyTypes = [
        {
            name: "Wildflower Raw Honey",
            tagline: "Floral Symphony",
            price: "₹450 / 500g",
            image: "/images/s.jpeg",
            benefits: ["Immunity Boost", "Natural Energy", "Rich in Pollen"]
        },
        {
            name: "Forest Sidr (Beri)",
            tagline: "The Royal Nectar",
            price: "₹850 / 500g",
            image: "/images/s1.jpeg",
            benefits: ["Luxury Quality", "Medicinal", "Heart Health"]
        },
        {
            name: "Organic Eucalyptus",
            tagline: "Cooling & Herbal",
            price: "₹480 / 500g",
            image: "/images/s2.jpeg",
            benefits: ["Cold Relief", "Anti-inflammatory", "Pure Raw"]
        },
        {
            name: "Mustard Raw Honey",
            tagline: "Golden Farm Essence",
            price: "₹380 / 500g",
            image: "/images/s3.jpeg",
            benefits: ["Creamy Texture", "Quick Energy", "Locally Harvested"]
        },
        {
            name: "Litchi Blossom Honey",
            tagline: "Sweet Fruity Aroma",
            price: "₹520 / 500g",
            image: "/images/s4.jpeg",
            benefits: ["Summer Delight", "Rich in Vitamin C", "Pure Aroma"]
        },
        {
            name: "Acacia Transparent",
            tagline: "Purity Unmatched",
            price: "₹750 / 500g",
            image: "/images/s5.jpeg",
            benefits: ["Mild Flavor", "Weight Loss", "Low Glycemic"]
        },
        {
            name: "Kashmir White Honey",
            tagline: "Snow-capped Purity",
            price: "₹1200 / 500g",
            image: "/images/s6.jpeg",
            benefits: ["Rare Find", "Antibacterial", "Gourmet Choice"]
        },
        {
            name: "Tulsi Infused Honey",
            tagline: "The Holy Healer",
            price: "₹550 / 500g",
            image: "/images/s7.jpeg",
            benefits: ["Stress Relief", "Respiratory Health", "Ancient Wisdom"]
        },
        {
            name: "Tamarind Flower Honey",
            tagline: "Tangy Undertones",
            price: "₹490 / 500g",
            image: "/images/s8.jpeg",
            benefits: ["Digestive Aid", "Potassium Rich", "Dark & Bold"]
        },
        {
            name: "Ajwain Raw Honey",
            tagline: "Spice Garden Pure",
            price: "₹580 / 500g",
            image: "/images/s9.jpeg",
            benefits: ["Stomach Health", "Anti-septic", "High Active Enzyems"]
        },
        {
            name: "Neem Blossom Honey",
            tagline: "Nature's Detox",
            price: "₹620 / 500g",
            image: "/images/s10.jpeg",
            benefits: ["Blood Purifier", "Glowing Skin", "Bittersweet Purity"]
        },
        {
            name: "Clover White Honey",
            tagline: "Meadow Fresh",
            price: "₹680 / 500g",
            image: "/images/s11.jpeg",
            benefits: ["Smooth Finish", "All-purpose", "Rich in Pollen"]
        }
    ];

    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-6xl mb-6">Raw <span className="text-brand-amber-500">Collection</span></h1>
                        <p className="text-stone-400 text-xl font-light">
                            Straight from the comb to your kitchen. No heat, no chemicals, just the pure symphony of nature.
                        </p>
                    </div>
                    <div className="flex items-center space-x-4 bg-brand-amber-500/10 p-4 rounded-2xl border border-brand-amber-500/20">
                        <ShieldCheck className="text-brand-amber-500 w-10 h-10" />
                        <div>
                            <p className="text-xs text-stone-500 font-bold uppercase tracking-wider">Certified</p>
                            <p className="text-stone-300 font-medium">100% Lab Tested Purity</p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {honeyTypes.map((honey, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group flex flex-col h-full"
                        >
                            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 relative shadow-2xl">
                                <img
                                    src={honey.image}
                                    alt={honey.name}
                                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${honey.name.includes("Clover") ? 'object-top' : 'object-center'}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-80" />
                                <div className="absolute bottom-8 left-8">
                                    <span className="text-brand-amber-400 font-bold text-xl drop-shadow-lg">{honey.price}</span>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col text-center md:text-left px-2">
                                <h3 className="text-2xl mb-1 font-display font-bold">{honey.name}</h3>
                                <p className="text-stone-500 text-sm mb-4 tracking-wide">{honey.tagline}</p>
                                <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                                    {honey.benefits.map((b, i) => (
                                        <span key={i} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 rounded-full text-stone-400 border border-white/5">
                                            {b}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-auto">
                                    <button className="w-full py-4 border border-white/10 rounded-2xl font-bold hover:bg-brand-amber-500 hover:text-stone-900 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-brand-amber-500/20 active:scale-95">
                                        <span>Inquiry for Order</span>
                                        <Info size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HoneyCollection;
