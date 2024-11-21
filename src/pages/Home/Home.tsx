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
                            I&apos;m a software engineer deeply passionate about crafting intuitive and groundbreaking web applications and apps.<br /><br />

                            From a young age, I&apos;ve been captivated by the inner workings of computers, and that fascination has only grown stronger over time.
                            Today, it fuels my drive to tackle and solve complex problems, which I find immensely satisfying and rewarding.<br /><br />

                            I am fluent in <b>TypeScript</b> and <b>Python</b> and am currently working on a few
                            projects utilizing <b>React</b> and <b>Flask</b>.<br />

                            I plan to learn <b>GO</b> and <b>React Native</b> in the near future. <br /><br />

                            Also, I love <b>coffee</b> <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
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