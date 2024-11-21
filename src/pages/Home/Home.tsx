import Lottie from "lottie-react";
import SpaceBoy from "../../../LottieFiles/SpaceBoy.json";
import Typed from "./components/Typed";
import Tilt from 'react-parallax-tilt';
import HomePic from '../../assets/HomePic.png';
import { Helmet } from "react-helmet-async";
import { CiCoffeeCup } from "react-icons/ci";
const Home = () => {
    return (
        <>
            <Helmet>
                <link rel="canonical" href={'https://forestbriggsdev.vercel.app/'} />
            </Helmet>
            <div >
                <div className='HomePage'>

                    <div className='HomeText'>
                        <h1>Hi There!</h1>
                        <h2>I&apos;M <b>FOREST BRIGGS</b></h2>
                        <Typed />
                    </div>

                    <Lottie
                        className="illustration"
                        animationData={SpaceBoy}
                        loop={true}
                    />

                </div>

                <div className='AboutPage'>
                    <div className='AboutText'>
                        <h3 className='AboutTextHeading'>Brief <b>introduction</b></h3>
                        <p>
                            I&apos;m a software engineer deeply passionate about crafting intuitive
                            and groundbreaking web applications and apps.<br /><br />

                            From a young age, I&apos;ve been captivated by the inner workings of
                            computers, and that fascination has only grown stronger over time.
                            Today, it fuels my drive to tackle and solve complex problems, which I
                            find immensely satisfying and rewarding.<br /><br />

                            I&apos;ve worked with a wide range of languages and frameworks,
                            but my projects tend to revolve around <b>TypeScript</b>, <b>Python</b>,
                            and <b>Go</b>. No matter the tool or technology,
                            I love diving into new challenges and figuring out how all the pieces
                            fit together. <br /><br />

                            Oh, and I love <b>coffee</b>
                            <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
                            —it&apos;s basically fuel for all my ideas. ☕
                        </p>
                    </div>
                    <Tilt>
                        <img className='Avatar-Container' src={HomePic} alt="A Picture Of Me Playing Guitar" />
                    </Tilt>
                </div>
            </div>
        </>
    )
}

export default Home