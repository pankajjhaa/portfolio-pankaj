import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import foodnfeedimg from "@/public/projectsImage/foodnfeed.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    mode: "Remote",
    location: "Paris",
    company: "BRIEF",
    description:
      "I am working as a full-stack developer in this company. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, PostgresSql, Laravel, MySql, AWS Etc.",
    icon: React.createElement(FaReact),
    date: "Dec. 2021 - Present",
  },
  {
    title: "Backend Developer",
    mode: "On-Site",
    location: "Jaipur",
    company: "Pairroxz technologies",
    description:
      "I worked as a back-end developer in this company. My stack includes Laravel, Javascript, Ajax, Jquery, React, MySql, AWS, RestApi Etc.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec. 2020 - Dec. 2021",
  },
  {
    title: "Associate Php Developer",
    mode: "On-Site",
    location: "Jaipur",
    company: "Infoshore",
    description:
      "I worked as a back-end developer in this company. My stack includes Html, CSS, JS, PHP",
    icon: React.createElement(CgWorkAlt),
    date: "Mar. 2020 - Dec. 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Foodn'Feed",
    description:
      "I worked as a full-stack developer on this project. By this app restaurants can manage thier menus, menu printing, qrcode for menus and much more",
    tags: ["Next.js", "POSTGRES", "Tailwind", "Prisma", "Trpc", "AWS EC2", "AWS S3 Bucket", "Radis Bull Mq"],
    imageUrl: foodnfeedimg,
  },
  {
    title: "Simple Web",
    description:
      "Streamlined website builder, facilitating easy creation of professional websites with user-friendly features and templates.",
    tags: ["Laravel", "Javascript", "MySql", "JQuery", "Ajax", "AWS", "AWS S3 Bucket"],
    imageUrl: foodnfeedimg,
  },
  {
    title: "Fedecardio",
    description:
      "Streamlined website builder, facilitating easy creation of professional websites with user-friendly features and templates.",
    tags: ["Laravel", "Javascript", "MySql", "JQuery", "Ajax", "AWS", "AWS S3 Bucket"],
    imageUrl: foodnfeedimg,
  },
  {
    title: "SolidAge",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: foodnfeedimg,
  },
  {
    title: "HrMatters",
    description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: foodnfeedimg,
  },
  {
    title: "Gres Paris",
    description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: foodnfeedimg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "Zustand",
  "Docker",
  "Kubernetese",
  "PostgreSQL",
  "Laravel",
  "AWS",
  "Monorepo",
  "TRPC",
  "Redis",
  "CI/CD",
  "Mysql",  
  "Shadcn",
] as const;
