import MotionPage from "@/app/lib/motion";
import Image from "next/image";
import Link from "next/link";


export default function Events() {
    return (
        <MotionPage>
            <div className="w-full h-[calc(100vh-64px)] overflow-auto flex items-center justify-center">
                <div className="flex flex-col h-full w-full pt-12">
                    <h1 className="pl-10 text-3xl">Ongoing Events: </h1>
                    <div className="pl-24 mt-10 flex">
                        <Image src="/projectv.png" alt="projectv" width={30} height={30}></Image>
                        <Link className="pl-2 text-2xl hover:text-gray-500 transform transition duration-200 ease-in-out" href="/events/projectv">
                            <h1>Project V</h1>
                        </Link>                    
                    </div>
                </div>
            </div>
        </MotionPage>
    )
}