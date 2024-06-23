import { motion, useScroll, useTransform } from 'framer-motion'
import './Parallax.scss'
import { useRef } from 'react';


const Parallax = ({ type }) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yBg = useTransform( scrollYProgress, [0,1], ["0%", "200%"]);
    const yText = useTransform( scrollYProgress, [0,1], ["0%", "500%"]);


    return (
        <div className='parallax' style={{
            background: type === 'services' ? "linear-gradient(180deg, #111132, #0c0c1d)"
                : "linear-gradient(180deg, #111132, #505064)",
        }}
        ref={ref}>
            <motion.h1
            style={{y: yText}}
            >{type === 'services' ? 'What We Do?' : "What We Did?"}</motion.h1>

            <motion.div className="mountains"></motion.div>
            <motion.div className="planets" 
            style={{
                y: yBg,
                backgroundImage: `url(${type==='services' ? 'planets.png' : 'sun.png'})`
            }}
            ></motion.div>
     
            <motion.div className="stars" style={{x: yBg}}></motion.div>


        </div>
    )
}

export default Parallax