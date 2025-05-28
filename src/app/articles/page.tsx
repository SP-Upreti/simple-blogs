
import { Search } from 'lucide-react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import ArticleCard from '@/components/ArticleCard';

const Articles = () => {
    // const [searchTerm, setSearchTerm] = useState('');
    // const [selectedCategory] = useState('All');

    // Sample articles data
    const articles = [
        {
            id: 1,
            title: "The Future of Web Development",
            excerpt: "Exploring the latest trends and technologies shaping the future of web development, from AI integration to advanced frameworks.",
            author: "Sarah Johnson",
            date: "Mar 15, 2024",
            readTime: "8 min read",
            category: "Technology",
            image: "photo-1488590528505-98d2b5aba04b"
        },
        {
            id: 2,
            title: "Mastering Remote Work Productivity",
            excerpt: "Essential tips and strategies for maintaining high productivity while working from home in the modern digital age.",
            author: "David Chen",
            date: "Mar 12, 2024",
            readTime: "6 min read",
            category: "Productivity",
            image: "photo-1649972904349-6e44c42644a7"
        },
        {
            id: 3,
            title: "Understanding Modern JavaScript",
            excerpt: "A deep dive into ES6+ features and modern JavaScript development practices that every developer should know.",
            author: "Emily Rodriguez",
            date: "Mar 10, 2024",
            readTime: "12 min read",
            category: "Programming",
            image: "photo-1461749280684-dccba630e2f6"
        },
        {
            id: 4,
            title: "Building Responsive Design Systems",
            excerpt: "Learn how to create scalable and maintainable design systems that work across all devices and screen sizes.",
            author: "Michael Thompson",
            date: "Mar 8, 2024",
            readTime: "10 min read",
            category: "Design",
            image: "photo-1460925895917-afdab827c52f"
        },
        {
            id: 5,
            title: "The Art of Digital Minimalism",
            excerpt: "Discover how to embrace digital minimalism to reduce distractions and focus on what truly matters in your digital life.",
            author: "Lisa Park",
            date: "Mar 5, 2024",
            readTime: "7 min read",
            category: "Lifestyle",
            image: "photo-1581091226825-a6a2a5aee158"
        },
        {
            id: 6,
            title: "Advanced React Patterns",
            excerpt: "Explore advanced React patterns and techniques to build more efficient and maintainable React applications.",
            author: "Alex Kumar",
            date: "Mar 3, 2024",
            readTime: "15 min read",
            category: "Programming",
            image: "photo-1461749280684-dccba630e2f6"
        }
    ];

    // const categories = ['All', 'Technology', 'Programming', 'Design', 'Productivity', 'Lifestyle'];

    // const filteredArticles = articles.filter(article => {
    //     const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    //     const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    //     return matchesSearch && matchesCategory;
    // });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="pt-28 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        All Articles
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover insights, tutorials, and stories from our community of writers
                    </p>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-8 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search articles..."

                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex items-center gap-2">
                            <Select>
                                <SelectTrigger >
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Technology</SelectLabel>
                                        <SelectItem value="apple">Travels</SelectItem>
                                        <SelectItem value="banana">Entertainment</SelectItem>
                                        <SelectItem value="blueberry">Programming</SelectItem>
                                        <SelectItem value="grapes">Lifestyle</SelectItem>
                                        <SelectItem value="pineapple">Cooking</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {articles.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {articles.map(article => (
                                <ArticleCard key={article.id} {...article} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-xl text-gray-600 mb-4">No articles found</p>
                            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Articles;
