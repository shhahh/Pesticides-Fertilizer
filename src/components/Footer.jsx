import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Droplets, Leaf, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-stone-950 pt-24 pb-12 overflow-hidden border-t border-white/5">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-amber-500 via-brand-green-500 to-brand-amber-500 opacity-30" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-amber-500/5 blur-[120px] rounded-full" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-green-500/5 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center space-x-3">
                            <img src="/logo.png" alt="Raza Logo" className="w-12 h-12 object-contain" />
                            <div>
                                <span className="text-2xl font-display font-bold block leading-none bg-gradient-to-r from-brand-amber-400 to-brand-green-500 bg-clip-text text-transparent">
                                    RAZA
                                </span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">Pesticides & Fertilizer</span>
                            </div>
                        </Link>
                        <p className="text-stone-400 text-sm leading-relaxed">
                            Merging the sweetness of 100% Raw Honey with the strength of expert Agri-Solutions. A legacy of purity from Muzaffarnagar to the world.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-brand-amber-500 hover:border-brand-amber-500/50 transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-8 flex items-center gap-2">
                            <span className="w-2 h-2 bg-brand-amber-500 rounded-full" />
                            Navigation
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Our Story', path: '/story' },
                                { name: 'Raw Honey Collection', path: '/honey' },
                                { name: 'Farmer\'s Corner', path: '/farmers' },
                                { name: 'Contact Us', path: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-stone-400 hover:text-brand-amber-400 text-sm transition-colors flex items-center group">
                                        <span className="w-0 group-hover:w-4 h-[1px] bg-brand-amber-400 transition-all mr-0 group-hover:mr-2" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-8 flex items-center gap-2">
                            <span className="w-2 h-2 bg-brand-green-500 rounded-full" />
                            Contact Details
                        </h4>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <MapPin className="text-brand-green-500 shrink-0 mt-1" size={18} />
                                <span className="text-stone-400 text-sm">
                                    Vill- Garhi Mujhera, Block Jansath, <br />
                                    City- Muzaffarnagar, UP, India
                                </span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Phone className="text-brand-green-500 shrink-0" size={18} />
                                <div className="flex flex-col">
                                    <span className="text-stone-400 text-sm leading-none">+91 9012583808</span>
                                    <span className="text-stone-600 text-[10px] uppercase font-bold mt-1 tracking-wider">Mobile</span>
                                </div>
                            </li>
                            <li className="flex items-center space-x-4">
                                <MessageCircle className="text-brand-green-500 shrink-0" size={18} />
                                <div className="flex flex-col">
                                    <span className="text-stone-400 text-sm leading-none">+91 9520803351</span>
                                    <span className="text-stone-600 text-[10px] uppercase font-bold mt-1 tracking-wider">WhatsApp</span>
                                </div>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Mail className="text-brand-green-500 shrink-0" size={18} />
                                <span className="text-stone-400 text-sm">shhahhraxa110@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Showcase */}
                    <div className="bg-white/5 rounded-[2rem] p-6 border border-white/10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-amber-500/10 blur-2xl -z-10 group-hover:bg-brand-amber-500/20 transition-all" />
                        <h4 className="text-white font-bold mb-4">Dual Excellence</h4>
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="aspect-square rounded-xl overflow-hidden border border-white/10">
                                <img src="/images/s3.jpeg" className="w-full h-full object-cover" alt="Honey" />
                            </div>
                            <div className="aspect-square rounded-xl overflow-hidden border border-white/10">
                                <img src="/images/s4.jpeg" className="w-full h-full object-cover" alt="Agri Care" />
                            </div>
                        </div>
                        <p className="text-[10px] text-stone-500 leading-relaxed italic">
                            "Providing the best for your health and your fields, all under one roof."
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <p className="text-stone-500 text-xs">
                            © {new Date().getFullYear()} Raza Pesticides & Fertilizer. All Rights Reserved.
                        </p>
                        <p className="text-stone-600 text-[10px] font-bold tracking-[0.2em] uppercase">
                            Developed By <span className="text-brand-amber-500">shah -</span>
                        </p>
                    </div>
                    <div className="flex space-x-6 text-xs text-stone-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
