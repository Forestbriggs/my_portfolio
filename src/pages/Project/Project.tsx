import ProjectBox from './components/ProjectBox';
import GLGImage from '../../assets/GLGImage.png';
import ApplySageImage from '../../assets/ApplySageImage.png';
import Q_UnderstackImage from '../../assets/Q_UnderstackImage.png';
import { Helmet } from 'react-helmet-async';

const Projects = () => {
    return (
        <>
            <Helmet>
                <link rel="canonical" href={window.location.href} />
            </Helmet>
            <div>
                <h1 className='projectHeading'>My <b>Projects</b></h1>
                <div className='project'>
                    <ProjectBox projectPhoto={ApplySageImage} projectName="ApplySage" />
                    <ProjectBox projectPhoto={Q_UnderstackImage} projectName="Q-Understack" />
                    <ProjectBox projectPhoto={GLGImage} projectName="Grand Line Gatherings" />
                </div>
            </div>
        </>
    )
}

export default Projects