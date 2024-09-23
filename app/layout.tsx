'use client'
// import type { Metadata } from "next";
import Nav from './components/Navbar';
import Lottie from 'lottie-react';
import nightsky from "../LottieFiles/night-sky.json";
import Footer from './components/Footer';
import "./index.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

// export const metadata: Metadata = {
//     title: "Forest Briggs",
//     description: "My Portfolio",
//     icons: './Favicon.png'
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    // scrollTo(0, 0);

    return (
        <html lang="en">
            < body >
                <div>
                    <div>
                        <Lottie className="bg" animationData={nightsky} loop={true} />
                        <Lottie className="bgtwo" animationData={nightsky} loop={true} />
                        <Lottie className="bgtemp" animationData={nightsky} loop={true} />

                        <Nav />

                        {children}

                        <Footer />
                    </div>
                    <Analytics />
                    <SpeedInsights />
                </div>
            </ body>
        </html>
    );
}
