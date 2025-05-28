
import { Code, Palette, Briefcase, Heart, Globe, BookOpen } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      name: "Technology",
      icon: Code,
      count: 42,
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "Design",
      icon: Palette,
      count: 28,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50"
    },
    {
      name: "Business",
      icon: Briefcase,
      count: 35,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50"
    },
    {
      name: "Lifestyle",
      icon: Heart,
      count: 21,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50"
    },
    {
      name: "Travel",
      icon: Globe,
      count: 18,
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50"
    },
    {
      name: "Education",
      icon: BookOpen,
      count: 31,
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find articles that match your interests across various topics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className={`inline-flex p-3 rounded-lg ${category.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-6 w-6 bg-gradient-to-r ${category.color} bg-clip-text text-${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600">
                  {category.count} articles
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
