

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

import { HiDevicePhoneMobile } from "react-icons/hi2";
import { TbWorld, TbBrandVercelFilled } from "react-icons/tb";
import { LuPaintbrushVertical, LuGrid2X2Plus } from "react-icons/lu";
import { FaDartLang, FaFlutter } from "react-icons/fa6";
import { FaGithub, FaReact, FaHtml5, FaCss3 } from "react-icons/fa";

import { SiTensorflow, SiRedux, SiGooglegemini,SiAxios,SiMysql, SiGooglemaps, SiEslint,SiExpress,SiBulma, SiOpenstreetmap,SiKotlin, SiFlask, SiFastapi, SiKaggle, SiCodemagic, SiThemoviedatabase, SiTailwindcss, SiNextdotjs, SiFramer, SiJavascript, SiWhatsapp, SiShadcnui, SiTypescript, SiBun, SiHono, SiZod, SiPrisma } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { BsArrowDownRight } from 'react-icons/bs'


import Image from "next/image";
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const mobile = {
  title: 'Mobile',
  description: '-',
  projects: [
    {
      name: 'Food Recognizer with TFLite',
      description: "Food recognition app that identifies dishes from uploaded photos and provides recipes and nutritional info. The app uses a Kaggle food recognition model to predict the food, fetches recipe details from TheMealDB API, and generates nutritional facts (calories, protein, fats) using a customized Gemini 2.5 Flash model.",
      demo: 'https://firebasestorage.googleapis.com/v0/b/angkutin-7fc40.appspot.com/o/fadhil-porto%2Fvideo%2FScreen%20Recording%202025-09-17%20at%2020.01.42.mp4?alt=media&token=a39d1232-2463-4d28-bb02-070817265adf',
      preview: '/assets/img/food-recognizer.png',
      techstack: [
        {
          icon: <FaDartLang />,
          name: 'Dart'
        },
        {
          icon: <FaFlutter />,
          name: 'Flutter'
        },
        {
          icon: <SiKaggle />,
          name: 'Kaggle Model'
        },
        {
          icon: <SiTensorflow />,
          name: 'TensorFlow'
        },
        {
          icon: <IoLogoFirebase />,
          name: 'Firebase'
        },
        {
          icon: <SiGooglegemini />,
          name: 'GeminiAPI'
        },
      ]
    },
    {
      name: 'Chatbot Multimodal with Gemini 2.5 Flash',
      description: "Chatbot app built with Flutter and powered by the Gemini 2.5 Flash model. It supports both text conversations and image uploads, allowing the model to understand visual context and combine it with user queries.",
      demo: 'https://firebasestorage.googleapis.com/v0/b/angkutin-7fc40.appspot.com/o/fadhil-porto%2Fvideo%2FScreen%20Recording%202025-09-17%20at%2020.28.54.mp4?alt=media&token=5024395b-4864-4fce-90d0-28619eb6cbef',
      preview: '/assets/img/chatbot-gemini-prev.png',
      techstack: [
        {
          icon: <FaDartLang />,
          name: 'Dart'
        },
        {
          icon: <FaFlutter />,
          name: 'Flutter'
        },

        {
          icon: <SiGooglegemini />,
          name: 'GeminiAPI'
        },
      ]
    },
    {
      name: 'Angkutin',
      description: "Angkutin is an application that connects communities and cleaners to facilitate waste collection and reporting, with roles and features tailored to each user.",
      demo: '',
      preview: '/assets/img/angkutin-prev.png',
      techstack: [
        {
          icon: <FaDartLang />,
          name: 'Dart'
        },
        {
          icon: <FaFlutter />,
          name: 'Flutter'
        },
        {
          icon: <IoLogoFirebase />,
          name: 'Firebase'
        },
        {
          icon: <SiOpenstreetmap />,
          name: 'Openstreet Map'
        },
      ]
    },
    {
      name: "Al-Qur'an",
      description: "The Quran App is an application that makes it easy to read and understand the Qur'an, complete with translation, tafsir, and search features.",
      preview: '/assets/img/alquranapp.png',
      techstack: [
        {
          icon: <FaDartLang />,
          name: 'Dart'
        },
        {
          icon: <FaFlutter />,
          name: 'Flutter'
        },
      ]
    },
    {
      name: "Geolocation and photo-based attendance",
      description: "An application to perform employee attendance by applying geofencing and camera media, consist of Employee and Admin user",
      preview: '/assets/img/absence-preview.png',
      techstack: [
        {
          icon: <FaDartLang />,
          name: 'Dart'
        },
        {
          icon: <FaFlutter />,
          name: 'Flutter'
        },
        {
          icon: <SiGooglemaps />,
          name: 'Google Maps'
        },
        {
          icon: <SiFlask />,
          name: 'Flask'
        },
        {
          icon: <SiFastapi />,
          name: 'Fast API'
        },
      ]
    },
    {
      name: "Diatrofi",
      description: "Diatrophy provides features that help people maintain their food intake. Diatrophy also provides delicious and healthy food recipes. In addition, Diatrofi is also equipped with health-related news/articles that users can read.",
      preview: '/assets/img/diatrofi-preview.png',
      techstack: [
        {
          icon: <FaDartLang />,
          name: 'Dart'
        },
        {
          icon: <FaFlutter />,
          name: 'Flutter'
        },
      ]
    },
    {
      name: "Movie",
      description: "Movies App provides information to users regarding movies that are currently showing, will be showing and top rated movies. Click on an item to view detailed information of the movie. Users can search for movies through the search menu.",
      preview: '/assets/img/watch-prev.png',
      techstack: [
        {
          icon: <FaDartLang />,
          name: 'Dart'
        },
        {
          icon: <FaFlutter />,
          name: 'Flutter'
        },
        {
          icon: <SiThemoviedatabase />,
          name: 'The Movie DB'
        },
        {
          icon: <SiCodemagic />,
          name: 'Code Magic'
        },
        {
          icon: <IoLogoFirebase />,
          name: 'Firebase'
        },
      ]
    },
      {
      name: "StorySpot",
      description: "Story sharing app that allows users to post photos and captions. Users can also use the map feature to view people's stories from their location.",
      preview: '/assets/img/none-image-preview.png',
      techstack: [
        {
          icon: <SiKotlin />,
          name: 'Kotlin'
        },
       
      ]
    },
      {
      name: "GitLookup",
      description: "Application that allows users to search for GitHub users and view their profiles. Users can enter a username in the search bar. The application will display a list of users that match the search. Users can then select a user to view their profile.",
      preview: '/assets/img/none-image-preview.png',
      techstack: [
        {
          icon: <SiKotlin />,
          name: 'Kotlin'
        },
        {
          icon: <FaGithub />,
          name: 'GitHub API'
        },
       
      ]
    },
  ]
}

