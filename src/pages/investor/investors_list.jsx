import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
    MagnifyingGlass, 
    Funnel, 
    CaretUp, 
    CaretDown,
    Star,
    Buildings,
    Briefcase,
    Globe,
    MapPin,
    ArrowUpRight,
    ChartLineUp,
    Handshake
} from '@phosphor-icons/react';

const InvestorsList = () => {
    const [sortOrder, setSortOrder] = useState('desc');
    const [filterOpen, setFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        type: '',
        focus: '',
        location: '',
        portfolioMin: '',
        portfolioMax: '',
        investmentMin: '',
        investmentMax: ''
    });

    const investors = [
        {
            id: 1,
            name: "Venture Capital Partners",
            logo: "https://ui-avatars.com/api/?name=Venture+Capital&background=6366f1&color=fff",
            description: "Leading early-stage technology investments across AI, Blockchain, and SaaS",
            type: "Venture Capital",
            portfolioSize: "$500M",
            investmentRange: "$1M - $10M",
            focus: "Technology",
            location: "San Francisco, CA",
            rating: 4.9,
            successfulExits: 15
        },
        {
            id: 2,
            name: "Green Energy Fund",
            logo: "https://ui-avatars.com/api/?name=Green+Energy&background=22c55e&color=fff",
            description: "Focused on sustainable energy and cleantech innovations",
            type: "Impact Investment",
            portfolioSize: "$300M",
            investmentRange: "$2M - $15M",
            focus: "Clean Energy",
            location: "Boston, MA",
            rating: 4.7,
            successfulExits: 8
        },
        {
            id: 3,
            name: "Healthcare Innovations Capital",
            logo: "https://ui-avatars.com/api/?name=Healthcare+Innovations&background=ec4899&color=fff",
            description: "Investing in breakthrough healthcare and biotech solutions",
            type: "Healthcare VC",
            portfolioSize: "$750M",
            investmentRange: "$5M - $25M",
            focus: "Healthcare",
            location: "Cambridge, MA",
            rating: 4.8,
            successfulExits: 12
        },
        {
            id: 4,
            name: "Global Tech Ventures",
            logo: "https://ui-avatars.com/api/?name=Global+Tech&background=f59e0b&color=fff",
            description: "International technology investment firm with focus on emerging markets",
            type: "Global VC",
            portfolioSize: "$1B",
            investmentRange: "$3M - $20M",
            focus: "Technology",
            location: "New York, NY",
            rating: 4.6,
            successfulExits: 25
        },
        {
            id: 5,
            name: "Innovation Angels Network",
            logo: "https://ui-avatars.com/api/?name=Innovation+Angels&background=3b82f6&color=fff",
            description: "Angel investor network focusing on early-stage startups",
            type: "Angel Network",
            portfolioSize: "$100M",
            investmentRange: "$250K - $2M",
            focus: "Mixed",
            location: "Austin, TX",
            rating: 4.5,
            successfulExits: 10
        },
        {
            id: 6,
            name: "Future Fund Partners",
            logo: "https://ui-avatars.com/api/?name=Future+Fund&background=8b5cf6&color=fff",
            description: "Next-generation technology and sustainability investments",
            type: "Venture Capital",
            portfolioSize: "$400M",
            investmentRange: "$2M - $12M",
            focus: "Tech & Sustainability",
            location: "Seattle, WA",
            rating: 4.7,
            successfulExits: 9
        }
    ];

    // Get unique values for filters
    const types = [...new Set(investors.map(investor => investor.type))];
    const focuses = [...new Set(investors.map(investor => investor.focus))];
    const locations = [...new Set(investors.map(investor => investor.location))];

    // Filter and sort investors
    const filteredInvestors = useMemo(() => {
        return investors
            .filter(investor => {
                const matchesSearch = investor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    investor.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    investor.focus.toLowerCase().includes(searchQuery.toLowerCase());

                const matchesType = !filters.type || investor.type === filters.type;
                const matchesFocus = !filters.focus || investor.focus === filters.focus;
                const matchesLocation = !filters.location || investor.location === filters.location;
                
                const portfolioSize = parseFloat(investor.portfolioSize.replace(/[^0-9.-]+/g, ''));
                const matchesPortfolioMin = !filters.portfolioMin || portfolioSize >= parseFloat(filters.portfolioMin);
                const matchesPortfolioMax = !filters.portfolioMax || portfolioSize <= parseFloat(filters.portfolioMax);

                const investmentMin = parseFloat(investor.investmentRange.split('-')[0].replace(/[^0-9.-]+/g, ''));
                const investmentMax = parseFloat(investor.investmentRange.split('-')[1].replace(/[^0-9.-]+/g, ''));
                const matchesInvestmentMin = !filters.investmentMin || investmentMax >= parseFloat(filters.investmentMin);
                const matchesInvestmentMax = !filters.investmentMax || investmentMin <= parseFloat(filters.investmentMax);

                return matchesSearch && matchesType && matchesFocus && matchesLocation && 
                       matchesPortfolioMin && matchesPortfolioMax && 
                       matchesInvestmentMin && matchesInvestmentMax;
            })
            .sort((a, b) => {
                const ratingA = parseFloat(a.rating);
                const ratingB = parseFloat(b.rating);
                return sortOrder === 'asc' ? ratingA - ratingB : ratingB - ratingA;
            });
    }, [investors, searchQuery, filters, sortOrder]);

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
                        Connect with Leading Investors
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
                        Discover investment opportunities and connect with top venture capitalists, angel investors, and investment firms.
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
                                placeholder="Search investors..."
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
                                <label className="block text-gray-700">Investor Type</label>
                                <select 
                                    value={filters.type}
                                    onChange={(e) => handleFilterChange('type', e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-800"
                                >
                                    <option value="">All Types</option>
                                    {types.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-4">
                                <label className="block text-gray-700">Investment Focus</label>
                                <select 
                                    value={filters.focus}
                                    onChange={(e) => handleFilterChange('focus', e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-800"
                                >
                                    <option value="">All Focus Areas</option>
                                    {focuses.map(focus => (
                                        <option key={focus} value={focus}>{focus}</option>
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

                            <div className="space-y-4 md:col-span-3">
                                <label className="block text-gray-700">Portfolio Size Range ($M)</label>
                                <div className="flex gap-4">
                                    <input
                                        type="number"
                                        placeholder="Min Portfolio"
                                        value={filters.portfolioMin}
                                        onChange={(e) => handleFilterChange('portfolioMin', e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-800"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Max Portfolio"
                                        value={filters.portfolioMax}
                                        onChange={(e) => handleFilterChange('portfolioMax', e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-800"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4 md:col-span-3">
                                <label className="block text-gray-700">Investment Range ($M)</label>
                                <div className="flex gap-4">
                                    <input
                                        type="number"
                                        placeholder="Min Investment"
                                        value={filters.investmentMin}
                                        onChange={(e) => handleFilterChange('investmentMin', e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-800"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Max Investment"
                                        value={filters.investmentMax}
                                        onChange={(e) => handleFilterChange('investmentMax', e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-800"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Investors Grid */}
            <section className="px-4 md:px-8 pb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredInvestors.map((investor) => (
                            <motion.div
                                key={investor.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white border border-blue-200 rounded-xl p-6 hover:border-green-400 transition-all group shadow-lg hover:shadow-green-100"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <motion.img 
                                        src={investor.logo} 
                                        alt={`${investor.name} logo`}
                                        className="w-16 h-16 rounded-xl object-cover bg-gradient-to-br from-blue-50 to-green-50"
                                        onError={handleImageError}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 transition-all">
                                            {investor.name}
                                        </h3>
                                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                                            <MapPin weight="bold" size={16} className="text-blue-500" />
                                            <span>{investor.location}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                                        <Star weight="fill" size={16} />
                                        <span className="font-semibold">{investor.rating}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors">
                                    {investor.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 rounded-lg p-2 hover:bg-blue-50 transition-colors">
                                        <Buildings weight="bold" size={16} className="text-blue-500" />
                                        <span>{investor.type}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 rounded-lg p-2 hover:bg-green-50 transition-colors">
                                        <Globe weight="bold" size={16} className="text-green-500" />
                                        <span>{investor.focus}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 rounded-lg p-2 hover:bg-blue-50 transition-colors">
                                        <ChartLineUp weight="bold" size={16} className="text-blue-500" />
                                        <span>{investor.portfolioSize}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 rounded-lg p-2 hover:bg-green-50 transition-colors">
                                        <Handshake weight="bold" size={16} className="text-green-500" />
                                        <span>{investor.successfulExits} Exits</span>
                                    </div>
                                </div>

                                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg text-white hover:from-blue-600 hover:to-green-600 transition-all group relative overflow-hidden shadow-lg">
                                    <span className="relative z-10 font-medium">View Profile</span>
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

export default InvestorsList;
