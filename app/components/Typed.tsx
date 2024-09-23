'use client'
import Typewriter from 'typewriter-effect';

const Typed = () => {
    return (
        <div className="TypeEffect">
            <Typewriter
                options={{
                    strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 20,
                }}
            />
        </div>
    )
}

export default Typed
