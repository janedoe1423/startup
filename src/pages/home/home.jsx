import React from 'react';
import { motion } from 'framer-motion';
import {
    Rocket as FiRocket,
    CurrencyDollar as FiDollarSign,
    MagnifyingGlass as FiSearch,
    Users as FiUsers,
    ChartBar as FiBarChart,
    Target as FiTarget,
    Link as FiLink,
    ArrowUp as FiTrendingUp
} from '@phosphor-icons/react';

// Animation variants
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section with Gradient Background */}
            <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-pattern opacity-10"></div>
                <motion.div
                    className="container mx-auto px-6 text-center text-white relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-200"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Transforming Ideas into Impact
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl mb-12 text-blue-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Join the next generation of innovators, investors, and researchers, all under one roof.
                    </motion.p>
                    <motion.div
                        className="space-x-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <button className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition transform hover:scale-105">
                            Get Started
                        </button>
                        <button className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition transform hover:scale-105">
                            Learn More
                        </button>
                    </motion.div>
                </motion.div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-8">A Platform for Innovators and Visionaries</h2>
                    <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto">
                        InnovateHub is where startups, investors, and researchers converge to foster cutting-edge technologies.
                        We provide a collaborative ecosystem to connect ideas with resources, opportunities, and funding,
                        empowering the future of innovation.
                    </p>
                </div>
            </section>

            {/* Ecosystem Section with Updated Colors */}
            <section className="py-20 bg-gradient-to-b from-white to-blue-50">
                <motion.div
                    className="container mx-auto px-6"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
                        One Platform, Endless Possibilities
                    </h2>
                    <p className="text-xl text-gray-600 text-center mb-12">
                        From ideation to execution, InnovateHub connects key players in the innovation process.
                    </p>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                    >
                        {[
                            { icon: FiRocket, title: 'Startups', desc: "Accelerate your growth with funding, mentoring, and an exclusive community." },
                            { icon: FiDollarSign, title: 'Investors', desc: "Discover high-potential startups and make informed investment decisions." },
                            { icon: FiSearch, title: 'Researchers', desc: "Collaborate, fund, and implement groundbreaking research with industry leaders." },
                            { icon: FiUsers, title: 'Management', desc: "Streamline operations, monitor progress, and optimize outcomes." }
                        ].map((role, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-green-100 border border-blue-100 hover:border-green-200 transition-all"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.02 }}
                            >
                                <role.icon className="w-12 h-12 text-blue-500 mb-6" />
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{role.title}</h3>
                                <p className="text-gray-600">{role.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* Features Section with Updated Colors */}
            <section className="py-20 bg-white">
                <motion.div
                    className="container mx-auto px-6"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
                        Built for Visionaries, Crafted for Success
                    </h2>
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                    >
                        {[
                            { icon: FiBarChart, title: 'Pitch, Fund, Grow', desc: 'Funding and pitching portal' },
                            { icon: FiTarget, title: 'Discover, Track, Invest', desc: 'Investment discovery and tracking dashboard' },
                            { icon: FiLink, title: 'Collaborate, Innovate, Impact', desc: 'Research collaboration tools' },
                            { icon: FiTrendingUp, title: 'Manage, Analyze, Execute', desc: 'Project and team management tools' }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-6 rounded-xl bg-white hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-green-200"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* Success Stories with Updated Colors */}
            <section className="py-20 bg-gradient-to-b from-white to-blue-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
                        Stories of Impact and Innovation
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { author: 'Startup CEO', text: 'Thanks to InnovateHub, we secured funding and partnered with leading researchers to develop our groundbreaking technology.' },
                            { author: 'Investor', text: 'InnovateHub helped us discover high-impact investments that have changed the trajectory of our portfolio.' },
                            { author: 'Researcher', text: 'Through InnovateHub, we found partners to bring our research to life in the real world.' }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-blue-100 hover:shadow-green-100 hover:border-green-200 transition-all">
                                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                                <p className="font-semibold text-blue-600">- {testimonial.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section with Updated Colors */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Take the Next Step?</h2>
                    <p className="text-xl mb-8">Whether you're launching a startup, investing in the next big idea, or conducting pioneering research, InnovateHub is here to support your journey.</p>
                    <div className="space-x-4">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition transform hover:scale-105">
                            Start Your Journey
                        </button>
                        <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition transform hover:scale-105">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
                        Collaborate with Industry Leaders and Visionaries
                    </h2>
                    <p className="text-xl text-gray-600 text-center mb-12">
                        Our platform is not just about tools—it's about community. InnovateHub provides networking opportunities,
                        industry events, and exclusive webinars to foster collaboration and growth.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;