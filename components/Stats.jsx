"use client"


import CountUp from "react-countup"

const stats = [
    {
        num: 2,
        text: "Years of Experience"
    },
    {
        num:25,
        text: "Technology Used"
    },
    {
        num:4,
        text: "Specialities"
    },
    {
        num:500,
        text: "Code Commits"
    }

]

function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="xl:flex justify-center gap-6 max-w-[80vw] mx-auto xl:max-w-none flex-wrap md:mb-8 grid grid-cols-2">
                {
                    stats.map((item, index) => {
                        return (
                            <div key={index} className="xl:flex-1 flex gap-1 items-center justify-center">
                                <CountUp 
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold leading-slug"
                                 />
                                 <span className="leading-slug text-4xl">+</span>
                                 <p className={`
                                    ${item.text.length < 15 ? "max-w-[120px]" : "max-w-[150px"} leading-snug text-white/80 pl-4`}>
                                    {item.text}
                                 </p>
                            </div>
                            
                        );
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Stats