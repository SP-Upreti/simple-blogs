"use client"
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const AnimatedNumber = ({ number }: { number: string }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 1.0, // fully in view
    });

    const [springs, api] = useSpring(() => ({ val: 0 }));

    useEffect(() => {
        if (inView) {
            const cleanNumber = parseFloat(number.replace(/[^0-9.]/g, ''));
            api.start({
                val: cleanNumber,
                config: { duration: 2000 }, // 🕒 3 seconds animation

            });
        }
    }, [inView, number, api]);

    const formatNumber = (val: number) => {
        return number.includes("K")
            ? `${Math.floor(val)}K+`
            : number.includes("M")
                ? `$${Math.floor(val)}M+`
                : `${Math.floor(val)}+`;
    };

    return (
        <div ref={ref}>
            <animated.span>
                {springs.val.to((val) => formatNumber(val))}
            </animated.span>
        </div>
    );
};

const Stats = () => {
    const stats = [
        {
            data: "75K+",
            title: "Active Users",
        },
        {
            data: "120K+",
            title: "Info & Articles",
        },
        {
            data: "60+",
            title: "Supported Countries",
        },
        {
            data: "$50M+",
            title: "Revenue Generated",
        },
    ];

    return (
        <section className="py-10">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 space-y-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our impacts in number
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        These stats highlight our journey, achievements, and global reach.
                    </p>
                </div>
                <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
                    {stats.map((item, idx) => (
                        <li
                            key={idx}
                            className="text-center bg-white shadow-md border rounded-md border-gray-100 p-6"
                        >
                            <h4 className="text-4xl text-gray-800 font-semibold">
                                <AnimatedNumber number={item.data} />
                            </h4>
                            <p className="mt-3 text-gray-600 font-medium">{item.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Stats;