import React from 'react';
import GlassCard from '../components/GlassCard';
import { Layers, Command, Palette, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

const Ricing = () => {
    const features = [
        {
            icon: <Layers className="text-blue-400" size={32} />,
            title: "Waybar Config",
            description: "Custom modules for CPU, RAM, and network traffic with a clean, pill-shaped aesthetic."
        },
        {
            icon: <Command className="text-purple-400" size={32} />,
            title: "Keybind Workflow",
            description: "Vim-like navigation for window management. Efficiency is key."
        },
        {
            icon: <Palette className="text-pink-400" size={32} />,
            title: "System Theming",
            description: "Consistent Catppuccin Mocha color scheme across GTK, QT, and terminal apps."
        },
        {
            icon: <Monitor className="text-green-400" size={32} />,
            title: "Animations",
            description: "Smooth bezier curves for window opening, closing, and workspace switching."
        }
    ];

    return (
        <section id="ricing" className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Hyprland <span className="text-primary">Ricing</span></h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        My Linux environment is more than just a tool—it's a personalized workspace optimized for speed and aesthetics.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Placeholder for Hyprland Screenshot - using CSS art for now */}
                        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800 aspect-video relative group">
                            <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <div className="ml-auto text-xs text-gray-400 font-mono">~/workspace/portfolio</div>
                            </div>

                            <div className="p-8 h-full flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🐧</div>
                                    <p className="text-gray-400 font-mono">Hyprland Showcase</p>
                                    <p className="text-sm text-gray-600 mt-2">Hover to see details</p>
                                </div>
                            </div>

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button className="px-6 py-2 bg-primary text-white rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    View Config
                                </button>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-xl -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl -z-10"></div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <GlassCard className="h-full hover:-translate-y-1 transition-transform duration-300">
                                    <div className="mb-4 p-3 bg-gray-50 rounded-lg inline-block">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ricing;
