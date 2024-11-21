import Skills from './components/Skills';
import Tilt from 'react-parallax-tilt';
import Me from '../../assets/Me.png';
import { Helmet } from 'react-helmet-async';

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
                        Hi, my name is <b>Forest Briggs</b> and I am from Eugene, Oregon.
                        I&apos;m a <b>Full stack web developer</b> and recent graduate of <b>App Academy</b>. <br /><br />
                        I love to create innovative projects with intuitive designs, you can check out some of my work in the projects section.<br /><br />
                        I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br />
                        Apart from coding I love to go on <b>hikes</b> and <b>play guitar</b>, also I can enjoy a good board game!
                    </p>
                </div>

                <div>
                    <Tilt>
                        <img className='Me' src={Me} alt="A Picture Of Me" />
                    </Tilt>
                </div>

            </div>

            <h1 className='SkillsHeading'>Professional Skillset</h1>
            <div className='skills'>

                <Skills skill='React' />
                <Skills skill='Redux' />
                <Skills skill='Flask' />
                <Skills skill='Tailwind' />
                <Skills skill='Node' />
                <Skills skill='Express' />
                <Skills skill='Sequelize' />
                <Skills skill='PostgreSQL' />
                <Skills skill='Git' />
                <Skills skill='Github' />
                <Skills skill='Docker' />
                <Skills skill='Javascript' />
                <Skills skill='Python' />
                <Skills skill='Postman' />
                <Skills skill='Figma' />
                <Skills skill='Npm' />

            </div>

        </>
    )
}

export default About