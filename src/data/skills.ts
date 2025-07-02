import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaWordpress,
  FaShopify,
} from 'react-icons/fa';
import {
  SiMysql,
  SiVercel,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
  color: string; // 🆕 brand color
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
     { name: "MySQL", icon: SiMysql, color: "#00758F" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
      { name: "WordPress", icon: FaWordpress, color: "#21759B" },
      { name: "Shopify", icon: FaShopify, color: "#96BF48" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
    ],
  },
];
