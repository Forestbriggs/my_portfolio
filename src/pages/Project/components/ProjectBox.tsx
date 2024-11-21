import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";


const ProjectBox = ({ projectPhoto, projectName }: { projectPhoto: string, projectName: string }) => {
    const nameKey = projectName.split('-').join('').split(' ').join('');

    const desc = {
        InvAuditDesc: 'A React and TypeScript-based inventory auditing tool featuring barcode scanner input, real-time discrepancy detection, and scalability for multi-tenant SaaS deployment.',
        InvAuditGithub: 'https://github.com/Forestbriggs/invaudit',

        ApplySageDesc: "A full-stack application for tracking job applications, featuring React and Flask, with dynamic analytics dashboards powered by Pandas and Charts.js.",
        ApplySageGithub: "https://github.com/Forestbriggs/apply_sage",
        ApplySageWebsite: "https://applysage.onrender.com/",

        SolarFarmDesc: "A Java console application for managing solar panel installations, featuring object-oriented principles, file-based storage, and dependency injection with Spring.",
        SolarFarmGithub: "https://github.com/Forestbriggs/solarfarm",

        QUnderstackDesc: "A Stack Overflow-inspired platform built with React, Redux, and SQLAlchemy, featuring user authentication, real-time updates, and Dockerized deployment.",
        QUnderstackGithub: "https://github.com/Sohna-AI/q-understack",
        QUnderstackWebsite: "https://q-understack.onrender.com/",

        GrandLineGatheringsDesc: "A MeetUp clone built with React, Redux, Express, and PostgreSQL, enabling event organization and community engagement with full-stack functionality.",
        GrandLineGatheringsGithub: "https://github.com/Forestbriggs/Grand-line-gatherings",
        GrandLineGatheringsWebsite: "https://grand-line-gatherings.onrender.com/",

    }

    let showDemoLink = true;
    if (desc[nameKey + 'Website' as keyof typeof desc] === undefined) {
        showDemoLink = false;
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

                <a href={desc[nameKey + 'Github' as keyof typeof desc]} target='_blank' rel='noreferrer noopener'>
                    <button className='projectbtn'><FaGithub /> Github</button>
                </a>

                <a style={{ display: !showDemoLink ? 'none' : '' }} href={desc[nameKey + 'Website' as keyof typeof desc]} target='_blank' rel='noreferrer noopener'>
                    <button className='projectbtn'><CgFileDocument /> Demo</button>
                </a>
            </div>
        </div >
    )
}

export default ProjectBox