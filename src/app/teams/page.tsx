'use client'

import Image from "next/image";
import MotionPage from "../lib/motion";
import { Member } from "../data/member";
import { valMainMembers, valSubMembers } from "../data/members";

export default function Page() {

    const mainMembers: Member[] = valMainMembers;
    const subMembers: Member[] = valSubMembers;

    return (
        <MotionPage>
            <div className="w-full bg-gray-900">
                <div className="flex flex-col h-full w-full border border-blue-500  pt-[5%]">
                    <h2 className="flex w-full justify-center h-fit items-center text-3xl underline decoration-red-600">
                        VALORANT<Image width={40} height={40} src={"/Valorant.png"} alt="Valorant">
                        </Image>
                    </h2>
                    <div className="flex flex-row h-full gap-4 justify-center">
                    {mainMembers.map((member: Member) => 
                    <div key={member.name} className="flex justify-center items-center mt-[5%] border border-cyan-200 
                    w-64 h-[400px] rounded-md bg-cover bg-center bg-opacity-40 bg-j4-background">
                        <h2 key={member.name}>{member.name}</h2>
                    </div>
                    )}
                    </div>
                    <div className="flex flex-row h-full gap-4 justify-center">
                    {subMembers.map((member) => 
                        <div key={member.name} className="flex justify-center items-center mt-[5%] border border-cyan-200 
                        w-64 h-[400px] rounded-md bg-cover bg-center bg-j4-background">
                            <h2 key={member.name}>{member.name}</h2>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </MotionPage>
    )
}