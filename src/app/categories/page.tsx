import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GridIcon, ListIcon, SearchIcon } from "@/components/icons";

const categories = [
    {
        id: 1,
        title: "Technology",
        description: "Latest tech trends and innovations",
        postCount: 28,
        color: "bg-blue-100 text-blue-800"
    },
    {
        id: 2,
        title: "Design",
        description: "UI/UX, graphics, and creative work",
        postCount: 42,
        color: "bg-purple-100 text-purple-800"
    },
    {
        id: 3,
        title: "Business",
        description: "Entrepreneurship and career growth",
        postCount: 19,
        color: "bg-green-100 text-green-800"
    },
    {
        id: 4,
        title: "Lifestyle",
        description: "Health, travel, and personal growth",
        postCount: 35,
        color: "bg-pink-100 text-pink-800"
    },
    {
        id: 5,
        title: "Programming",
        description: "Coding tutorials and development",
        postCount: 56,
        color: "bg-yellow-100 text-yellow-800"
    },
    {
        id: 6,
        title: "Science",
        description: "Discoveries and research",
        postCount: 23,
        color: "bg-indigo-100 text-indigo-800"
    },
];

export default function CategoriesPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Explore Categories
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Discover content organized by topics that interest you most
                    </p>
                </div>

                <div className="mb-10 flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <div className="relative w-full sm:max-w-md">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            placeholder="Search categories..."
                            className="pl-10 py-6 rounded-xl border-muted-foreground/20"
                        />
                    </div>

                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-xl">
                            <GridIcon className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-xl">
                            <ListIcon className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Card
                            key={category.id}
                            className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* <div className={cn("h-3 w-full", category.color)}></div> */}
                            <CardHeader className="pb-0">
                                <div className="flex justify-between items-start">
                                    <CardTitle className="text-2xl font-bold">{category.title}</CardTitle>
                                    <Badge
                                        className={cn("text-white font-semibold", category.color)}
                                    >
                                        {category.postCount}
                                    </Badge>
                                </div>
                                <CardDescription className="pt-3 text-base">
                                    {category.description}
                                </CardDescription>
                            </CardHeader>
                            <div className="p-6 pt-4">
                                <Button
                                    variant="outline"
                                    className="w-full border-muted-foreground/20"
                                >
                                    View Posts
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}