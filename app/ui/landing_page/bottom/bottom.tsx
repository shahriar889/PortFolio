import { TbSql } from "react-icons/tb";
import { SiCplusplus, SiTypescript, SiAngular, SiNextdotjs } from "react-icons/si";
import { FaJava } from "react-icons/fa";


const Bottom = () => {
    const icons: React.ReactNode[] = [
        <SiCplusplus className="h-6 w-6"/>,
        <SiTypescript className="h-6 w-6" />,
        <FaJava className="h-6 w-6" />,
        <TbSql className="h-6 w-6" />,
        <SiAngular className="h-6 w-6" />,
        <SiNextdotjs className="h-6 w-6" />,
    ];
    return ( 
        <section className="mx-auto flex flex-col w-full max-w-7xl justify-between gap-6 px-6 py-3 sm:px-8 lg:px-16">
            <h2 className="text-lg lg:text-2xl font-semibold tracking-tight text-gray-700">
                Skills & Technologies
            </h2>
            <div className="flex gap-6">
                {icons.map((icon, index) => (
                    <div key={index} className="text-gray-600 w-full">
                        {icon}
                    </div>
                ))}
            </div>
        </section>
     );
}
 
export default Bottom;