"use client"

import { FaGithub, FaLinkedin } from "react-icons/fa";
import {HomeIcon, FolderIcon, EnvelopeIcon} from '@heroicons/react/24/outline';
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";


const links = [
    {
        name: "Projects",
        href: "#",
        icon: FolderIcon
    },
    {
        name: "GitHub",
        href: "https://github.com/shahriar889",
        icon: FaGithub
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/khandaker-shahriar-rahman-ba7b03233",
        icon: FaLinkedin
    }
]

const NavBar = () => {
    // const pathname = usePathname();
    return ( 
        <div className="w-full flex items-center justify-between p-6 h-14">
            <div>
                <Link 
                    key="home"
                    href="/"
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                    <HomeIcon className="w-5 h-5"/>
                    <p className="hidden md:block">Home</p>
                </Link>
            </div>
            <div className="flex gap-10">
                {links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            className="flex h-12 items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkIcon className="w-6" />
                            <p className="hidden md:block">{link.name}</p>
                        </a>
                    );
                })}
            </div>
        </div>
     );
}

 
export default NavBar;