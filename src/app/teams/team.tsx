

import { Member } from "../data/member";
import Image from "next/image";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";

interface MemberCardProps {
    member: Member;
    showSocials: { [key: string]: boolean };
    onShowClick: (memberName: string) => void;
}

function MemberCard({ member, showSocials, onShowClick}: MemberCardProps) {
    return (
        <div key={member.name} className="group w-64 xl:w-64 h-[400px] lg:mb-0 lg:w-44 md:w-64 md:mb-4 flex justify-center items-center rounded-md overflow-hidden">
            {showSocials[member.name] ? (
                <div className="bg-j4-background bg-cover bg-center w-full h-full opacity-100 scale-105"></div>
            ) : (
                <div className="bg-j4-background bg-cover bg-center w-full h-full blur-[2px] group-hover:opacity-100 group-hover:filter-none group-hover:scale-105 transition duration-300 ease-in-out"></div>
            )}
            <h2 className="absolute text-2xl font-bold">{member.name}</h2>
            {showSocials[member.name] ? (
                <EyeIcon onClick={() => onShowClick(member.name)} className="w-6 absolute mt-32 cursor-pointer" />
            ) : (
                <EyeSlashIcon onClick={() => onShowClick(member.name)} className="w-6 absolute mt-32 cursor-pointer hidden group-hover:block" />
            )}
            {showSocials[member.name] && (
                <div className="absolute mt-80 w-24 justify-between flex">
                    {member.socialMedia.twitch && (
                        <a className="border-none p-[8px] bg-white cursor-pointer rounded-lg hover:transition-transform hover:scale-110" href={member.socialMedia.twitch}>
                            <Image width={24} height={24} src="/twitch.png" alt="Twitch" />
                        </a>
                    )}
                    {member.socialMedia.twitter && (
                        <a className="border-none p-[10px] bg-gray-800 cursor-pointer rounded-lg hover:transition-transform hover:scale-110" href={member.socialMedia.twitter}>
                            <Image width={20} height={20} src="/X.png" alt="X" />
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}

export default MemberCard;
