import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Leaf, Shield, Heart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-brand-amber-500/10 to-transparent blur-3xl" />
                <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-full bg-gradient-to-r from-brand-green-500/10 to-transparent blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <div className="inline-block px-4 py-1 mb-6 rounded-full glass-morphism border-brand-amber-500/30">
                            <span className="text-brand-amber-400 text-sm font-semibold tracking-wider uppercase">Legacy of Purity</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
                            From <span className="text-brand-amber-500 italic">Hives</span> to <br />
                            <span className="text-brand-green-500">Modern Farms</span>
                        </h1>
                        <p className="text-stone-400 text-lg md:text-xl mb-10 max-w-2xl">
                            Rooted in the legacy of Master Sharafat Hussain, we bring you 100% Raw Honey and expert-driven Agri-Solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link to="/honey" className="px-8 py-4 bg-brand-amber-500 text-stone-900 font-bold rounded-xl flex items-center justify-center hover:bg-brand-amber-600 transition-all group shadow-xl shadow-brand-amber-500/20">
                                Shop Raw Honey <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/farmers" className="px-8 py-4 glass-morphism text-white font-bold rounded-xl flex items-center justify-center hover:bg-white/10 transition-all border border-brand-green-500/30 shadow-xl shadow-brand-green-500/10">
                                Agri-Care Shop
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative"
                    >
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                            <div className="aspect-square bg-stone-900 relative">
                                <img
                                    src="/images/master.jpeg"
                                    className="w-full h-full object-cover object-[center_-50px] md:object-[center_-170px] group-hover:scale-110 transition-transform duration-1000"
                                    alt="Master Sharafat Hussain"
                                />
                                <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-stone-950/20 transition-colors flex items-center justify-center p-8">
                                    <div className="relative z-20 text-center translate-y-[110px] md:translate-y-[130px]">
                                        <span className="block text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-2 drop-shadow-2xl">Master Sharafat Hussain</span>
                                        <span className="text-brand-amber-400 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">Beekeeper Since 1985</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 glass-morphism px-6 py-4 rounded-2xl border-brand-amber-500/30 flex items-center space-x-3"
                        >
                            <Droplets className="text-brand-amber-500" />
                            <div>
                                <p className="text-xs text-stone-400">Purity</p>
                                <p className="font-bold">100% Raw</p>
                            </div>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -left-6 glass-morphism px-6 py-4 rounded-2xl border-brand-green-500/30 flex items-center space-x-3"
                        >
                            <Leaf className="text-brand-green-500" />
                            <div>
                                <p className="text-xs text-stone-400">Quality</p>
                                <p className="font-bold">Agri-Experts</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Heritage Teaser */}
            <section className="py-24 bg-stone-900/50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h2
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        className="text-4xl md:text-5xl mb-8"
                    >
                        The Journey of a <span className="text-brand-amber-500">Teacher</span> & <span className="text-brand-amber-500">Beekeeper</span>
                    </motion.h2>
                    <p className="text-stone-400 text-lg max-w-3xl mx-auto mb-12">
                        Master Sharafat Hussain devoted his life to education and bees. Travelling across Rajasthan, Uttarakhand, and UP with his honeybee boxes, he produced honey that the world rarely sees in its pure form.
                    </p>
                    <Link to="/story" className="text-brand-amber-400 font-bold hover:underline inline-flex items-center">
                        Read Our Heritage Story <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl mb-6">Why Our <span className="text-brand-amber-500">Raw Honey?</span></h2>
                        <div className="space-y-6">
                            {[
                                { icon: <Shield className="text-brand-amber-500" />, title: "No Heat Treatment", desc: "Unlike commercial honey, we never heat our honey, preserving vital enzymes." },
                                { icon: <Heart className="text-brand-amber-500" />, title: "Direct From Hive", desc: "Straight from nature to your table. No processing, no filters, no BS." },
                                { icon: <Zap className="text-brand-amber-500" />, title: "Pollination Powered", desc: "Our bees help farmers too, creating a cycle of life and health." }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                                >
                                    <div className="bg-brand-amber-500/10 p-3 rounded-lg">{item.icon}</div>
                                    <div>
                                        <h3 className="text-xl mb-1">{item.title}</h3>
                                        <p className="text-stone-400">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="glass-morphism rounded-3xl p-8 border-brand-amber-500/20">
                        <h3 className="text-2xl mb-8 text-center">Honey Comparison</h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-3 pb-4 border-b border-white/10 text-stone-500 text-sm font-bold">
                                <div>Feature</div>
                                <div className="text-brand-amber-400">Raza Honey</div>
                                <div>Commercial</div>
                            </div>
                            {[
                                { f: "Enzymes", r: "Intact", c: "Destroyed" },
                                { f: "Pollen", r: "Rich", c: "Filtered Out" },
                                { f: "Antibiotics", r: "Zero", c: "Common" },
                                { f: "Sugar Syrup", r: "None", c: "Often Added" }
                            ].map((row, i) => (
                                <div key={i} className="grid grid-cols-3 py-3 border-b border-white/5 items-center">
                                    <div className="text-stone-400 text-sm">{row.f}</div>
                                    <div className="text-brand-amber-400 font-bold">{row.r}</div>
                                    <div className="text-stone-600 line-through text-sm">{row.c}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Agri-Care CTA */}
            <section className="py-24 bg-gradient-to-b from-transparent to-brand-green-950/20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="glass-morphism rounded-[3rem] p-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green-500/10 blur-[100px] group-hover:bg-brand-green-500/20 transition-all duration-700" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="max-w-xl">
                                <h2 className="text-4xl md:text-5xl mb-6">Sahi Dawai, <br /><span className="text-brand-green-500">Sahi Salah.</span></h2>
                                <p className="text-stone-400 text-lg mb-8">
                                    Helping farmers in Muzaffarnagar (Jansath) and beyond with high-quality pesticides, fertilizers, and expert agricultural advice.
                                </p>
                                <Link to="/farmers" className="px-8 py-4 bg-brand-green-600 hover:bg-brand-green-700 text-white font-bold rounded-xl inline-flex items-center shadow-lg shadow-brand-green-500/20">
                                    Visit Farmer's Corner <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </div>
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-24 h-24 rounded-full border-4 border-stone-900 bg-stone-800 flex items-center justify-center overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Farmer" />
                                    </div>
                                ))}
                                <div className="w-24 h-24 rounded-full border-4 border-stone-900 bg-brand-green-500/20 flex items-center justify-center text-xs font-bold text-center p-2">
                                    500+ Happy Farmers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
