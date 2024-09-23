import React from 'react';
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiDocker, SiExpress, SiFlask, SiPostgresql, SiPostman, SiRedux, SiSequelize, SiTailwindcss } from "react-icons/si";

const Skills = ({ skill }: { skill: string }) => {
    const icon = {
        Python: <FaPython />,
        Postman: <SiPostman />,
        React: <FaReact />,
        Javascript: <DiJavascript1 />,
        Node: <DiNodejs />,
        Express: <SiExpress />,
        Git: <FaGitAlt />,
        Github: <FaGithub />,
        Npm: <FaNpm />,
        Figma: <FaFigma />,
        PostgreSQL: <SiPostgresql />,
        Flask: <SiFlask />,
        Tailwind: <SiTailwindcss />,
        Redux: <SiRedux />,
        Docker: <SiDocker />,
        Sequelize: <SiSequelize />,
    }

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill as keyof typeof icon]}
            <p>{skill}</p>
        </div>
    )
}

export default Skills
