
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  id?: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

const ArticleCard = ({ id = 1, title, excerpt, author, date, readTime, category, image, featured = false }: ArticleCardProps) => {
  if (featured) {
    return (
      <Link href={`/article/${id}`}>
        <article className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="aspect-w-16 aspect-h-9">
            <Image
              height={250}
              width={300}
              src={`https://images.unsplash.com/${image}`}
              alt={title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center mb-4">
              <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {category}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors line-clamp-2">
              {title}
            </h2>
            <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
              {excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="font-medium text-gray-900">{author}</span>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {date}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {readTime}
                </div>
              </div>
              <button className="group/btn flex items-center text-purple-600 hover:text-purple-700 font-medium">
                Read More
                <ArrowRight className="ml-1 group-hover/btn:translate-x-1 transition-transform" size={16} />
              </button>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/article/${id}`}>
      <article className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="aspect-w-16 aspect-h-9">
          <Image
            height={150}
            width={150}
            quality={60}
            src={`https://images.unsplash.com/${image}`}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center mb-3">
            <span className="inline-block bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
            {excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="font-medium text-gray-900">{author}</span>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <Calendar size={12} className="mr-1" />
                {date}
              </div>
              <div className="flex items-center">
                <Clock size={12} className="mr-1" />
                {readTime}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
