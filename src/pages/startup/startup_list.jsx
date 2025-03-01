import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
    MagnifyingGlass, 
    Funnel, 
    CaretUp, 
    CaretDown,
    Star,
    Users,
    Briefcase,
    Calendar,
    MapPin,
    ArrowUpRight
} from '@phosphor-icons/react';

const StartupList = () => {
    const [sortOrder, setSortOrder] = useState('desc');
    const [filterOpen, setFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        category: '',
        location: '',
        fundingMin: '',
        fundingMax: '',
        foundedYear: ''
    });

    const startups = [
        {
            id: 1,
            name: "TechVision AI",
            logo: "https://ui-avatars.com/api/?name=Tech+Vision&background=6366f1&color=fff",
            description: "AI-powered computer vision solutions for enterprise",
            category: "Artificial Intelligence",
            funding: "$5.2M",
            employees: "25-50",
            founded: "2021",
            location: "San Francisco, CA",
            rating: 4.8
        },
        {
            id: 2,
            name: "GreenTech Solutions",
            logo: "https://ui-avatars.com/api/?name=Green+Tech&background=22c55e&color=fff",
            description: "Sustainable energy solutions for modern businesses",
            category: "Clean Energy",
            funding: "$3.8M",
            employees: "10-25",
            founded: "2022",
            location: "Austin, TX",
            rating: 4.5
        },
        {
            id: 3,
            name: "HealthAI Labs",
            logo: "https://ui-avatars.com/api/?name=Health+AI&background=ec4899&color=fff",
            description: "Revolutionary healthcare diagnostics using AI",
            category: "Healthcare",
            funding: "$7.2M",
            employees: "50-100",
            founded: "2020",
            location: "Boston, MA",
            rating: 4.9
        },
        {
            id: 4,
            name: "FinTech Flow",
            logo: "https://ui-avatars.com/api/?name=Fin+Tech&background=f59e0b&color=fff",
            description: "Next-generation financial technology solutions",
            category: "FinTech",
            funding: "$4.5M",
            employees: "20-40",
            founded: "2021",
            location: "New York, NY",
            rating: 4.6
        },
        {
            id: 5,
            name: "CyberShield",
            logo: "https://ui-avatars.com/api/?name=Cyber+ Shield&background=3b82f6&color=fff",
            description: "Advanced cybersecurity for enterprise",
            category: "Cybersecurity",
            funding: "$6.7M",
            employees: "30-60",
            founded: "2020",
            location: "Seattle, WA",
            rating: 4.7
        },
        {
            id: 6,
            name: "EduTech Pro",
            logo: "https://ui-avatars.com/api/?name=Edu+Tech&background=8b5cf6&color=fff",
            description: "Revolutionary educational technology platform",
            category: "Education",
            funding: "$3.2M",
            employees: "15-30",
            founded: "2022",
            location: "Chicago, IL",
            rating: 4.4
        }
    ];

    // Get unique categories and locations for filters
    const categories = [...new Set(startups.map(startup => startup.category))];
    const locations = [...new Set(startups.map(startup => startup.location))];
    const years = [...new Set(startups.map(startup => startup.founded))];

    // Filter and sort startups
    const filteredStartups = useMemo(() => {
        return startups
            .filter(startup => {
                const matchesSearch = startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    startup.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    startup.category.toLowerCase().includes(searchQuery.toLowerCase());

                const matchesCategory = !filters.category || startup.category === filters.category;
                const matchesLocation = !filters.location || startup.location === filters.location;
                const matchesYear = !filters.foundedYear || startup.founded === filters.foundedYear;
                
                const startupFunding = parseFloat(startup.funding.replace(/[^0-9.-]+/g, ''));
                const matchesFundingMin = !filters.fundingMin || startupFunding >= parseFloat(filters.fundingMin);
                const matchesFundingMax = !filters.fundingMax || startupFunding <= parseFloat(filters.fundingMax);

                return matchesSearch && matchesCategory && matchesLocation && 
                       matchesYear && matchesFundingMin && matchesFundingMax;
            })
            .sort((a, b) => {
                const ratingA = parseFloat(a.rating);
                const ratingB = parseFloat(b.rating);
                return sortOrder === 'asc' ? ratingA - ratingB : ratingB - ratingA;
            });
    }, [startups, searchQuery, filters, sortOrder]);

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const handleImageError = (e) => {
        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(e.target.alt)}&background=6366f1&color=fff`;
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="pt-24 pb-12 px-4 md:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-7xl mx-auto text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
                        Discover Innovative Startups
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
                        Connect with groundbreaking startups and explore the future of innovation.
                    </p>
                </motion.div>
            </section>

            {/* Search and Filter Section */}
            <section className="px-4 md:px-8 mb-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
                        <div className="flex-1 relative">
                            <MagnifyingGlass className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input 
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search startups..."
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Filter Button */}
                        <button 
                            onClick={() => setFilterOpen(!filterOpen)}
                            className="flex items-center gap-2 px-6 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 hover:bg-gray-100 transition-all"
                        >
                            <Funnel size={20} />
                            <span>Filters</span>
                        </button>

                        {/* Sort Button */}
                        <button 
                            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                            className="flex items-center gap-2 px-6 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 hover:bg-gray-100 transition-all"
                        >
                            {sortOrder === 'asc' ? <CaretUp size={20} /> : <CaretDown size={20} />}
                            <span>Sort</span>
                        </button>
                    </div>

                    {filterOpen && (
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 p-6 bg-gray-50 border border-gray-200 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                            <div className="space-y-4">
                                <label className="block text-gray-700">Category</label>
                                <select 
                                    value={filters.category}
                                    onChange={(e) => handleFilterChange('category', e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-800"
                                >
                                    <option value="">All Categories</option>
                                    {categories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-4">
                                <label className="block text-gray-700">Location</label>
                                <select 
                                    value={filters.location}
                                    onChange={(e) => handleFilterChange('location', e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-800"
                                >
                                    <option value="">All Locations</option>
                                    {locations.map(location => (
                                        <option key={location} value={location}>{location}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-4">
                                <label className="block text-gray-700">Founded Year</label>
                                <select 
                                    value={filters.foundedYear}
                                    onChange={(e) => handleFilterChange('foundedYear', e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-800"
                                >
                                    <option value="">All Years</option>
                                    {years.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-4 md:col-span-3">
                                <label className="block text-gray-700">Funding Range</label>
                                <div className="flex gap-4">
                                    <input
                                        type="number"
                                        placeholder="Min ($M)"
                                        value={filters.fundingMin}
                                        onChange={(e) => handleFilterChange('fundingMin', e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-800"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Max ($M)"
                                        value={filters.fundingMax}
                                        onChange={(e) => handleFilterChange('fundingMax', e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-800"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Startups Grid */}
            <section className="px-4 md:px-8 pb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredStartups.map((startup) => (
                            <motion.div
                                key={startup.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white border border-blue-200 rounded-xl p-6 hover:border-green-400 transition-all group shadow-lg hover:shadow-green-100"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <motion.img 
                                        src={startup.logo} 
                                        alt={`${startup.name} logo`}
                                        className="w-16 h-16 rounded-xl object-cover bg-gradient-to-br from-blue-50 to-green-50"
                                        onError={handleImageError}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 transition-all">
                                            {startup.name}
                                        </h3>
                                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                                            <MapPin weight="bold" size={16} className="text-blue-500" />
                                            <span>{startup.location}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                                        <Star weight="fill" size={16} />
                                        <span className="font-semibold">{startup.rating}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors">
                                    {startup.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 rounded-lg p-2 hover:bg-blue-50 transition-colors">
                                        <Briefcase weight="bold" size={16} className="text-blue-500" />
                                        <span>{startup.category}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 rounded-lg p-2 hover:bg-green-50 transition-colors">
                                        <Users weight="bold" size={16} className="text-green-500" />
                                        <span>{startup.employees}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 rounded-lg p-2 hover:bg-blue-50 transition-colors">
                                        <Calendar weight="bold" size={16} className="text-blue-500" />
                                        <span>Founded {startup.founded}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 rounded-lg p-2 hover:bg-green-50 transition-colors">
                                        <span className="font-semibold">{startup.funding}</span>
                                    </div>
                                </div>

                                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg text-white hover:from-blue-600 hover:to-green-600 transition-all group relative overflow-hidden shadow-lg">
                                    <span className="relative z-10 font-medium">View Details</span>
                                    <ArrowUpRight 
                                        size={20}
                                        weight="bold"
                                        className="relative z-10 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StartupList;
