import ProjectBox from './components/ProjectBox';
import InvAuditImage from '../../assets/InvAuditImage.png';
import GLGImage from '../../assets/GLGImage.png';
import ApplySageImage from '../../assets/ApplySageImage.png';
import Q_UnderstackImage from '../../assets/Q_UnderstackImage.png';
import NoUI from '../../assets/NoUI.webp';
import { Helmet } from 'react-helmet-async';

const Projects = () => {
    return (
        <>
            <Helmet>
                <link rel="canonical" href={'https://forestbriggsdev.vercel.app/projects'} />
            </Helmet>
            <div>
                <h1 className='projectHeading'>My <b>Projects</b></h1>
                <div className='project'>
                    <ProjectBox projectPhoto={InvAuditImage} projectName='InvAudit' />
                    <ProjectBox projectPhoto={ApplySageImage} projectName="ApplySage" />
                    <ProjectBox projectPhoto={NoUI} projectName='Solar Farm' />
                    <ProjectBox projectPhoto={Q_UnderstackImage} projectName="Q-Understack" />
                    <ProjectBox projectPhoto={GLGImage} projectName="Grand Line Gatherings" />
                </div>
            </div>
        </>
    )
}

export default Projects