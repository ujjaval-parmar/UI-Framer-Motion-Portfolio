import { motion, useInView } from 'framer-motion'
import './Services.scss'
import { useRef } from 'react'

const variants = {
    initial: {
        // x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },


}

const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref, { margin: '-100px' });

    // console.log(isInView)

    return (
        <motion.div className='services' variants={variants} initial={'initial'} whileInView={'animate'} ref={ref}>

            <motion.div className="textContainer" variants={variants}>
                <p>We focus on helping your brand grow <br /> and move forward</p>
                <hr />
            </motion.div>

             <motion.div className="titleContainer" variants={variants}>

                <div className="title">
                    <img src="people.webp" alt="" />
                    <h1><motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Ideas</h1>
                </div>

                <div className="title">
                    <h1>
                        For Your <motion.b whileHover={{ color: 'orange' }}>Business</motion.b>
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>

            </motion.div>

            <motion.div className="listContainer" variants={variants}>

                <motion.div className="box" whileHover={{ backgroundColor: 'lightgray', color: 'black' }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi et expedita exercitationem asperiores? Nihil ipsam maxime magni magnam debitis odio!</p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: 'lightgray', color: 'black' }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi et expedita exercitationem asperiores? Nihil ipsam maxime magni magnam debitis odio!</p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: 'lightgray', color: 'black' }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi et expedita exercitationem asperiores? Nihil ipsam maxime magni magnam debitis odio!</p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: 'lightgray', color: 'black' }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi et expedita exercitationem asperiores? Nihil ipsam maxime magni magnam debitis odio!</p>
                    <button>Go</button>
                </motion.div>

            </motion.div> 

        </motion.div>
    )
}

export default Services