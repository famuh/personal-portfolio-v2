"use client"

import { FaHtml5, FaReact, FaCss3, FaGitAlt, FaGithub, FaFigma, FaTrello } from "react-icons/fa"
import { FaFlutter, FaGraduationCap } from "react-icons/fa6";
import { TbBrandKotlin } from "react-icons/tb";
import { RiFirebaseFill, RiSupabaseFill, RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { SiAndroidstudio, SiClickup, SiCanva, SiPostman, SiVercel, SiFramer, SiTailwindcss } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { LuActivity } from "react-icons/lu";



const about = {
    title: 'About Me',
    description: '2+ years of experience in Flutter with expertise in Kotlin, React.js, Tailwindcss, and UI/UX Design using Figma. Familiar with building intuitive mobile apps with BaaS support such as Firebase.',
    info: [
        {
            field: 'Name',
            value: 'Fadhil Muhammad'
        },
        {
            field: 'Phone',
            value: '(+62) 822 9457 4365'
        },
        {
            field: 'Experience',
            value: '2+ Years'
        },
        {
            field: 'Location',
            value: 'Medan, North Sumatera, Indonesia'
        },
        {
            field: 'Email',
            value: 'fadhilmuhammad.mdev@gmail.com'
        },
    ]
}

const experience = {
    icon: <LuActivity />,
    title: 'Experience',
    description: 'My experience reflects a blend of hands-on projects and collaborative work, continually building my skills and adaptability across various roles.',
    items: [
        {
            company: 'BEKUP (Baparekraf for Startup) with Dicoding Indonesia',
            position: 'Flutter Facilitator',
            duration: 'Jul 25 - Nov 2025 | Remote | Part Time',
            jobdesc: [
                'Facilitated weekly online sessions, monitoring and tracking participant progress from diverse backgrounds to ensure continuous development.',
                'Reviewed and validated participant journals with 100% compliance to program standards, maintaining high-quality learning outcomes.',
                'Supported 15+ weekly instructor-led training sessions, ensuring seamless delivery and improving overall training efficiency',
                'Implemented peer programming and collaborative learning strategies to strengthen knowledge retention and teamwork skills.'
            ]
        },
        {
            company: 'PT Damai Nusa Abadi',
            position: 'Flutter Developer',
            duration: 'Okt 2024 - Sep 25 | Hybrid | Full Time',
            jobdesc: [
                'Developed a Self-Service Application for Android TV and Tablet with optimized UI and stable performance.',
                'Maintained and updated mobile apps on Google Play Store for stability and performance.',
                'Collaborated with team members to ensure smooth integration and meet stakeholder needs.',
                'Enhanced UI based on wireframes to improve user experience.',
                'Built key features including attendance with face recognition & fake GPS detection, notifications, POS offline mode, and management systems (Hotel, Asset, Inventory, Multi-Outlet), etc'
            ]
        },
        {
            company: 'Freelance',
            position: 'Developer & System Design',
            duration: 'Jul 23 - Now',
            jobdesc: [
                'Collaborate with teams and clients in solving problems faced by clients to design or build applications for the benefit of individuals, groups, or companies.',
                'Developed a mobile attendance application for a private company, implementing location-based validation to ensure accurate employee presence records',
                'Designed an integrated livestock and distributor management system using Figma, including user flow, data structure, and high-fidelity prototype to support operational efficiency.',
                'Created a thrifting (preloved clothing) platform prototype using Figma, covering multi-user roles and transaction flow to improve user experience and business process visualization.',
                'Analyzed requirements and designed a Sales, Purchasing, and Inventory (P3) System, developing interface wireframes and process diagrams to streamline business operations.'
            ]
        },
    ]
}

const education = {
    icon: <FaGraduationCap />,
    title: 'Education & Training',
    description: 'The formal education and training attached below validates the technical skills and analytical mindset that I apply to each project.',
    items: [
        {
            institution: 'Mikroskil University',
            degree: 'Informatics Engineering',
            duration: '2020 - 2024',
            gpa: '3.91',
            achivement: ''
        },
        {
            institution: 'SMK Negeri 10 Medan',
            degree: 'Multimedia',
            duration: '2017 - 2020',
            gpa: '',
            achivement: ''
        },
        {
            institution: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
            degree: 'Mobile Development',
            duration: 'Feb 23 - Aug 23',
            gpa: '',
            achivement: ''
        },
        {
            institution: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
            degree: 'Multi-Platform (Flutter) and Back-End (Node.Js)',
            duration: 'Aug 22 - Dec 22',
            gpa: '',
            achivement: 'Best Graduate'
        },
    ]
}

const skills = {
    title: 'Skills',
    description: 'These are the skills and tools I rely on to bring ideas to life, turning them into practical solutions tailored to each project’s goals.',
    skillList: [
        {
            icon: < FaFlutter />,
            name: 'Flutter'
        },
        {
            icon: < TbBrandKotlin />,
            name: 'Kotlin'
        },
        {
            icon: < RiFirebaseFill />,
            name: 'Firebase'
        },
        {
            icon: < RiSupabaseFill />,
            name: 'Supabase'
        },
        {
            icon: < DiMysql />,
            name: 'MySql'
        },
        {
            icon: < FaReact />,
            name: 'React Js'
        },
        {
            icon: < RiNextjsFill />,
            name: 'Next Js'
        },
        {
            icon: <FaHtml5 />,
            name: 'HTML 5'
        },
        {
            icon: <FaCss3 />,
            name: 'CSS 3'
        },
        {
            icon: <SiTailwindcss />,
            name: 'Tailwind CSS'
        },
        {
            icon: <SiFramer />,
            name: 'Framer Motion'
        },
        {
            icon: <RiJavascriptFill />,
            name: 'Javascript'
        },
        {
            icon: <FaGitAlt />,
            name: 'Git'
        },
        {
            icon: <FaGithub />,
            name: 'Github'
        },
        {
            icon: <SiPostman />,
            name: 'Postman'
        },
        {
            icon: <VscVscode />,
            name: 'VS Code'
        },
        {
            icon: <SiAndroidstudio />,
            name: 'Android Studio'
        },
        {
            icon: <SiVercel />,
            name: 'Vercel'
        },
        {
            icon: <SiClickup />,
            name: 'ClickUp'
        },
        {
            icon: <FaTrello />,
            name: 'Trello'
        },
        {
            icon: <FaFigma />,
            name: 'Figma'
        },
        {
            icon: <SiCanva />,
            name: 'Canva'
        },


    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { TooltipTrigger, TooltipContent, TooltipProvider, Tooltip } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue='experience' className="flex flex-col xl:flex-row gap-[60px] mx-4">
                    <TabsList className="flex xl:flex-col flex-row  xl:gap-4 gap-8 bg-transparent gap xl:mr-[10vw]" >
                        <TabsTrigger
                            value='experience'
                            className="data-[state=active]:text-[#00ff99] data-[state=active]:border-b-2 data-[state=active]:border-[#00ff99] text-white/70 hover:text-white transition-all">
                            Experience
                        </TabsTrigger>
                        <TabsTrigger
                            value='education'
                            className="data-[state=active]:text-[#00ff99] data-[state=active]:border-b-2 data-[state=active]:border-[#00ff99] text-white/70 hover:text-white transition-all">
                            Education
                        </TabsTrigger>
                        <TabsTrigger
                            value='skills'
                            className="data-[state=active]:text-[#00ff99] data-[state=active]:border-b-2 data-[state=active]:border-[#00ff99] text-white/70 hover:text-white transition-all">
                            Skills
                        </TabsTrigger>
                        <TabsTrigger
                            value='about'
                            className="data-[state=active]:text-[#00ff99] data-[state=active]:border-b-2 data-[state=active]:border-[#00ff99] text-white/70 hover:text-white transition-all">
                            About Me
                        </TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value='experience'>
                            <h1 className="xl:text-4xl text-3xl font-bold text-center">{experience.title}</h1>
                            <p className="xl:max-w-none max-w-[600px] text-white/60 text-center mx-auto xl:mx-0 pb-4">{experience.description}</p>
                            <ScrollArea className="min-h-[70vh]">
                                <ul className="grid xl:grid-cols-2 grid-cols-1">
                                    {
                                        experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-black/20 m-1 p-4 rounded-2xl">
                                                    <span className="text-white/60">{item.duration}</span>
                                                    <h3 className="text-accent-hover text-xl leading-snug">{item.position}</h3>
                                                    <div>
                                                        <p>{item.company}</p>
                                                        <ul className="list-disc list-outside space-y-1 text-white/60">
                                                            {item.jobdesc.map((desc, index) => (
                                                                <li key={index} className="py-1">
                                                                    <span className="text-white/60">{index + 1}.</span> {desc}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </ScrollArea>

                        </TabsContent>
                        <TabsContent value='education'>
                            <div className="flex justify-center text-5xl">
                                <div>{education.icon}</div>
                            </div>
                            <h1 className="xl:text-4xl text-3xl font-bold text-center">{education.title}</h1>
                            <p className="xl:max-w-none max-w-[600px] text-white/60 text-center mx-auto xl:mx-0 pb-4">{education.description}</p>
                            <ScrollArea className="min-h-[70vh]">
                                <ul className="grid xl:grid-cols-2 grid-cols-1">
                                    {
                                        education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-black/20 m-1 p-4 rounded-2xl">
                                                    <span className="text-white/60">{item.duration}</span>
                                                    <h3 className="text-accent-hover text-xl leading-snug">{item.degree}</h3>
                                                    <div>
                                                        <p>{item.institution}</p>
                                                        <p className="text-white/60 text-xs">{item.gpa && `GPA ${item.gpa}`}</p>
                                                        <p className="text-white/60 text-xs">{item.achivement && `${item.achivement}`}</p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </ScrollArea>
                        </TabsContent>
                        <TabsContent value='skills'>
                            <h1 className="xl:text-4xl text-3xl font-bold text-center">{skills.title}</h1>
                            <p className="xl:max-w-none max-w-[600px] text-white/60 text-center mx-auto xl:mx-0 pb-4">{skills.description}</p>
                            <ScrollArea className="min-h-[70vh]">
                                <ul className="grid xl:grid-cols-5 grid-cols-3 w-full gap-4 justify-items-center">
                                    {
                                        skills.skillList.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-black/20 p-3 rounded-2xl flex justify-center w-[100px] h-[100px] group">
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger>
                                                                <div className="xl:text-5xl text-4xl group-hover:text-accent-hover transition-all duration-500">{item.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{item.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </ScrollArea>
                            <br />

                        </TabsContent>
                        <TabsContent value='about'>
                            <h1 className="xl:text-4xl text-3xl font-bold text-center">{about.title}</h1>
                            <p className="xl:max-w-none max-w-[600px] text-white/60 text-center mx-auto xl:mx-0 pb-4">{about.description}</p>
                            <div className="min-h-[70vh]">
                                <ul className="flex flex-col mx-4">
                                    {
                                        about.info.map((item, index) => {
                                            return (
                                                <li key={index} className="flex gap-4">
                                                    <span className="text-white/60">{item.field}</span>
                                                    <span>{item.value}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume