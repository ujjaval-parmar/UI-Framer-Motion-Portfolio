import {motion} from 'framer-motion'
import { useState } from 'react'

const Test = () => {

    const [open, setOpen] = useState(false);

    const variants = {
        visible: {opacity:1, x:200, y:100, transition:{ type: 'Inertia'}},
        hidden: {opacity:0}
    }
  return (
    <div className='course'>
        <motion.div className="box"
        variants={variants}
        // initial='hidden'
        // animate='visible'
        animate={open ? 'visible' : 'hidden'}
        // initial={{
        //     opacity: 1,
        //     scale: 0.5
        // }}
        // animate={{
        //     // opacity: 1,
        //     // scale: 1,
        //     // x: 200,
        //     // y: 200
        // }}
    //    whileHover={{
    //         scale: 2
    //     }} 
    //    whileTap={{
    //         scale: 2
    //     }} 
    //    whileDrag={{
    //         scale: 2
    //     }} 
    //    whileFocus={{
    //         scale: 2
    //     }} 
    // whileInView={{
    //    height: '100vh',
    //    width: '100vw'
    // }}
    drag
        transition={{
            duration: 2,
            // delay: 2
        }}
        >

        </motion.div>

        <button onClick={()=> setOpen(!open)}>Click</button>

    </div>
  )
}

export default Test