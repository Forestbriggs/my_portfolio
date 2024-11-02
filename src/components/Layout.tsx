import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Lottie from "lottie-react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Navbar";
import nightsky from '../../LottieFiles/night-sky.json';

export default function Layout(): JSX.Element {

    const path = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [path]);

    return (
        <div>
            <div>

                <Lottie className="bg" animationData={nightsky} loop={true} />
                <Lottie className="bgtwo" animationData={nightsky} loop={true} />
                <Lottie className="bgtemp" animationData={nightsky} loop={true} />

                <Nav />

                <Outlet />

                <Footer />
            </div>
            <SpeedInsights />
            <Analytics />
        </div>
    );
}