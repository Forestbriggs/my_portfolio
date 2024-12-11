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
    'Jest', 'Vitest', 'Mocha', 'Chai', 'Pytest', 'Cypress', 'Playwright', 'JUnit'
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
                        Hi, I&apos;m <b>Forest Briggs</b>, a <b>full-stack software developer</b> based in Oregon. <br /><br />

                        My love for technology started early—I was that kid
                        always poking around the family computer, dreaming of
                        understanding how things worked. In school, a teacher told
                        me I wasn&apos;t good enough for programming, a moment that
                        crushed my confidence and pushed me away from tech
                        for years. <br /><br />

                        After feeling stuck in a career that didn&apos;t inspire
                        me, I decided to rewrite my own story. I started
                        learning to code, and suddenly, it was like rediscovering
                        a part of myself I&apos;d forgotten. Now, as a full-stack software engineer,
                        I'm not just building websites and applications—I'm
                        proving that passion, persistence, and continuous
                        learning can turn dreams into reality. <br /><br />
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
                    < SkillsSection key={heading} heading={heading} skillsList={skillsList} />
                )
            })}
        </>
    )
}

export default About