import Tilt from 'react-parallax-tilt';
import Me from '../../assets/Me.png';
import { Helmet } from 'react-helmet-async';
import SkillsSection from './components/SkillsSection';

const languages: string[] = [
    'TypeScript', 'JavaScript', 'Python', 'Go', 'Java', 'C#', 'SQL', 'HTML', 'CSS'
];

const frontendFrameworksAndLibraries: string[] = [
    'React', 'Redux', 'Next.js', 'React Native', 'Tailwind', 'Jinja'
];

const backendFrameworksAndLibraries: string[] = [
    'Node', 'Flask', 'Express', 'SQLAlchemy', 'Sequelize', 'Mongoose', 'Spring', 'Pandas'
];

const testingAndQA: string[] = [
    'Jest', 'Mocha', 'Chai', 'Pytest', 'Cypress', 'Playwright', 'JUnit'
];

const databases: string[] = [
    'PostgreSQL', 'MongoDB', 'SQLite3'
];

const toolsAndPlatforms: string[] = [
    'Docker', 'Git', 'GitHub', 'VS Code', 'Neovim', 'Render',
    'Vercel', 'Netlify', 'Postman', 'Figma', 'WordPress', 'Unity'
];

const skillSections: { heading: string, skillsList: string[] }[] = [
    {
        heading: 'Programming Languages',
        skillsList: languages
    },
    {
        heading: 'Frontend Frameworks & Libraries',
        skillsList: frontendFrameworksAndLibraries
    },
    {
        heading: 'Backend Frameworks & Libraries',
        skillsList: backendFrameworksAndLibraries
    },
    {
        heading: 'Testing & QA',
        skillsList: testingAndQA
    },
    {
        heading: 'Databases',
        skillsList: databases
    },
    {
        heading: 'Tools & Platforms',
        skillsList: toolsAndPlatforms
    }
]

const About = () => {
    return (
        <>
            <Helmet>
                <link rel="canonical" href={'https://forestbriggsdev.vercel.app/about'} />
            </Helmet>
            <div className='AboutPage'>
                <div className='AboutText'>
                    <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
                    <p>
                        Hi, I&apos;m <b>Forest Briggs</b>, a <b>full-stack web
                            developer</b> based in Oregon. <br /><br />

                        I love bringing ideas to life with clean, functional
                        designs that are enjoyable to use—check out some of my
                        favorite projects in the portfolio section! <br /><br />

                        I&apos;m <b>open</b> to new collaborations or roles
                        where I can grow and make an impact. Let&apos;s
                        connect—links are in the footer. <br /><br />

                        Outside of coding, I&apos;m often out on a <b>hike</b>,
                        experimenting with my <b>guitar</b>, or challenging
                        friends to a good board game. ☕
                    </p>
                </div>

                <div>
                    <Tilt>
                        <img className='Me' src={Me} alt="A Picture Of Me" />
                    </Tilt>
                </div>

            </div>

            {skillSections.map(({ heading, skillsList }: { heading: string, skillsList: string[] }) => {
                return (
                    < SkillsSection heading={heading} skillsList={skillsList} />
                )
            })}
        </>
    )
}

export default About