const website = {
  title: 'Website',
  description: '-',
  projects: [
        {
      name: 'P3 ( Pembalian/Purchasing, Penjualan/Sales, Persediaan/Inventory )',
      description: 'The P3 system manages purchasing, sales, and inventory within a unified platform. With structured recording, businesses can track stock and transactions accurately. This system helps improve operational efficiency and reduces data errors.',
      demo: "",
      preview: '/assets/img/p3.png',
      techstack: [
        {
          icon: <SiNextdotjs />,
          name: 'NextJs'
        },
        {
          icon: <p className="text-sm text-center">Zustand</p>,
          name: 'Zustand'
        },
        {
          icon: <SiTailwindcss />,
          name: 'Tailwind'
        },
        {
          icon: <SiTypescript />,
          name: 'Typescript'
        },
        {
          icon: <SiShadcnui />,
          name: 'Shadcn UI'
        },
        {
          icon: <SiBun />,
          name: 'Bun'
        },
        {
          icon: <SiHono />,
          name: 'Hono (Typescript)'
        },
        {
          icon: <SiZod />,
          name: 'Zod'
        },
        {
          icon: <SiPrisma />,
          name: 'Prisma'
        },
        {
          icon: <SiMysql />,
          name: 'MySql'
        },
       
        
      ],
      specific: {
        frontEnd: "Front-End",
        frontEndTech: "Next Js, Typescript, Zustand, TanStack, Tailwind CSS",
        backEnd: "Back-End",
        backEndTech: "Bun, Hono, Prisma, Zod, MySql, Typescript"
      }
    },
    {
      name: 'Alpha Coffee Medan',
      description: "A coffee shop website with a unique design. Users can directly make orders by adding menus and then filling out the order form to be sent to the seller via WhatsApp.",
      demo: 'https://alpha-coffee-psi.vercel.app/',
      preview: '/assets/img/alpha-coffee.png',
      techstack: [
        {
          icon: <SiNextdotjs />,
          name: 'NextJs'
        },
        {
          icon: <p className="text-sm text-center">Zustand</p>,
          name: 'Zustand'
        },
        {
          icon: <SiTailwindcss />,
          name: 'Tailwind'
        },
        {
          icon: <SiJavascript />,
          name: 'Javascript'
        },
        {
          icon: <SiShadcnui />,
          name: 'Shadcn UI'
        },
         {
          icon: <SiFramer />,
          name: 'Framer Motion'
        },
         {
          icon: <SiWhatsapp />,
          name: 'Whatsapp'
        },
         {
          icon: <FaGithub />,
          name: 'GitHub'
        },
         {
          icon: <TbBrandVercelFilled />,
          name: 'Vercel'
        },
      ]
    },
    {
      name: 'Personal Portfolio V2',
      description: 'Web portfolio built with NextJs, Tailwindcss for styling, Framer Motion for animation and also uses shadcn/ui for some of its components.',
      demo: '',
      preview: '/assets/img/porto-v2.png',
      techstack: [
         {
          icon: <SiNextdotjs />,
          name: 'NextJs'
        },
        {
          icon: <SiTailwindcss />,
          name: 'Tailwind'
        },
        {
          icon: <SiJavascript />,
          name: 'Javascript'
        },
        {
          icon: <SiShadcnui />,
          name: 'Shadcn UI'
        },
        {
          icon: <SiFramer />,
          name: 'Framer Motion'
        },
            {
          icon: <FaGithub />,
          name: 'GitHub'
        },
         {
          icon: <TbBrandVercelFilled />,
          name: 'Vercel'
        },
      ]
    },
    {
      name: 'ThreadHub',
      description: "A website for interactive discussions. Users can create threads (discussion topics), post replies, and easily read and follow conversations between users.",
      demo: '',
      preview: '/assets/img/thread-web.png',
      techstack: [
          {
          icon: <FaReact />,
          name: 'React JS'
        },
          {
          icon: <SiRedux />,
          name: 'Redux'
        },
          {
          icon: <SiEslint />,
          name: 'ESLint'
        },
      ]
    },
     {
      name: 'Personal Portfolio',
      description: "A visual representation of my vision and working methodology. This portfolio underscores solutions that have been successfully implemented and potential future contributions.",
      demo: 'https://famuh.github.io/web-portfolio/',
      preview: '/assets/img/porto.png',
      techstack: [
        {
          icon: <FaHtml5/>,
          name: 'HTML'
        },
        {
          icon: <FaCss3/>,
          name: 'CSS'
        },
        {
          icon: <SiJavascript/>,
          name: 'Javascript'
        },
        {
          icon: <FaGithub/>,
          name: 'Github'
        },
      ]
    },
    {
      name: 'Angkutin Admin Panel',
      description: "Admin panel that manages user data (Communities, Waste Officers, and Admins), manages waste reports or waste collection requests by communities. Accompanied by a dashboard that contains a summary of the data. Any data changes are made in real-time using Firebase Firestore.",
      demo: '',
      preview: '/assets/img/angkutin-admin.png',
      techstack: [
         {
          icon: <FaDartLang />,
          name: 'Dart'
        },
        {
          icon: <FaFlutter />,
          name: 'Flutter'
        },
        {
          icon: <IoLogoFirebase />,
          name: 'Firebase'
        },
      ]
    },
    {
      name: 'User Management',
      description: "A basic module that focuses on implementing CRUD (Create, Read, Update, Delete) operations for efficient management of user data and profiles in the system.",
      demo: '',
      preview: '/assets/img/angkutin-admin.png',
      techstack: [
        {
          icon: <FaReact />,
          name: 'React JS'
        },
        {
          icon: <SiExpress />,
          name: 'Express Js'
        },
        {
          icon: <SiBulma />,
          name: 'Bulma CSS'
        },
        {
          icon: <SiAxios />,
          name: 'Axios'
        },
        {
          icon: <SiMysql />,
          name: 'MySql'
        },
      ]
    },
    {
      name: 'Covid-19 World Tracker',
      description: "An informative web designed to present pandemic data in a transparent manner. Serves as a reliable resource to monitor the world's COVID-19 status based on data from trusted health authorities.",
      demo: '',
      preview: '/assets/img/web-covid-preview.png',
      techstack: [
         {
          icon: <FaHtml5/>,
          name: 'HTML'
        },
        {
          icon: <FaCss3/>,
          name: 'CSS'
        },
        {
          icon: <SiExpress />,
          name: 'Express Js'
        },
       
      ]
    },
   
   

  ]
}

