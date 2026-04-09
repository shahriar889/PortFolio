import DoCard from "./do_card";
import { Code, Database, Cpu, Wrench } from "lucide-react";

type DoCardProps = {
    heading: string;
    icon: React.ReactNode;
    description: string;
};

const Middle = () => {
    const cards: DoCardProps[] = [
        {
            heading: "Full-Stack Web Applications",
            icon: <Code className="h-6 w-6" />,
            description: "Developing efficient systems-level code with C++ and concurrency."
        },
        {
            heading: "Systems & Low-Level Programming",
            icon: <Cpu className="h-6 w-6" />,
            description: "Building intuitive and responsive web applications using modern frameworks."
        },
        {
            heading: "Scalable Backend Services",
            icon: <Database className="h-6 w-6" />,
            description: "Designing scalable and high-performance backend services and APIs."
        },
        {
            heading: "Problem Solving & Algorithms",
            icon: <Wrench className="h-6 w-6" />,
            description: "Applying algorithms and data structures to solve complex problems."
        }
    ];

    return ( 
       <section className="mx-auto flex flex-col w-full max-w-7xl justify-between gap-6 px-6 py-3 sm:px-8 lg:px-16">
            <h2 className="text-lg lg:text-2xl font-semibold tracking-tight text-gray-700">
                What I Do
            </h2>
            <p className="tracking-tight text-gray-600">
                Full-Stack Development and Systems Engineering
            </p>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                {cards.map((card, index) => (
                    <DoCard
                        key={index}
                        heading={card.heading}
                        icon={card.icon}
                        description={card.description}
                    />
                ))}
            </div>
        </section>
    );
}
 
export default Middle;