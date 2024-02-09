"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/hooks";

export default function About() {
    const {ref} = useSectionInView("About");

    return (<motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.175}}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                As a Full-Stack Developer, I thrive on creating robust and scalable web applications that deliver
                seamless user experiences. My journey into the world of technology began with a keen interest in both
                front-end and back-end development, and I've honed my skills in various technologies to become
                proficient across the entire stack.
            </p>

            <p className="mb-3">
                On the front end, I excel in crafting dynamic and interactive user interfaces using React and Next.js.
                These technologies enable me to build modern, efficient, and visually appealing web applications that
                meet the ever-evolving needs of users.
            </p>

            <p className="mb-3">
                DevOps is not just a set of practices for me; it's a philosophy that I embrace wholeheartedly. I am
                well-versed in implementing continuous integration and deployment (CI/CD) pipelines, ensuring a
                streamlined and automated development workflow. From version control to containerization, I believe in
                optimizing the development process for efficiency and reliability. </p>
        </motion.section>);
}
