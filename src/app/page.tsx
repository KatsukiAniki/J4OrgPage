import Image from "next/image";
import MotionPage from "./lib/motion";

export default function Home() {
  return (
    <MotionPage>
    <div className="w-full h-[calc(100vh-64px)] overflow-auto">
    <div className="flex flex-col h-full w-full border border-blue-500 pt-[5%]">
    </div>
    </div>
    </MotionPage>
  );
}
