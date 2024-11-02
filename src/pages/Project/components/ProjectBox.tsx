import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";


const ProjectBox = ({ projectPhoto, projectName }: { projectPhoto: string, projectName: string }) => {
    const nameKey = projectName.split('-').join('').split(' ').join('');

    const desc = {
        ApplySageDesc: "A custom job application tracker built with React/Redux, Flask/SQLAlchemy, PostgreSQL, and Tailwind CSS. Designed to streamline my job search and crafted for real-world use—if you're a recruiter, there's a good chance I'm tracking my application to your company right here—no pressure!",
        ApplySageGithub: "https://github.com/Forestbriggs/apply_sage",
        ApplySageWebsite: "https://applysage.onrender.com/",

        QUnderstackDesc: "A Stack Overflow clone created by a three-developer team to practice Agile development and Docker containerization. Built with React/Redux, Flask/SQLAlchemy, and PostgreSQL, it offers a comprehensive Q&A platform for developers and is hosted on Render using Docker.",
        QUnderstackGithub: "https://github.com/Sohna-AI/q-understack",
        QUnderstackWebsite: "https://q-understack.onrender.com/",

        GrandLineGatheringsDesc: "A MeetUp clone developed with React/Redux, Express/Sequelize, and PostgreSQL. This platform facilitates event organization and community engagement, demonstrating a strong grasp of full-stack development and database management.",
        GrandLineGatheringsGithub: "https://github.com/Forestbriggs/Grand-line-gatherings",
        GrandLineGatheringsWebsite: "https://grand-line-gatherings.onrender.com/",
    }

    let show = '';
    if (desc[nameKey + 'Github' as keyof typeof desc] === "") {
        show = "none";
    }

    return (
        <div className='projectBox'>
            <img className='projectPhoto' src={projectPhoto} alt={`${projectName} Display`} />
            <div>
                <br />
                <h3>{projectName}</h3>
                <br />
                {desc[nameKey + 'Desc' as keyof typeof desc]}
                <br />

                <a style={{ display: show }} href={desc[nameKey + 'Github' as keyof typeof desc]} target='_blank' rel='noreferrer noopener'>
                    <button className='projectbtn'><FaGithub /> Github</button>
                </a>

                <a href={desc[nameKey + 'Website' as keyof typeof desc]} target='_blank' rel='noreferrer noopener'>
                    <button className='projectbtn'><CgFileDocument /> Demo</button>
                </a>
            </div>
        </div>
    )
}

export default ProjectBox