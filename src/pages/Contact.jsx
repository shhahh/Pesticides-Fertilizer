import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-20">
                    <div className="flex-1">
                        <h1 className="text-5xl md:text-6xl mb-8">Get in <span className="text-brand-amber-500">Touch</span></h1>
                        <p className="text-stone-400 text-xl font-light mb-12">
                            Have questions about our pure honey or need advice for your farm? Our family is here to help yours.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-6">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                                    <MapPin className="text-brand-amber-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Our Base</h4>
                                    <p className="text-stone-500">
                                        Vill- Garhi Mujhera, Block Jansath, <br />
                                        City- Muzaffarnagar, UP, India
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                                    <Phone className="text-brand-green-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                                    <p className="text-stone-500">+91 9012583808</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                                    <Mail className="text-brand-amber-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Email</h4>
                                    <p className="text-stone-500">shhahhraxa110@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-8 glass-morphism rounded-3xl border-brand-green-500/20">
                            <div className="flex items-center space-x-4 mb-4">
                                <MessageCircle className="text-brand-green-500" />
                                <h4 className="font-bold">Chat on WhatsApp</h4>
                            </div>
                            <a
                                href="https://wa.me/919520803351"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-brand-green-600 hover:bg-brand-green-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all"
                            >
                                Contact via WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="bg-stone-900 border border-white/10 p-10 rounded-[3rem] shadow-2xl">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-stone-400">Your Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-brand-amber-500 outline-none transition-colors" placeholder="Shahrukh Mehdi" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-stone-400">Phone Number</label>
                                        <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-brand-amber-500 outline-none transition-colors" placeholder="+91 ..." />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-stone-400">Category of Inquiry</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-brand-amber-500 outline-none transition-colors appearance-none">
                                        <option className="bg-stone-900">Raw Honey Order</option>
                                        <option className="bg-stone-900">Agriculture Advice</option>
                                        <option className="bg-stone-900">Pesticide Inquiry</option>
                                        <option className="bg-stone-900">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-stone-400">Message</label>
                                    <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-brand-amber-500 outline-none transition-colors resize-none" placeholder="How can we help you?"></textarea>
                                </div>
                                <button className="w-full py-5 bg-gradient-to-r from-brand-amber-500 to-brand-amber-600 text-stone-950 font-black rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-brand-amber-500/20">
                                    Send Inquiry <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
