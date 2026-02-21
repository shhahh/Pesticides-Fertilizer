import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, ArrowRight } from 'lucide-react';

const OurStory = () => {
    const timeline = [
        {
            year: "1985 - 2010",
            title: "The Teaching Years",
            location: "Unnao, UP",
            desc: "Master Sharafat Hussain served as a Govt. Head Master, but his passion lay in the fields.",
            icon: <Award className="text-brand-amber-500" />
        },
        {
            year: "2010 - 2022",
            title: "The Bee Nomad",
            location: "Rajasthan & Uttarakhand",
            desc: "Travelling with hundreds of honeybee boxes to capture the essence of different flowers.",
            icon: <MapPin className="text-brand-amber-500" />
        },
        {
            year: "2023",
            title: "The New Generation",
            location: "Muzaffarnagar base",
            desc: "Shahrukh & Raza Mehdi took over the heritage, scaling the purity of their father's work.",
            icon: <ArrowRight className="text-brand-green-500" />
        },
        {
            year: "Present",
            title: "Honey & Agri-Solutions",
            location: "Global Reach",
            desc: "A modern brand delivering 100% Raw Honey and expert Farmer solutions.",
            icon: <Award className="text-brand-green-500" />
        }
    ];

    return (
        <div className="pt-32 pb-24">
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-6xl mb-6">Our <span className="text-brand-amber-500">Heritage</span></h1>
                    <p className="text-stone-400 text-xl max-w-2xl mx-auto">
                        A journey that started with a teacher's curiosity and evolved into a mission for purity.
                    </p>
                </motion.div>

                <div className="relative border-l border-white/10 ml-4 md:ml-0 md:left-1/2">
                    {timeline.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`relative mb-16 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:ml-[-50%]' : 'md:pl-12 md:ml-0'}`}
                        >
                            <div className="absolute top-0 flex items-center justify-center w-8 h-8 rounded-full bg-stone-900 border border-brand-amber-500 shadow-xl shadow-brand-amber-500/20 translate-x-[-17px] md:translate-x-[-16px] md:left-0">
                                <Calendar size={14} className="text-brand-amber-500" />
                            </div>

                            <div className="glass-morphism p-8 rounded-2xl hover:border-white/20 transition-colors">
                                <span className="text-brand-amber-500 font-bold mb-2 block">{item.year}</span>
                                <h3 className="text-2xl mb-2">{item.title}</h3>
                                <div className={`flex items-center text-stone-500 text-sm mb-4 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                                    <MapPin size={14} className="mr-1" /> {item.location}
                                </div>
                                <p className="text-stone-400">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurStory;
