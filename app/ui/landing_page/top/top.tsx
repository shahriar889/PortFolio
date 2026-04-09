"use client";

import Image from "next/image";
import { DownloadIcon } from "lucide-react";
import { useState } from "react";

const Top = () => {
  const icon: React.ReactNode = <DownloadIcon size={20} />;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("shahriarrahman889@gmail.com");
      alert("Email copied!");
    } catch {
      alert("Copy failed. Email: shahriarrahman889@gmail.com");
    }

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  return (
    <section className="mx-auto flex flex-col w-full lg:flex-row max-w-7xl justify-between gap-12 px-6 py-3 sm:px-8 lg:px-16 ">
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col w-full lg:w-fit leading-none text-center lg:text-left">
          <h1 className="text-xl lg:text-4xl font-semibold tracking-tight text-gray-700">
            Khandaker Shahriar
          </h1>
          <h1 className="text-xl self-center font-semibold tracking-tight text-gray-700 lg:text-4xl">
            Rahman
          </h1>
        </div>

        <h3 className="mt-6 font-semibold text-gray-700 lg:text-2xl">
          Recent Computer Science Graduate
        </h3>

        <p className="mt-4 max-w-xl leading-8 text-gray-600">
          I&apos;m a recent computer science graduate from Simon Fraser University
          specializing in building and deploying real-world applications.
        </p>

        <div className="mt-8 flex gap-4">
          <a 
          href="/resume.pdf"
          download="Shahriar_Rahman_Resume.pdf"
          className="rounded-xl bg-blue-600 px-6 py-3 text-white shadow-sm transition hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2">
              {icon}
              Resume
            </span>
          </a>
          <button 
          onClick={handleCopy}
          className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-gray-700 transition hover:bg-gray-50"
          >
            {copied ? "Email Copied!" : "Contact Me"}
          </button>
        </div>
      </div>

      <div className="flex w-full lg:max-h-125 justify-center lg:w-1/2 lg:justify-end">
          <div className="relative h-50 w-70 md:h-75 md:w-95 overflow-hidden rounded-4xl shaadow-xl">
            <Image
              src="/pro_pic.png"
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>
      </div>
    </section>
  );
};

export default Top;