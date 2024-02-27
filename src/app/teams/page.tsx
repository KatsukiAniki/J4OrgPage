'use client'

import Image from "next/image";
import MotionPage from "../lib/motion";
import { Member } from "../data/member";
import { valMainMembers, valSubMembers } from "../data/members";
import { useState } from "react";
import MemberCard from "./team";

export default function Page() {

    const mainMembers: Member[] = valMainMembers;
    const subMembers: Member[] = valSubMembers;
    const [showSocials, setShowSocials] = useState<{ [key: string]: boolean }>({});

    function handleOnShowClick(memberName: string) {
        setShowSocials(prevState => ({
            ...prevState,
            [memberName]: !prevState[memberName]
        }))
    }

    return (
        <MotionPage>
            <div className="w-full">
                <div className="flex flex-col h-full w-full pt-[4%]">
                    <h2 className="flex w-full justify-center h-fit items-center text-4xl underline decoration-red-600 pl-[1%]">
                        VALORANT<Image width={40} height={40} src={"/Valorant.png"} alt="Valorant">
                        </Image>
                    </h2>
                    <MotionPage>
                        <div className="w-full">
                            <div className="flex flex-col lg:flex-row items-center h-full gap-4 justify-center mt-[5%]">
                                {mainMembers.map((member) => (
                                    <MemberCard key={member.name} member={member} showSocials={showSocials} onShowClick={handleOnShowClick} />
                                ))}
                            </div>
                            <h2 className="text-3xl text-center mt-[2%]">Substitute</h2>
                            <div className="flex flex-row md:flex-col md:items-center h-full gap-4 justify-center mt-[2%]">
                                {subMembers.map((member) => (
                                    <MemberCard key={member.name} member={member} showSocials={showSocials} onShowClick={handleOnShowClick} />
                                ))}
                            </div>
                        </div>
                    </MotionPage>

                </div>
            </div>
        </MotionPage>
    )
}