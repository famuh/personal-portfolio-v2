import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi"

export default function Home() {
  return (
    <section className="h-full" >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Developer, Designer, Analyst</span>
            <h1 className="h1 mb-6">Hello, I'm <br /><span className="text-accent-hover">Fadhil Muhammad</span></h1>
            <p className="max-w-[500px] mb-9 text-white/88">I excel crafting elegant digital experience and i am proficient in various programming languages and technologies.</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 bg-transparent text-accent-hover border-accent-hover rounded-full hover:bg-accent-hover hover:text-primary hover:transition-all duration-500">
                <Link href="/assets/resume/myresume.pdf" download>
                 <span className="text-xl">Resume</span>
                {/* <FiDownload/> */}
                </Link>
              </Button>
              <div className="mb-8 xl:mb-0 ">
                <Social containerStyle={"flex gap-6"} iconStyles={"w-9 h-9 border border-accent-hover rounded-full flex justify-center items-center text-accent-hover text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500"}/>
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>

        <Stats/>

      </div>

    </section>
  );
}
