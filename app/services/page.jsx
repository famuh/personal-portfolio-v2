"use client"

import Link from 'next/link'
import { BsArrowDownRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { delay } from 'framer-motion'


const services = [
    {
        num: '01',
        title: 'Mobile Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad illo dolore sint. Magni commodi vitae sint quasi ad quia!',
        href: ''
    },
    {
        num: '02',
        title: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad illo dolore sint. Magni commodi vitae sint quasi ad quia!',
        href: ''
    },
    {
        num: '03',
        title: 'UI/UX Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad illo dolore sint. Magni commodi vitae sint quasi ad quia!',
        href: ''
    },
    {
        num: '04',
        title: 'System Analyst',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad illo dolore sint. Magni commodi vitae sint quasi ad quia!',
        href: ''
    },
]


const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 px-4 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                initial={{ opacity: 0}}
                animate ={{ opacity: 1, transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: 'easeIn'

                }
            }}
                 className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                    {services.map((item, index) => {
                        return (<div key={index} className="flex flex-1 flex-col justify-center gap-6 group">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{item.num}</div>
                                <Link href={item.href} className="rounded-full group-hover:bg-accent-hover/10 transition-all duration-500  w-[50px] h-[50px] flex justify-center items-center">
                                    <BsArrowDownRight className="text-3xl hover:-rotate-45 hover:text-accent-hover transition-all duration-500"/>
                                </Link>
                            </div>
                            <h2 className="text-3xl font-semibold leading-none group-hover:text-accent-hover transition-all duration-500">{item.title}</h2>
                            <p className="text-white/50">{item.description}</p>
                            <div className="border-b border-white/20 w-full"></div>

                        </div>
                        )
                    })}
                </motion.div>

            </div>


        </section>
    )
}

export default Services