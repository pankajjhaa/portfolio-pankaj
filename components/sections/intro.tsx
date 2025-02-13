'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            id="home"
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] relative"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
                <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
            </div>

            {/* Profile Image Section */}
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            duration: 0.2,
                        }}
                    >
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-300" />
                            <Image
                                src="/pankaj.jpg"
                                alt="Pankaj Jha"
                                width="192"
                                height="192"
                                quality="95"
                                priority={true}
                                className="relative h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl group-hover:scale-105 transition duration-300"
                            />
                        </div>
                    </motion.div>

                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0, rotate: -45 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>

            {/* Introduction Text */}
            <motion.div
                className="mt-8 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600">
                    Hello, I'm Pankaj Jha
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                    I'm a{" "}
                    <span className="font-medium text-blue-600">full-stack developer</span> with{" "}
                    <span className="font-medium text-purple-600">5 years</span> of experience.
                    I enjoy building <span className="italic">sites & apps</span>. My focus is{" "}
                    <span className="underline decoration-blue-500/50 decoration-2">React (Next.js)</span>.
                </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Button
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full hover:bg-gray-800 transition"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    <Link href="#contact" className="flex items-center gap-2">
                        Contact me here{" "}
                        <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                    </Link>
                </Button>

                <Button
                    variant="outline"
                    className="group border-2 px-7 py-3 flex items-center gap-2 rounded-full hover:bg-gray-50 transition"
                >
                    <a href="/pankajCV.pdf" download className="flex items-center gap-2">
                        Download CV{" "}
                        <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                    </a>
                </Button>

                {/* Social Links */}
                <div className="flex gap-4">
                    <a
                        href="https://www.linkedin.com/in/pankaj-jha-652610187/"
                        target="_blank"
                        className="bg-white p-4 text-gray-700 hover:text-blue-500 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
                    >
                        <BsLinkedin className="w-5 h-5" />
                    </a>

                    <a
                        href="https://github.com/pankajjhaa"
                        target="_blank"
                        className="bg-white p-4 text-gray-700 hover:text-gray-900 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
                    >
                        <FaGithubSquare className="w-5 h-5" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}