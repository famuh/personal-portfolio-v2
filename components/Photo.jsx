"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
    return (
        <div className="w-full h-full relative group">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: 'easeIn' } }} >
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' } }}
                    className="w-[298px] h-[298px] xl:w-[300px] xl:h-[300px] mix-blend-lighten absolute overflow-hidden inset-0 rounded-full">
                    <Image src="/assets/aku.jpg" quality={100} fill alt="" className="object-cover scale-150" />
                </motion.div>


                {/* circle */}
                <motion.svg
                    className="w-[300px] h-[300px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    // xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="20 15" // <-- jarak garis dan putusannya
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: 2000, rotate: [120, 360] }} // <-- bikin efek rotasi putus-putus
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                </motion.svg>


                {/* <motion.svg 
                className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
                    <motion.circle 
                    cx="253" 
                    cy="253" 
                    r="250" 
                    stroke="#00ff99" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    // strokeLinejoin="round"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{
                            // strokeDashArray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            strokeDashoffset: 1000,
                            rotate: [120, 360]
                        }}
                        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                    />
                </motion.svg> */}
            </motion.div>


        </div>
    )
}

export default Photo