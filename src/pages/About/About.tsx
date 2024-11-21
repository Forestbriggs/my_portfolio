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

            <h2 className='SkillsHeading'>Professional Skills</h2>
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