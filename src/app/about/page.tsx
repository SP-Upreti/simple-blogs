// app/about/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Linkedin, Mail, Twitter } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}


            <section className="relative  bg-gray-800">
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
                    <div className="space-y-5 max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
                            We&apos;re on a mission to <span className="">share knowledge</span> and <span className="">inspire creativity</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-400">
                            Our blog is a platform where ideas flourish and communities grow. We believe in the power of sharing to transform lives and industries.
                        </p>
                        <div className="flex gap-5 items-center justify-center">
                            <Button variant={"outline"}>Explore Our Community</Button>
                            <Button variant={"outline"} className="bg-transparent text-white">Join Our Community</Button>
                        </div>
                        <div className="flex justify-center items-center gap-x-4 text-gray-400 text-sm">
                            <div className="flex">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                            </div>
                            <p><span className="text-gray-100">5.0</span> by over 200 users</p>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
            </section>


            {/* Our Story */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
                        <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            How a simple idea grew into a thriving community of passionate creators and learners
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="text-5xl text-indigo-600 font-bold mb-4">2018</div>
                            <h3 className="text-xl font-semibold mb-3">The Beginning</h3>
                            <p className="text-gray-600">
                                Founded with a mission to create a space for meaningful tech discussions, starting as a small newsletter.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="text-5xl text-indigo-600 font-bold mb-4">2020</div>
                            <h3 className="text-xl font-semibold mb-3">Community Growth</h3>
                            <p className="text-gray-600">
                                Expanded to a full platform with thousands of active readers and hundreds of contributors.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="text-5xl text-indigo-600 font-bold mb-4">2024</div>
                            <h3 className="text-xl font-semibold mb-3">Today & Beyond</h3>
                            <p className="text-gray-600">
                                A thriving ecosystem with premium content, workshops, and a global community of creators.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4 md:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                        <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Principles that guide everything we do at our publication
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="border-0 shadow-lg rounded-md overflow-hidden">
                            <CardHeader className="bg-indigo-600 text-white">
                                <CardTitle>Authenticity</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <p className="text-gray-600">
                                    We believe in genuine stories and honest perspectives. No fluff, just real insights from real people.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg rounded-md overflow-hidden">
                            <CardHeader className="bg-purple-600 text-white">
                                <CardTitle>Inclusivity</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <p className="text-gray-600">
                                    Everyone has a story worth sharing. We&apos;re committed to amplifying diverse voices in tech and beyond.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg rounded-md overflow-hidden">
                            <CardHeader className="bg-pink-600 text-white">
                                <CardTitle>Quality</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <p className="text-gray-600">
                                    We maintain high editorial standards to deliver truly valuable content to our readers.
                                </p>
                            </CardContent>
                        </Card>

                        {/* <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                            <CardHeader className="bg-amber-600 text-white">
                                <CardTitle>Community</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <p className="text-gray-600">
                                    We foster meaningful connections and conversations that go beyond the articles we publish.
                                </p>
                            </CardContent>
                        </Card> */}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
                        <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The passionate individuals behind the scenes making it all happen
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Alex Morgan", role: "Founder & Editor", bio: "Tech enthusiast with 10+ years in content creation" },
                            { name: "Jordan Taylor", role: "Lead Developer", bio: "Full-stack wizard passionate about modern web tech" },
                            { name: "Sam Rivera", role: "Community Manager", bio: "Connector of people and cultivator of conversations" },
                            { name: "Casey Kim", role: "Design Director", bio: "Creating beautiful experiences that delight users" }
                        ].map((member, index) => (
                            <div key={index} className="group">
                                <div className="bg-white rounded-md shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                                    <div className="bg-gradient-to-r from-indigo-400 to-purple-500 h-20 relative">
                                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-white border-4 border-white overflow-hidden">
                                            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                                        </div>
                                    </div>
                                    <div className="pt-16 pb-8 px-4 text-center">
                                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                        <p className="text-indigo-600 mb-3">{member.role}</p>
                                        <p className="text-gray-600 text-sm">{member.bio}</p>
                                        <div className="flex justify-center gap-3 mt-4">
                                            <button className="text-gray-500 size-8 bg-indigo-50 rounded-md flex justify-center items-center hover:text-indigo-600 transition-colors">
                                                <Twitter size={18} />
                                            </button>
                                            <button className="text-gray-500 size-8 bg-indigo-50 rounded-md flex justify-center items-center hover:text-indigo-600 transition-colors">
                                                <Linkedin size={18} />
                                            </button>
                                            <button className="text-gray-500 size-8 bg-indigo-50 rounded-md flex justify-center items-center hover:text-indigo-600 transition-colors">
                                                <Mail size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-indigo-900 to-purple-800 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full p-2 mb-6">
                        <Heart className="text-pink-400 text-3xl" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
                    <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
                        Become part of a growing network of creators, thinkers, and innovators sharing knowledge and shaping the future.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="secondary" className="bg-white text-indigo-900 hover:bg-gray-100 font-semibold py-6 px-8 rounded-xl text-lg">
                            Subscribe to Newsletter
                        </Button>
                        <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-semibold py-6 px-8 rounded-xl text-lg">
                            Become a Contributor
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}