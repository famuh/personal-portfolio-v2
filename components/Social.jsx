import Link from "next/link"
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa"
import { TooltipTrigger, TooltipContent, TooltipProvider, Tooltip } from "@/components/ui/tooltip"


const socials = [
    { icon: <FaGithub />, path: 'https://github.com/famuh', contact: 'Github.com/famuh' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/fadhil-muhammad79/', contact: 'linkedin.com/in/fadhil-muhammad79/' },
    { icon: <FaWhatsapp />, path: 'https://wa.me/+6282294574365', contact: '+6282294574365' },
    { icon: <FaEnvelope />, path: 'mailto:fadhilmuhammad.mdev@mail.com', contact: 'fadhilmuhammad.mdev@mail.com' },
]

const Social = ({ containerStyle, iconStyles }) => {
    return (
        <div className={containerStyle}>
            {socials.map((social, index) => {
                return <Link key={index} href={social.path} className={iconStyles}>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                {social.icon}
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{social.contact}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </Link>
            })}
        </div>
    )
}

export default Social