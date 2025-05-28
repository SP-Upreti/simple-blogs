
import ArticleCard from './ArticleCard';

const FeaturedArticles = () => {


  const articles = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for creating React applications that can grow with your business needs.",
      author: "Mike Chen",
      date: "Dec 12, 2023",
      readTime: "6 min read",
      category: "Development",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "The Art of UI/UX Design",
      excerpt: "Discover the principles that make great user interfaces and user experiences.",
      author: "Emma Davis",
      date: "Dec 10, 2023",
      readTime: "5 min read",
      category: "Design",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Remote Work Best Practices",
      excerpt: "How to stay productive and maintain work-life balance while working remotely.",
      author: "Alex Rodriguez",
      date: "Dec 8, 2023",
      readTime: "4 min read",
      category: "Lifestyle",
      image: "photo-1649972904349-6e44c42644a7"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked stories from our community of writers and industry experts
          </p>
        </div>

        {/* Featured Article
        <div className="mb-12 ">
          <ArticleCard {...featuredArticle} featured={true} />
        </div> */}

        {/* Regular Articles Grid */}
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
