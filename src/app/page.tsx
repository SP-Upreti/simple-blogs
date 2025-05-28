import Categories from "@/components/Categories";
import FeaturedArticles from "@/components/FeaturedArticles";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedArticles />
      <Categories />
      <Newsletter />
    </main>
  );
}