const design = {
  title: '',
  description: '',
  productDesigns: [
    {
      title: '',
      description: '',
      preview: '',
         techstack: [
        {
          icon: <SiNextdotjs />,
          name: 'NextJs'
        },
      ]
    }
  ],
  photos: [
    '/assets/design/brosur-alpha.jpg',
    '/assets/design/data-science.jpeg',
    '/assets/design/fais.jpg',
    '/assets/design/lab.png',
    '/assets/design/pengabdian.jpg',
    '/assets/design/rekruitmen-bits.jpg',
    '/assets/design/security.jpg',
    '/assets/design/template-bitsmikro.jpg',
  ]
}

const others = {
  title: 'Other',
  description: '',
  projects: [
        {
      name: 'DMB KiosK',
      description: "Development of Self-Ordering System (SOS) specifically for Kiosk (Android TV) and Tablet devices to simplify and optimize customer ordering process. Fully responsible for intuitive UI/UX design, end-to-end API integration, frontend development, and state management.",
      demo: '',
      preview: 'https://firebasestorage.googleapis.com/v0/b/angkutin-7fc40.appspot.com/o/fadhil-porto%2Fworking%20on%2FFrame%201948754621%201.png?alt=media&token=fea500d7-f88a-479b-ad2d-64c33462961c',
      techstack: [
        {
          icon: <FaDartLang />,
          name: 'Dart'
        },
        {
          icon: <FaFlutter />,
          name: 'Flutter'
        },
      ]
    },
  ]
}
const Work = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">

      <div className="container mx-auto">
        <Tabs defaultValue='website' className="flex flex-col xl:flex-row-reverse gap-[60px] mx-4">
          <TabsList className="flex xl:flex-col flex-row  xl:gap-4 gap-8 bg-transparent gap xl:mr-[10vw]" >
           
            <TabsTrigger
              value='website'
              className="data-[state=active]:text-[#00ff99] data-[state=active]:border-b-2 data-[state=active]:border-[#00ff99] text-white/70 hover:text-white transition-all">
              Website
            </TabsTrigger>
             <TabsTrigger
              value='mobile'
              className="data-[state=active]:text-[#00ff99] data-[state=active]:border-b-2 data-[state=active]:border-[#00ff99] text-white/70 hover:text-white transition-all">
              Mobile
            </TabsTrigger>
            <TabsTrigger
              value='design'
              className="data-[state=active]:text-[#00ff99] data-[state=active]:border-b-2 data-[state=active]:border-[#00ff99] text-white/70 hover:text-white transition-all">
              Design
            </TabsTrigger>
            <TabsTrigger
              value='other'
              className="data-[state=active]:text-[#00ff99] data-[state=active]:border-b-2 data-[state=active]:border-[#00ff99] text-white/70 hover:text-white transition-all">
              Others
            </TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="h-[70vh] w-full">
           
            <TabsContent value='website'>
              <div className="flex justify-center text-5xl">
                <div><TbWorld /></div>
              </div>
              {/* <h1 className="xl:text-4xl text-3xl font-bold text-center">Judul</h1> */}
              {/* <p className="xl:max-w-none max-w-[600px] text-white/60 text-center mx-auto xl:mx-0 pb-4">deskripsi</p> */}
              {/* <ScrollArea className="h-[70vh]"> */}
              <ul className="grid xl:grid-cols-2 grid-cols-1 gap-6">
                {
                  website.projects.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="m-1 p-4 rounded-2xl  h-full flex flex-col items-start"
                      >
                        <div className="w-full h-48  rounded-2xl mb-4 flex items-center">
                          <Image alt="img" src={item.preview} width={300} height={100} className="mx-auto hover:scale-110 transition-all duration-500 rounded-2xl" />

                        </div>
                        <div className="flex justify-between items-center w-full">
                          <ul className="flex gap-3 mt-auto">
                          {item.techstack.map((tech, index) => (
                            <li key={index} className="text-xl text-white/60 group">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <div className="group-hover:text-accent-hover transition-all duration-500">{tech.icon}</div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="text-sm">{tech.name}</p>
                                  </TooltipContent>
                                </Tooltip>

                              </TooltipProvider>
                            </li>
                          ))}
                        </ul>

                          {
                            item.demo.length != 0 && (<Link
                              href={item.demo}
                              className="group flex items-center justify-center rounded-full bg-accent-hover/5 hover:bg-accent-hover/10 transition-all duration-500 h-[35px] w-[35px] hover:w-auto pl-[9px] pr-[9px] hover:pl-4 hover:pr-5"
                            >
                              <span className=" w-0 group-hover:w-auto group-hover:opacity-100 overflow-hidden transition-all duration-300 text-sm text-accent-hover">
                                Demo
                              </span>
                              <BsArrowDownRight
                                className="text-xl ml-0 group-hover:ml-2 group-hover:-rotate-45 group-hover:text-accent-hover transition-all duration-500"
                              />
                            </Link>)
                          }
                        </div>


                        <h3 className="text-accent-hover text-xl leading-none mb-2 my-4">{item.name}</h3>
                        <p className="text-white/70 text-sm mb-2">{item.description}</p>
                        {
                          item.specific != null && <p className="text-accent-hover/70 text-sm">{item.specific.frontEnd && 'Front-End : '} {item.specific.frontEndTech}</p>
                        }
                        {
                          item.specific != null && <p className="text-accent-hover/70 text-sm">{item.specific.backEnd && 'Back-End : '} {item.specific.backEndTech}</p>
                        }
                        
                      </li>

                    )
                  })
                }

              </ul>
              {/* </ScrollArea> */}
            </TabsContent>
             <TabsContent value='mobile'>
              <div className="flex justify-center text-5xl">
                <div><HiDevicePhoneMobile /></div>
              </div>
              {/* <h1 className="xl:text-4xl text-3xl font-bold text-center">Juudl</h1> */}
              {/* <p className="xl:max-w-none max-w-[600px] text-white/60 text-center mx-auto xl:mx-0 pb-4">deskripsi</p> */}
              {/* <ScrollArea className="min-h-[70vh]"> */}
              <ul className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                  mobile.projects.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="m-1 p-4 rounded-2xl h-full flex flex-col items-start"
                      >
                        <div className="w-full h-48 rounded-2xl mb-4 flex justify-center items-center">
                          <Image alt="img" src={item.preview} width={160} height={20} className="mx-auto hover:scale-110 transition-all duration-500" />
                        </div>
                        <ul className="flex gap-3 mt-auto">
                          {item.techstack.map((tech, index) => (
                            <li key={index} className="text-xl text-white/60 group">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <div className="group-hover:text-accent-hover transition-all duration-500">{tech.icon}</div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="text-sm">{tech.name}</p>
                                  </TooltipContent>
                                </Tooltip>

                              </TooltipProvider>
                            </li>
                          ))}
                        </ul>
                        <h3 className="text-accent-hover text-xl leading-none my-4">{item.name}</h3>
                        <p className="text-white/70 mb-4 text-sm">{item.description}</p>
                      </li>

                    )
                  })
                }

              </ul>
              {/* </ScrollArea> */}

            </TabsContent>

            <TabsContent value='design'>
              <div className="flex justify-center text-5xl">
                <div><LuPaintbrushVertical /></div>
              </div>
              {/* <h1 className="xl:text-4xl text-3xl font-bold text-center">Juudl</h1> */}
              {/* <p className="xl:max-w-none max-w-[600px] text-white/60 text-center mx-auto xl:mx-0 pb-4">deskripsi</p> */}
              <ScrollArea className="min-h-[70vh]">
                <ul className="grid grid-cols-1 xl:grid-cols-3 items-center">
                  {
                    design.photos.map((item, index) => {
                      return (
                        <li key={index} className="bg-black/20 m-1 p-4 rounded-2xl">
                          <Image src={item} width={300} height={100} alt="image design" loading="eager" />
                        </li>
                      )
                    })
                  }

                </ul>
              </ScrollArea>

            </TabsContent>
            <TabsContent value='other'>
              <div className="flex justify-center text-5xl">
                <div><LuGrid2X2Plus /></div>
              </div>
              {/* <h1 className="xl:text-4xl text-3xl font-bold text-center">Judul</h1> */}
              {/* <p className="xl:max-w-none max-w-[600px] text-white/60 text-center mx-auto xl:mx-0 pb-4">deskripsi</p> */}
              <ScrollArea className="min-h-[70vh]">
                  <ul className="grid xl:grid-cols-2 grid-cols-1 gap-6">
                {
                  others.projects.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="m-1 p-4 rounded-2xl  h-full flex flex-col items-start"
                      >
                        <div className="w-full h-48  rounded-2xl mb-4 flex items-center">
                          <Image alt="img" src={item.preview} width={200} height={100} className="mx-auto hover:scale-110 transition-all duration-500 rounded-2xl" />

                        </div>
                        <div className="flex justify-between items-center w-full">
                          <ul className="flex gap-3 mt-auto">
                          {item.techstack.map((tech, index) => (
                            <li key={index} className="text-xl text-white/60 group">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <div className="group-hover:text-accent-hover transition-all duration-500">{tech.icon}</div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="text-sm">{tech.name}</p>
                                  </TooltipContent>
                                </Tooltip>

                              </TooltipProvider>
                            </li>
                          ))}
                        </ul>

                          {
                            item.demo.length != 0 && (<Link
                              href={item.demo}
                              className="group flex items-center justify-center rounded-full bg-accent-hover/5 hover:bg-accent-hover/10 transition-all duration-500 h-[35px] w-[35px] hover:w-auto pl-[9px] pr-[9px] hover:pl-4 hover:pr-5"
                            >
                              <span className=" w-0 group-hover:w-auto group-hover:opacity-100 overflow-hidden transition-all duration-300 text-sm text-accent-hover">
                                Demo
                              </span>
                              <BsArrowDownRight
                                className="text-xl ml-0 group-hover:ml-2 group-hover:-rotate-45 group-hover:text-accent-hover transition-all duration-500"
                              />
                            </Link>)
                          }
                        </div>


                        <h3 className="text-accent-hover text-xl leading-none mb-2 my-4">{item.name}</h3>
                        <p className="text-white/70 mb-4 text-sm">{item.description}</p>
                      </li>

                    )
                  })
                }

              </ul>
               
              </ScrollArea>
            </TabsContent>

          </div>
        </Tabs>
      </div>

    </div>
  )
}

export default Work