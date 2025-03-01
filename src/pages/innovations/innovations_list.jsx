import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
    MagnifyingGlass, 
    Funnel, 
    CaretUp, 
    CaretDown,
    Star,
    Lightbulb,
    Certificate,
    FileText,
    MapPin,
    ArrowUpRight,
    Brain,
    ChartLineUp,
    Buildings,
    Clock
} from '@phosphor-icons/react';

const InnovationsList = () => {
    const [sortOrder, setSortOrder] = useState('desc');
    const [filterOpen, setFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        category: '',
        status: '',
        location: '',
        yearMin: '',
        yearMax: '',
        organization: ''
    });

    const innovations = [
        {
            id: 1,
            name: "AI-Powered Disease Detection",
            logo: "https://ui-avatars.com/api/?name=AI+Health&background=6366f1&color=fff",
            description: "Revolutionary AI system for early disease detection using advanced imaging analysis",
            category: "Healthcare",
            status: "Patent Granted",
            organization: "HealthTech Labs",
            year: "2023",
            location: "Boston, MA",
            rating: 4.9,
            impact: "High",
            citations: 45,
            patentNumber: "US20230123456"
        },
        {
            id: 2,
            name: "Quantum Computing Chip",
            logo: "https://ui-avatars.com/api/?name=Quantum+Tech&background=22c55e&color=fff",
            description: "Next-generation quantum computing chip with unprecedented qubit stability",
            category: "Computing",
            status: "Patent Pending",
            organization: "QuantumTech Solutions",
            year: "2023",
            location: "San Francisco, CA",
            rating: 4.8,
            impact: "Very High",
            citations: 32,
            patentNumber: "PCT/US23/12345"
        },
        {
            id: 3,
            name: "Sustainable Battery Technology",
            logo: "https://ui-avatars.com/api/?name=Green+Energy&background=ec4899&color=fff",
            description: "Eco-friendly battery technology with 3x longer lifespan",
            category: "Clean Energy",
            status: "Patent Granted",
            organization: "GreenPower Innovations",
            year: "2022",
            location: "Austin, TX",
            rating: 4.7,
            impact: "High",
            citations: 28,
            patentNumber: "US20220987654"
        },
        {
            id: 4,
            name: "Smart Agriculture System",
            logo: "https://ui-avatars.com/api/?name=Agri+Tech&background=f59e0b&color=fff",
            description: "IoT-based precision farming system with AI crop management",
            category: "Agriculture",
            status: "Patent Pending",
            organization: "AgriTech Solutions",
            year: "2023",
            location: "Chicago, IL",
            rating: 4.6,
            impact: "Medium",
            citations: 15,
            patentNumber: "PCT/US23/54321"
        },
        {
            id: 5,
            name: "Neural Interface Device",
            logo: "https://ui-avatars.com/api/?name=Neural+Tech&background=3b82f6&color=fff",
            description: "Brain-computer interface for enhanced human-machine interaction",
            category: "Neurotechnology",
            status: "Research Phase",
            organization: "NeuroTech Labs",
            year: "2023",
            location: "Seattle, WA",
            rating: 4.9,
            impact: "Very High",
            citations: 50,
            patentNumber: "Pending"
        },
        {
            id: 6,
            name: "Carbon Capture System",
            logo: "https://ui-avatars.com/api/?name=Carbon+Tech&background=8b5cf6&color=fff",
            description: "Advanced carbon capture and storage technology for industrial applications",
            category: "Environmental",
            status: "Patent Granted",
            organization: "CleanTech Solutions",
            year: "2022",
            location: "Houston, TX",
            rating: 4.7,
            impact: "High",
            citations: 35,
            patentNumber: "US20220456789"
        }
    ];

    // Get unique values for filters
    const categories = [...new Set(innovations.map(innovation => innovation.category))];
    const statuses = [...new Set(innovations.map(innovation => innovation.status))];
    const locations = [...new Set(innovations.map(innovation => innovation.location))];
    const organizations = [...new Set(innovations.map(innovation => innovation.organization))];
    const years = [...new Set(innovations.map(innovation => innovation.year))];

    // Filter and sort innovations
    const filteredInnovations = useMemo(() => {
        return innovations
            .filter(innovation => {
                const matchesSearch = innovation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    innovation.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    innovation.category.toLowerCase().includes(searchQuery.toLowerCase());

                const matchesCategory = !filters.category || innovation.category === filters.category;
                const matchesStatus = !filters.status || innovation.status === filters.status;
                const matchesLocation = !filters.location || innovation.location === filters.location;
                const matchesOrganization = !filters.organization || innovation.organization === filters.organization;
                
                const innovationYear = parseInt(innovation.year);
                const matchesYearMin = !filters.yearMin || innovationYear >= parseInt(filters.yearMin);
                const matchesYearMax = !filters.yearMax || innovationYear <= parseInt(filters.yearMax);

                return matchesSearch && matchesCategory && matchesStatus && matchesLocation && 
                       matchesOrganization && matchesYearMin && matchesYearMax;
            })
            .sort((a, b) => {
                const ratingA = parseFloat(a.rating);
                const ratingB = parseFloat(b.rating);
                return sortOrder === 'asc' ? ratingA - ratingB : ratingB - ratingA;
            });
    }, [innovations, searchQuery, filters, sortOrder]);

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
                        Explore Innovations
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
                        Discover breakthrough technologies and innovative solutions shaping the future.
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
                                placeholder="Search innovations..."
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <button 
                            onClick={() => setFilterOpen(!filterOpen)}
                            className="flex items-center gap-2 px-6 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 hover:bg-gray-100 transition-all"
                        >
                            <Funnel size={20} />
                            <span>Filters</span>
                        </button>

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
                                <label className="block text-gray-700">Status</label>
                                <select 
                                    value={filters.status}
                                    onChange={(e) => handleFilterChange('status', e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-800"
                                >
                                    <option value="">All Statuses</option>
                                    {statuses.map(status => (
                                        <option key={status} value={status}>{status}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-4">
                                <label className="block text-gray-700">Organization</label>
                                <select 
                                    value={filters.organization}
                                    onChange={(e) => handleFilterChange('organization', e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-800"
                                >
                                    <option value="">All Organizations</option>
                                    {organizations.map(org => (
                                        <option key={org} value={org}>{org}</option>
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

                            <div className="space-y-4 md:col-span-2">
                                <label className="block text-gray-700">Year Range</label>
                                <div className="flex gap-4">
                                    <input
                                        type="number"
                                        placeholder="From Year"
                                        value={filters.yearMin}
                                        onChange={(e) => handleFilterChange('yearMin', e.target.value)}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-gray-800"
                                    />
                                    <input
                                        type="number"
                                        placeholder="To Year"
                                        value={filters.yearMax}
                                        onChange={(e) => handleFilterChange('yearMax', e.target.value)}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-gray-800"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Innovations Grid */}
            <section className="px-4 md:px-8 pb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredInnovations.map((innovation) => (
                            <motion.div
                                key={innovation.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white border border-blue-200 rounded-xl p-6 hover:border-green-400 transition-all group shadow-lg hover:shadow-green-100"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <motion.img 
                                        src={innovation.logo} 
                                        alt={`${innovation.name} logo`}
                                        className="w-16 h-16 rounded-xl object-cover bg-gradient-to-br from-blue-50 to-green-50"
                                        onError={handleImageError}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 transition-all">
                                            {innovation.name}
                                        </h3>
                                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                                            <MapPin weight="bold" size={16} className="text-blue-500" />
                                            <span>{innovation.location}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                                        <Star weight="fill" size={16} />
                                        <span className="font-semibold">{innovation.rating}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors">
                                    {innovation.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 rounded-lg p-2 hover:bg-blue-50 transition-colors">
                                        <Lightbulb weight="bold" size={16} className="text-blue-500" />
                                        <span>{innovation.category}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 rounded-lg p-2 hover:bg-green-50 transition-colors">
                                        <Certificate weight="bold" size={16} className="text-green-500" />
                                        <span>{innovation.status}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 rounded-lg p-2 hover:bg-blue-50 transition-colors">
                                        <Buildings weight="bold" size={16} className="text-blue-500" />
                                        <span>{innovation.organization}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 rounded-lg p-2 hover:bg-green-50 transition-colors">
                                        <Brain weight="bold" size={16} className="text-green-500" />
                                        <span>{innovation.citations} Citations</span>
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

export default InnovationsList;
