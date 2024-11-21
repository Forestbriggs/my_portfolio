import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaDocker, FaJava } from "react-icons/fa";
import { DiNodejs, DiJavascript1, DiJava } from "react-icons/di";
import { SiChai, SiCsharp, SiCss3, SiCypress, SiDocker, SiExpress, SiFlask, SiGo, SiGraphql, SiHtml5, SiJest, SiJinja, SiMocha, SiMongodb, SiMongoose, SiMongoosedotws, SiNeovim, SiNetlify, SiNextdotjs, SiPandas, SiPlaywright, SiPostgresql, SiPostman, SiPytest, SiRedux, SiRender, SiSequelize, SiSpring, SiSqlalchemy, SiSqlite, SiTailwindcss, SiTypescript, SiUnity, SiVercel } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { VscCodeOss, VscVscode } from "react-icons/vsc";
import { CgVercel } from "react-icons/cg";
import { RxVercelLogo } from "react-icons/rx";
import { BsWordpress } from "react-icons/bs";

const Skills = ({ skill }: { skill: string }) => {
    const icon = {
        TypeScript: <SiTypescript />,
        JavaScript: <DiJavascript1 />,
        Python: <FaPython />,
        Go: <SiGo />,
        Java: <FaJava />,
        'C#': <SiCsharp />,
        SQL: <SiSqlite />,
        HTML: <SiHtml5 />,
        CSS: <SiCss3 />,

        React: <FaReact />,
        Redux: <SiRedux />,
        'Next.js': < SiNextdotjs />,
        'React Native': <TbBrandReactNative />,
        Tailwind: <SiTailwindcss />,
        Jinja: <SiJinja />,

        Node: <DiNodejs />,
        Flask: <SiFlask />,
        Express: <SiExpress />,
        SQLAlchemy: <SiSqlalchemy />,
        Sequelize: <SiSequelize />,
        Mongoose: <SiMongoose />,
        Spring: <SiSpring />,
        Pandas: <SiPandas />,

        Docker: <FaDocker />,
        Git: <FaGitAlt />,
        GitHub: <FaGithub />,
        'VS Code': <VscVscode />,
        Neovim: <SiNeovim />,
        Render: <SiRender />,
        Vercel: <SiVercel />,
        Netlify: <SiNetlify />,
        Postman: <SiPostman />,
        Figma: <FaFigma />,
        WordPress: <BsWordpress />,
        Unity: <SiUnity />,

        Jest: <SiJest />,
        Mocha: <SiMocha />,
        Chai: <SiChai />,
        Pytest: <SiPytest />,
        Cypress: <SiCypress />,
        Playwright: <SiPlaywright />,
        JUnit: <DiJava />,

        PostgreSQL: <SiPostgresql />,
        MongoDB: <SiMongodb />,
        SQLite3: <SiSqlite />,
    };

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill as keyof typeof icon]}
            <p>{skill}</p>
        </div>
    )
}

export default Skills
